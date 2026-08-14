const {
  getAllStudents,
  getStudentById,
  searchStudents,
  createStudent,
  updateStudent,
  deleteStudent
} = require('../controllers/studentController');

/**
 * Route Dispatcher for Student Endpoints
 * @param {import('http').IncomingMessage} req 
 * @param {import('http').ServerResponse} res 
 */
function studentRouter(req, res) {
  // Parse incoming URL and Query Request Parameters
  const host = req.headers.host || 'localhost:5000';
  const parsedUrl = new URL(req.url, `http://${host}`);
  const pathname = parsedUrl.pathname;
  const method = req.method;

  // Convert search parameters to an object dictionary
  const queryParams = Object.fromEntries(parsedUrl.searchParams.entries());

  // GET /api/students (supports optional request parameters e.g., /api/students?course=Computer%20Science&grade=A)
  if (pathname === '/api/students' && method === 'GET') {
    return getAllStudents(req, res, queryParams);
  }

  // GET /api/students/search (explicit request parameter filtering endpoint e.g., /api/students/search?name=Priya)
  if (pathname === '/api/students/search' && method === 'GET') {
    return searchStudents(req, res, queryParams);
  }

  // GET /api/students/:id (Path Parameter)
  if (pathname.match(/\/api\/students\/([0-9]+)/) && method === 'GET') {
    const id = pathname.split('/')[3];
    return getStudentById(req, res, id);
  }

  // POST /api/students
  if (pathname === '/api/students' && method === 'POST') {
    return createStudent(req, res);
  }

  // PUT /api/students/:id
  if (pathname.match(/\/api\/students\/([0-9]+)/) && method === 'PUT') {
    const id = pathname.split('/')[3];
    return updateStudent(req, res, id);
  }

  // DELETE /api/students/:id
  if (pathname.match(/\/api\/students\/([0-9]+)/) && method === 'DELETE') {
    const id = pathname.split('/')[3];
    return deleteStudent(req, res, id);
  }

  // 404 Not Found for unmatched endpoints
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    success: false,
    message: 'Route Not Found'
  }));
}

module.exports = studentRouter;
