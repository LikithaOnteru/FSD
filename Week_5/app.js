const express = require('express');
const app = express();

const todoArr = [{
    id: 1,
    title: "learn express",
    tags: ['nodejs', "express"]
}, {
    id: 2,
    title: "learn express",
    tags: ['nodejs', "express"]
}];

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to the Express server!");
});

app.get("/about", (req, res) => {
    res.send("This is the about page.");
});

app.get("/todos", (req, res) => {
    res.send(todoArr);
});

app.post("/todos", (req, res) => {
    console.log(req.body);
    todoArr.push({
        id: todoArr.length + 1,
        ...req.body
    });
    res.status(201).send("Todo added successfully!");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});