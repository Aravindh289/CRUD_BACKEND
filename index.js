const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dataRoutes = require("./routes/dataRoutes");
const authRoutes = require("./routes/authRoutes"); // Authentication routes
const { connectDB } = require("./config/db");

const app = express();
const port = 3000;

// ✅ Enable CORS
app.use(cors({ origin: "http://localhost:5173" })); // Allows frontend requests from this origin

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to DB
connectDB();

// Use routes
app.use("/tasks", dataRoutes);
app.use("/api", authRoutes);  // Authentication routes

// Start the server
app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});
