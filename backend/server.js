const express = require("express");
const app = express();
const port = 4700;
const mysql = require('mysql2');

// Create MySQL connection
const db = mysql.createConnection({
  user: "root",
  host: "mysql", // Docker service name as host
  password: "sachin",
  database: "test_db"
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.log("Cannot connect to the database:", err);
    return; // Exit if there's an error
  } else {
    console.log("Database connected successfully");

    // Create table query
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS test_table (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(200)
      )
    `;
 

    // Execute the query to create the table if it doesn't exist
    db.query(createTableQuery, (error, result) => {
      if (error) {
        console.error("Error creating table:", error);
      } else {
        console.log("Table created successfully or already exists");
      }
    });
    const sql2="INSERT INTO test_table (name) VALUES ('msdhoni kumar')";
    db.query(sql2, (error, results) => {
      if (error) {
        console.error("Error inserting values:", error);
       
      } else {
        console.log("Inserted data successfully");
   
      }
    });
  }
});

app.use(express.json());  // Use middleware to parse JSON bodies

// Simple get route
app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});

// POST route to insert data into test_table


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
