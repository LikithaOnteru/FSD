const students = require('../data/studentsData');

/**
 * Utility helper to parse JSON body from incoming HTTP request stream
 * @param {import('http').IncomingMessage} req 
 * @returns {Promise<object>}
 */
function getRequestBody(req) {
  return new Promise((resolve, reject) => {
    try {
      let body = '';
      req.on('data', chunk => {
        body += chunk.toString();
      });

      req.on('end', () => {
        if (!body) {
          return resolve({});
        }
        try {
          const parsed = JSON.parse(body);
          resolve(parsed);
        } catch (err) {
          reject(new Error('Invalid JSON payload'));
        }
      });
    } catch (error) {
      reject(error);
    }
  });
}

// @desc    Get All Students (supports optional Query Request Parameters: course, grade, name, age, limit)
// @route   GET /api/students
// @route   GET /api/students?course=Computer%20Science&grade=A+&limit=5
function getAllStudents(req, res, queryParams = {}) {
  let filtered = [...students];

  // Request Parameter: course (case-insensitive search)
  if (queryParams.course) {
    filtered = filtered.filter(s =>
      s.course.toLowerCase().includes(queryParams.course.toLowerCase())
    );
  }

  // Request Parameter: grade
  if (queryParams.grade) {
    filtered = filtered.filter(s =>
      s.grade.toLowerCase() === queryParams.grade.toLowerCase()
    );
  }

  // Request Parameter: name (case-insensitive search)
  if (queryParams.name) {
    filtered = filtered.filter(s =>
      s.name.toLowerCase().includes(queryParams.name.toLowerCase())
    );
  }

  // Request Parameter: age
  if (queryParams.age) {
    const ageNum = parseInt(queryParams.age, 10);
    if (!isNaN(ageNum)) {
      filtered = filtered.filter(s => s.age === ageNum);
    }
  }

  // Request Parameter: limit
  if (queryParams.limit) {
    const limitNum = parseInt(queryParams.limit, 10);
    if (!isNaN(limitNum) && limitNum > 0) {
      filtered = filtered.slice(0, limitNum);
    }
  }

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    success: true,
    total: students.length,
    count: filtered.length,
    queryParamsApplied: queryParams,
    data: filtered
  }));
}

// @desc    Get Single Student by Path ID Parameter
// @route   GET /api/students/:id
function getStudentById(req, res, id) {
  const student = students.find(s => s.id === parseInt(id, 10));

  if (!student) {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({
      success: false,
      message: `Student with ID ${id} not found`
    }));
  }

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    success: true,
    data: student
  }));
}

// @desc    Search / Filter Students using dedicated request parameters endpoint
// @route   GET /api/students/search?course=Data%20Science&grade=A+
function searchStudents(req, res, queryParams = {}) {
  // Delegate to query filter logic
  getAllStudents(req, res, queryParams);
}

// @desc    Create a New Student
// @route   POST /api/students
async function createStudent(req, res) {
  try {
    const body = await getRequestBody(req);
    const { name, age, grade, course } = body;

    if (!name || !age || !grade || !course) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({
        success: false,
        message: 'Please provide name, age, grade, and course'
      }));
    }

    const newId = students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1;
    const newStudent = {
      id: newId,
      name,
      age: parseInt(age, 10),
      grade,
      course
    };

    students.push(newStudent);

    res.writeHead(201, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      success: true,
      message: 'Student created successfully',
      data: newStudent
    }));
  } catch (error) {
    res.writeHead(400, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      success: false,
      message: error.message || 'Error parsing request data'
    }));
  }
}

// @desc    Update Student by ID
// @route   PUT /api/students/:id
async function updateStudent(req, res, id) {
  try {
    const index = students.findIndex(s => s.id === parseInt(id, 10));

    if (index === -1) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({
        success: false,
        message: `Student with ID ${id} not found`
      }));
    }

    const body = await getRequestBody(req);
    const { name, age, grade, course } = body;

    const updatedStudent = {
      ...students[index],
      name: name || students[index].name,
      age: age !== undefined ? parseInt(age, 10) : students[index].age,
      grade: grade || students[index].grade,
      course: course || students[index].course
    };

    students[index] = updatedStudent;

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      success: true,
      message: `Student with ID ${id} updated successfully`,
      data: updatedStudent
    }));
  } catch (error) {
    res.writeHead(400, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      success: false,
      message: error.message || 'Error updating student record'
    }));
  }
}

// @desc    Delete Student by ID
// @route   DELETE /api/students/:id
function deleteStudent(req, res, id) {
  const index = students.findIndex(s => s.id === parseInt(id, 10));

  if (index === -1) {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({
      success: false,
      message: `Student with ID ${id} not found`
    }));
  }

  const deletedStudent = students.splice(index, 1)[0];

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    success: true,
    message: `Student with ID ${id} deleted successfully`,
    data: deletedStudent
  }));
}

module.exports = {
  getAllStudents,
  getStudentById,
  searchStudents,
  createStudent,
  updateStudent,
  deleteStudent
};
