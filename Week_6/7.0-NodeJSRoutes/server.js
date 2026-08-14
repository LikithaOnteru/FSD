const http = require('http');
const studentRouter = require('./routes/studentRouter');

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  // Pass request and response objects to student router
  studentRouter(req, res);
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('Available endpoints:');
  console.log(' - GET    /api/students (Supports request params: ?course=...&grade=...&name=...&limit=...)');
  console.log(' - GET    /api/students/search (Request params filter: ?course=Computer%20Science&grade=A+)');
  console.log(' - GET    /api/students/:id (Path param)');
  console.log(' - POST   /api/students');
  console.log(' - PUT    /api/students/:id');
  console.log(' - DELETE /api/students/:id');
});
