const express = require("express");
const router = express.Router();

const Project = require("../data/helpers/projectModel");

// getAll
router.get("/", async (_req, res) => {
  try {
    const projects = await Project.get();

    res.json({
      projects
    });
  } catch (error) {
    res.status(500).json({
      errorMessage: "Internal Server Error",
      message: error.message
    });
  }
});

// getById
router.get("/:id", (req, res) => {});

// createProject
router.post("/", (req, res) => {});

// updateProject by ID
router.put("/:id", (req, res) => {});

// deleteProject by ID
router.delete("/:id", (req, res) => {});

module.exports = router;
