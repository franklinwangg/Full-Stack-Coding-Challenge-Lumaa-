const express = require("express");
const { createTask, deleteTask, updateTask, getTasks } = require("../controllers/taskController");

const router = express.Router();

router.post("/", createTask); // Create a task
router.get("/", getTasks); // Get all tasks
router.put("/", updateTask); // Update a task by ID
router.delete("/", deleteTask); // Delete a task by ID

module.exports = router;