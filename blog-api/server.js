const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

dotenv.config();

const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(express.json());

app.use(morgan("dev"));


// ROUTES
app.use("/api/users", require("./routes/userRoutes"));

app.use("/api/posts", require("./routes/postRoutes"));

app.use("/api/comments", require("./routes/commentRoutes"));


// HOME ROUTE
app.get("/", (req, res) => {
  res.json({
    message: "Blog API Running"
  });
});


// INVALID ROUTE
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});