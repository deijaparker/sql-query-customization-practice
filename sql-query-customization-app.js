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

// 2. DISTINCT (unique values)
client.query(
  `
    SELECT DISTINCT category FROM products;
  `,
  (err, res) => {
    if (err) {
      console.error("Error executing DISTINCT query:", err);
    } else {
      console.log("Unique categories:", res.rows);
    }
  }
);

// 3. WHERE with conditions
client.query(
  `
    SELECT product_name, price 
    FROM products
    WHERE price > 100 AND category = 'Electronics';
  `,
  (err, res) => {
    if (err) {
      console.error("Error executing WHERE query:", err);
    } else {
      console.log("Filtered results based on conditions:", res.rows);
    }
  }
);

// 4. LIKE (pattern matching)
client.query(
  `
    SELECT product_name, price 
    FROM products
    WHERE product_name LIKE 'Phone%';
  `,
  (err, res) => {
    if (err) {
      console.error("Error executing LIKE query:", err);
    } else {
      console.log("Results from LIKE pattern matching:", res.rows);
    }
  }
);

// 5. BETWEEN (range filtering)
client.query(
  `
    SELECT product_name, price 
    FROM products
    WHERE price BETWEEN 50 AND 300;
  `,
  (err, res) => {
    if (err) {
      console.error("Error executing BETWEEN query:", err);
    } else {
      console.log("Results filtered by price range:", res.rows);
    }
  }
);

// 6. AND / OR (multiple conditions)
client.query(
  `
    SELECT product_name, price 
    FROM products
    WHERE category = 'Electronics' 
      AND (price > 100 OR brand = 'BrandX');
  `,
  (err, res) => {
    if (err) {
      console.error("Error executing AND/OR query:", err);
    } else {
      console.log("Results from AND/OR conditions:", res.rows);
    }
  }
);
