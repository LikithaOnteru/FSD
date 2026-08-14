# 7.0 Node.js Routes - Student Management Example

A **pure Node.js** (framework-less) RESTful API demonstrating routing, controller patterns, and **Request Query Parameters** for managing 50 Indian female student records using the built-in `http` module.

## 📁 Project Structure

```text
7.0-NodeJSRoutes/
├── controllers/
│   └── studentController.js            # Contains GET, POST, PUT, DELETE & Request Query Parameter logic
├── data/
│   └── studentsData.js                 # Hardcoded array of 50 Indian female student records
├── routes/
│   └── studentRouter.js                # URL and HTTP method router dispatcher (with URLSearchParams parser)
├── Student_API.postman_collection.json # Pre-configured Postman Collection file for all routes
├── package.json                        # Project manifest
├── README.md                           # Project documentation
└── server.js                           # HTTP Server entry point
```

---

## 📬 Postman Collection Import

You can directly import the ready-to-use Postman Collection file into Postman:

1. Open **Postman**.
2. Click **Import** (top left).
3. Choose **File** and select `Student_API.postman_collection.json` located in `7.0-NodeJSRoutes/`.
4. Click **Import**.
5. All requests will use the collection variable `{{baseUrl}}` (`http://localhost:5000`).

---

## 🚀 Getting Started

### Run the Server

```bash
node server.js
```

Or using npm:

```bash
npm start
```

The server will listen on `http://localhost:5000`.

---

## 📌 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/students` | Get all 50 students (Supports request parameters: `course`, `grade`, `name`, `age`, `limit`) |
| `GET` | `/api/students/search` | Search/filter students using request parameters (`?course=...&grade=...&name=...`) |
| `GET` | `/api/students/:id` | Get student by path parameter ID |
| `POST` | `/api/students` | Add a new student |
| `PUT` | `/api/students/:id` | Update an existing student by ID |
| `DELETE` | `/api/students/:id` | Delete a student by ID |

---

## 🧪 Testing Request Parameters & Endpoints

### 1. GET All Students (Returns 50 Records)
**cURL:**
```bash
curl -X GET http://localhost:5000/api/students
```
**PowerShell:**
```powershell
Invoke-RestMethod -Uri "http://localhost:5000/api/students" -Method Get
```

---

### 2. Request Parameter Filtering Examples (Query Parameters)

#### A. Filter by Course (`course=Computer Science`)
**cURL:**
```bash
curl -X GET "http://localhost:5000/api/students?course=Computer%20Science"
```
**PowerShell:**
```powershell
Invoke-RestMethod -Uri "http://localhost:5000/api/students?course=Computer%20Science" -Method Get
```

#### B. Filter by Grade (`grade=A+`)
**cURL:**
```bash
curl -X GET "http://localhost:5000/api/students?grade=A%2B"
```
**PowerShell:**
```powershell
Invoke-RestMethod -Uri "http://localhost:5000/api/students?grade=A%2B" -Method Get
```

#### C. Search by Name Parameter (`name=Priya`)
**cURL:**
```bash
curl -X GET "http://localhost:5000/api/students/search?name=Priya"
```
**PowerShell:**
```powershell
Invoke-RestMethod -Uri "http://localhost:5000/api/students/search?name=Priya" -Method Get
```

#### D. Multiple Request Parameters (`course=Data Science&grade=A+&limit=5`)
**cURL:**
```bash
curl -X GET "http://localhost:5000/api/students?course=Data%20Science&grade=A%2B&limit=5"
```
**PowerShell:**
```powershell
Invoke-RestMethod -Uri "http://localhost:5000/api/students?course=Data%20Science&grade=A%2B&limit=5" -Method Get
```

---

### 3. GET Student by Path Parameter ID
**cURL:**
```bash
curl -X GET http://localhost:5000/api/students/1
```
**PowerShell:**
```powershell
Invoke-RestMethod -Uri "http://localhost:5000/api/students/1" -Method Get
```

---

### 4. POST (Create New Student)
**cURL:**
```bash
curl -X POST http://localhost:5000/api/students \
  -H "Content-Type: application/json" \
  -d '{"name": "Kavya Patel", "age": 23, "grade": "A+", "course": "Cyber Security"}'
```
**PowerShell:**
```powershell
Invoke-RestMethod -Uri "http://localhost:5000/api/students" -Method Post -ContentType "application/json" -Body '{"name": "Kavya Patel", "age": 23, "grade": "A+", "course": "Cyber Security"}'
```

---

### 5. PUT (Update Student by ID)
**cURL:**
```bash
curl -X PUT http://localhost:5000/api/students/1 \
  -H "Content-Type: application/json" \
  -d '{"grade": "A++", "course": "Advanced Computer Science"}'
```
**PowerShell:**
```powershell
Invoke-RestMethod -Uri "http://localhost:5000/api/students/1" -Method Put -ContentType "application/json" -Body '{"grade": "A++", "course": "Advanced Computer Science"}'
```

---

### 6. DELETE Student by ID
**cURL:**
```bash
curl -X DELETE http://localhost:5000/api/students/2
```
**PowerShell:**
```powershell
Invoke-RestMethod -Uri "http://localhost:5000/api/students/2" -Method Delete
```
