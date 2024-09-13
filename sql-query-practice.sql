-- SQL Query Customization Example

-- 1. SELECT and AS (renaming columns)
SELECT 
    product_id AS "Product ID", 
    product_name AS "Product Name", 
    price AS "Price"
FROM 
    products;

-- 2. DISTINCT (unique values)
SELECT 
    DISTINCT category 
FROM 
    products;

-- 3. WHERE with conditions
SELECT 
    product_name, 
    price 
FROM 
    products
WHERE 
    price > 100 AND category = 'Electronics';
