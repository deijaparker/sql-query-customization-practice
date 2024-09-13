// Required dependencies
const { Client } = require("pg");

// PostgreSQL database connection details
const client = new Client({
  user: "your_username",
  host: "localhost",
  database: "your_database",
  password: "your_password",
  port: 5432, // Default PostgreSQL port
});

// Connect to the database
client.connect();

// 1. SELECT and AS (renaming columns)
client.query(
  `
  SELECT 
    product_id AS "Product ID", 
    product_name AS "Product Name", 
    price AS "Price"
  FROM 
    products;
`,
  (err, res) => {
    if (err) {
      console.error("Error executing SELECT and AS query:", err);
    } else {
      console.log("Result from SELECT and AS query:", res.rows);
    }
  }
);
