const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

dotenv.config();

const connectDB = require("./config/db");

connectDB();

const app = express();


// Middleware
app.use(express.json());
app.use(morgan("dev"));


// Routes
app.use("/api/students", require("./routes/studentRoutes"));


// Default Route
app.get("/", (req, res) => {
  res.json({
    message: "Student API Running"
  });
});


// Invalid Route
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});


// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});