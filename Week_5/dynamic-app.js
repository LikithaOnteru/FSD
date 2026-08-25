const express = require('express');
const app = express();

const todoArr = [{
    id: 1,
    title: "learn express",
    tags: ['nodejs', "express"],
    status: { "pending": true, statusid: 1 }
}, {
    id: 2,
    title: "learn express",
    tags: ['nodejs', "express"],
    status: { "pending": true, statusid: 1 }
}];

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to the Express server!");
});

app.get("/about", (req, res) => {
    res.send("This is the about page.");
});

app.get("/todos/:id", (req, res) => {
    const paramsId = parseInt(req.params.id);
    const todo = todoArr.find((todo) => todo.id === paramsId);
    res.send(todo);
    console.log(todo);
});


/* This route is to get a todo item by its id and status.*/
app.get("/todos/:id/status/:status", (req, res) => {
    const paramsId = parseInt(req.params.id);
    const paramsStatus = req.params.status;
    const todo = todoArr.find((todo) => todo.id === paramsId && todo.status === paramsStatus);
    res.send(todo);
    console.log(todo);
});

/* This route is to get status of a todo item by its id.*/
app.get("/todos/:id/status", (req, res) => {
    const paramsId = parseInt(req.params.id);
    const todo = todoArr.find((todo) => todo.id === paramsId);
    res.send(todo.status);
    console.log(todo.status);
});


/* if we chnage the ordering of both routes, then the route with two params will be executed first and the 
route with one param will not be executed.*/


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});