const Student = require("../models/Student");


// CREATE STUDENT
exports.createStudent = async (req, res) => {

  try {

    const student = await Student.create(req.body);

    res.status(201).json({
      success: true,
      data: student
    });

  } catch (error) {

    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};



// GET ALL STUDENTS
exports.getStudents = async (req, res) => {

  try {

    const { department, page = 1, limit = 5 } = req.query;

    let filter = {};

    if (department) {
      filter.department = department;
    }

    const students = await Student.find(filter)
      .skip((page - 1) * limit)
      .limit(Number(limit));

    res.status(200).json({
      success: true,
      data: students
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};



// GET SINGLE STUDENT
exports.getStudentById = async (req, res) => {

  try {

    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found"
      });
    }

    res.status(200).json({
      success: true,
      data: student
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};



// SEARCH STUDENT
exports.searchStudents = async (req, res) => {

  try {

    const students = await Student.find({
      name: {
        $regex: req.query.name,
        $options: "i"
      }
    });

    res.status(200).json({
      success: true,
      data: students
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};



// UPDATE STUDENT
exports.updateStudent = async (req, res) => {

  try {

    const student = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found"
      });
    }

    res.status(200).json({
      success: true,
      data: student
    });

  } catch (error) {

    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};



// DELETE STUDENT
exports.deleteStudent = async (req, res) => {

  try {

    const student = await Student.findByIdAndDelete(req.params.id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Student deleted"
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};



// DEACTIVATE STUDENT
exports.deactivateStudent = async (req, res) => {

  try {

    const student = await Student.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true }
    );

    res.status(200).json({
      success: true,
      data: student
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};