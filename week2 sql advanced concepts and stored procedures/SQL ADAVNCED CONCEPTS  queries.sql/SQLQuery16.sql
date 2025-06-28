WITH Calendar AS (
    SELECT CAST('2025-01-01' AS DATE) AS CalendarDate
    UNION ALL
    SELECT DATEADD(DAY, 1, CalendarDate)
    FROM Calendar
    WHERE CalendarDate < '2025-01-31'
)
SELECT * FROM Calendar
OPTION (MAXRECURSION 32);