SELECT *
FROM (
    SELECT *,
           ROW_NUMBER() OVER(PARTITION BY Category ORDER BY Price DESC) AS RowNum,
           RANK() OVER(PARTITION BY Category ORDER BY Price DESC) AS RankNum,
           DENSE_RANK() OVER(PARTITION BY Category ORDER BY Price DESC) AS DenseRank
    FROM Products
) AS Ranked
WHERE RowNum <= 3;
SELECT C.Region, P.Category, SUM(OD.Quantity) AS TotalQuantity
FROM OrderDetails OD
JOIN Orders O ON OD.OrderID = O.OrderID
JOIN Customers C ON O.CustomerID = C.CustomerID
JOIN Products P ON OD.ProductID = P.ProductID
GROUP BY GROUPING SETS (
    (C.Region, P.Category),
    (C.Region),
    (P.Category),
    ()
);