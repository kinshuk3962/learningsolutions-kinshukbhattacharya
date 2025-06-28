WITH Calendar AS (
    SELECT CAST('2025-01-01' AS DATE) AS CalendarDate
    UNION ALL
    SELECT DATEADD(DAY, 1, CalendarDate)
    FROM Calendar
    WHERE CalendarDate < '2025-01-31'
)
SELECT * FROM Calendar
OPTION (MAXRECURSION 32);

CREATE TABLE StagingProducts (
    ProductID INT,
    ProductName VARCHAR(100),
    Category VARCHAR(50),
    NewPrice DECIMAL(10, 2)
);

-- Example data
INSERT INTO StagingProducts (ProductID, ProductName, Category, NewPrice) VALUES
(1, 'Laptop', 'Electronics', 1100.00),
(5, 'Smartwatch', 'Electronics', 300.00);

MERGE INTO Products AS target
USING StagingProducts AS source
ON target.ProductID = source.ProductID
WHEN MATCHED THEN
    UPDATE SET 
        target.ProductName = source.ProductName,
        target.Category = source.Category,
        target.Price = source.NewPrice
WHEN NOT MATCHED THEN
    INSERT (ProductID, ProductName, Category, Price)
    VALUES (source.ProductID, source.ProductName, source.Category, source.NewPrice);