const express = require("express");

const router = express.Router();

const {
  createStudent,
  getStudents,
  getStudentById,
  searchStudents,
  updateStudent,
  deleteStudent,
  deactivateStudent
} = require("../controllers/studentController");


// SEARCH
router.get("/search", searchStudents);


// CRUD
router.post("/", createStudent);

router.get("/", getStudents);

router.get("/:id", getStudentById);

router.put("/:id", updateStudent);

router.patch("/:id", updateStudent);

router.delete("/:id", deleteStudent);


// SOFT DELETE
router.patch("/:id/deactivate", deactivateStudent);


module.exports = router;