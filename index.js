const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dataRoutes = require("./routes/dataRoutes");
const authRoutes = require("./routes/authRoutes"); // Authentication routes
const { connectDB } = require("./config/db");

const app = express();
const port = 3000;

// ✅ Enable CORS
// Allow frontend deployed on Vercel and local development (if applicable) to access the backend.
const allowedOrigins = [
  "http://localhost:5173", // Local development URL
  "https://crud-frontend-five-dun.vercel.app", // Deployed frontend URL on Vercel
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests from the listed origins
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"], // Methods that are allowed
    allowedHeaders: ["Content-Type", "Authorization"], // Headers that are allowed
  })
);

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to DB
connectDB();

// Use routes
app.use("/tasks", dataRoutes);
app.use("/api", authRoutes); // Authentication routes

// Start the server
app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
