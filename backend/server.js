import express from "express";
import mysql from "mysql2";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());

// Connect to MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password:"JOY123@1",
  database: "internal_reporting_system",
});

// Test MySQL connection
db.connect((err) => {
  if (err) {
    console.error("MySQL connection failed:", err);
    return;
  }

  console.log("Connected to MySQL!");
});

// Test route
app.get("/", (req, res) => {
  res.send("Backend is working!");
});
// Login route
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email = ? AND password = ?";

  db.query(sql, [email, password], (err, results) => {
    if (err) {
      console.error("Login error:", err);
      return res.status(500).json({ message: "Server error" });
    }

    if (results.length === 0) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const user = results[0];

    res.json({
      message: "Login successful",
      role: user.role,
    });
  });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});