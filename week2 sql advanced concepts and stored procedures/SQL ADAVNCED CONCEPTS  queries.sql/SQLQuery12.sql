-- Using ROLLUP
SELECT C.Region, P.Category, SUM(OD.Quantity) AS TotalQty
FROM OrderDetails OD
JOIN Orders O ON OD.OrderID = O.OrderID
JOIN Customers C ON O.CustomerID = C.CustomerID
JOIN Products P ON OD.ProductID = P.ProductID
GROUP BY ROLLUP (C.Region, P.Category);