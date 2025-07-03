## Longest Streak by Habit

### What it does

Returns the longest streak of consecutive completed logs per habit.

### Type

📄 SQL View

### Notes

Meant to be filtered by user_id from the backend using:

```sql
SELECT * FROM longerStreak WHERE user_id = ?
```

⸻

```sql
CREATE VIEW longerStreak AS
WITH CompletedLogs AS (
SELECT
habit_id,
log_date,
ROW_NUMBER() OVER (PARTITION BY habit_id ORDER BY log_date) AS rn
FROM Habits_logs
WHERE is_completed = 1
),
GroupedLogs AS (
SELECT
habit_id,
DATE_SUB(log_date, INTERVAL rn DAY) AS grp,
COUNT(*) AS streak_length
FROM CompletedLogs
GROUP BY habit_id, grp
)
SELECT
habit_id,
MAX(streak_length) AS max_streak
FROM GroupedLogs
GROUP BY habit_id;
```

⸻

## Active Streak by Habit

### What it does

Returns the current active streak (consecutive days ending today) of each habit.

### Type

📄 SQL View

### Notes

Only includes streaks ending on the current date (CURDATE()).

⸻

```sql
CREATE VIEW activeStreak AS
WITH CompletedLogs AS (
SELECT
habit_id,
is_completed,
log_date,
ROW_NUMBER() OVER (PARTITION BY habit_id ORDER BY log_date DESC) AS row_num
FROM Habits_logs
WHERE is_completed = 1
),
ActiveStreak AS (
SELECT
habit_id,
DATE_SUB(log_date, INTERVAL row_num DAY) AS grp,
COUNT(*) AS days_streak,
MAX(log_date) AS last_log_date
FROM CompletedLogs
GROUP BY habit_id, grp
)
SELECT habit_id, grp
FROM ActiveStreak
WHERE CURDATE() = last_log_date AND days_streak > 1;
```

⸻

## Habits with High Completion in Last 30 Days

### What it does

Returns completion percentage for habits completed at least 10 times in the last 30 days.

### Type

📄 SQL View

### Notes

Filter by user_id from backend:

```sql
SELECT * FROM habits_30_days WHERE user_id = ?
```

⸻

```sql
CREATE VIEW habits_30_days AS
WITH logs_30_days AS (
SELECT
H.user_id,
H.id,
H.name,
SUM(HL.is_completed) AS days_completed,
(SUM(HL.is_completed)/30 * 100) AS completion_percentage
FROM Habits H
INNER JOIN Habits_logs HL ON H.id = HL.habit_id
WHERE HL.log_date >= DATE_SUB(CURDATE(), INTERVAL 30 DAY)
GROUP BY H.user_id, H.id, H.name
HAVING SUM(HL.is_completed) >= 10
)
SELECT * FROM logs_30_days
ORDER BY completion_percentage DESC;
```

⸻

## Last 15 Days Completion Percent

### What it does

Returns completion percentage for each habit in the last 15 days, where the habit was completed at least 5 times.

## Type

📄 SQL View

⸻

```sql
CREATE VIEW last15DaysCompletionHabitPercent AS
WITH first_table AS (
SELECT
H.user_id,
H.id,
H.name,
COUNT(HL.id) AS total_logs,
SUM(HL.is_completed) AS completed_logs,
((SUM(HL.is_completed) / COUNT(HL.id)) * 100) AS completion_percent
FROM Habits H
INNER JOIN Habits_logs HL ON H.id = HL.habit_id
WHERE HL.log_date >= DATE_SUB(CURDATE(), INTERVAL 15 DAY)
GROUP BY H.user_id, H.id, H.name
HAVING COUNT(*) >= 5
)
SELECT * FROM first_table
ORDER BY completion_percent DESC;
```

⸻

## Users with 3+ Habits and Active Logging

### What it does

Returns users who have at least 3 habits and at least 5 logs in last 15 days for at least one of them.

### Type

📄 SQL View

⸻

```sql
CREATE VIEW user_with_3_habits AS
WITH table_1 AS (
SELECT habit_id
FROM Habits_logs
WHERE log_date >= DATE_SUB(CURDATE(), INTERVAL 15 DAY)
GROUP BY habit_id
HAVING SUM(is_completed) >= 5
),
table_2 AS (
SELECT
H.user_id,
U.name,
COUNT(DISTINCT H.id) AS total_habits,
COUNT(T1.habit_id) AS h_with_5_more_hl
FROM Habits H
INNER JOIN table_1 T1 ON H.id = T1.habit_id
INNER JOIN Users U ON H.user_id = U.id
GROUP BY H.user_id, U.name
HAVING COUNT(DISTINCT H.id) >= 3
)
SELECT * FROM table_2;
```

⸻
