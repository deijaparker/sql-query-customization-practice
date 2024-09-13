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

-- 4. LIKE (pattern matching)
SELECT 
    product_name, 
    price 
FROM 
    products
WHERE 
    product_name LIKE 'Phone%';

-- 5. BETWEEN (range filtering)
SELECT 
    product_name, 
    price 
FROM 
    products
WHERE 
    price BETWEEN 50 AND 300;

-- 6. AND / OR (multiple conditions)
SELECT 
    product_name, 
    price 
FROM 
    products
WHERE 
    category = 'Electronics' 
    AND (price > 100 OR brand = 'BrandX');

-- 7. ORDER BY (sorting results)
SELECT 
    product_name, 
    price 
FROM 
    products
ORDER BY 
    price DESC;

-- 8. LIMIT (restricting the number of rows returned)
SELECT 
    product_name, 
    price 
FROM 
    products
ORDER BY 
    price DESC
LIMIT 5;

-- 9. CASE (conditional logic)
SELECT 
    product_name, 
    price, 
    CASE 
        WHEN price > 500 THEN 'Premium'
        WHEN price BETWEEN 100 AND 500 THEN 'Mid-Range'
        ELSE 'Budget'
    END AS "Price Category"
FROM 
    products;
