// Create server Express
const express = require('express');
// Install cors library (npm i cors)
// app.use(cors())
const cors = require('cors');
// IMPORTANT: Prettier format => done!

// Establish a connection with a Database (Postgress)

// Create ToDo model
// Use the model to interact with the controller functions

// Must structure project with routes, controllers and models folders (utils)

// Routers
const { todosRouter } = require('./routes/todos.router');

// Controllers
const { globalErrorHandler } = require('./controllers/error.controller');

// Init app
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('*', cors());

// Define endpoint for ToDos

// GET fetch all ToDos
// POST Create new ToDo
// PATCH Update ToDo given an ID
// DELETE Delete ToDo given an ID (destroy or soft delete)

app.use('/api/v1/todos', todosRouter);

app.use(globalErrorHandler);

module.exports = { app };
