---
Layout:

Title: "Daily Summary"

Date: "2022-02-25"

Categories:
---

# INTRODUCTION

Today it was my second time creating a database using SQL but it was a bit different because the first time I created it on the platform which I used to watch tutorial.<br> Doing it practically was a lot different and challenging ,because I was not referencing anywhere or watching a tutorial while starting it. SQL tables are table which you create a table and insert data that you want to display on your table.<br>
We use a "CREATE TABLE" statement in order to create a new table in database.<br>

# BODY

We have a syntax to follow in order to create a table with row and columns. <br>
-- Syntax:<br>
CREATE TABLE table-name(<br>
column1 datatype,<br>
column2 datatype,<br>
column3 datatype,<br>
);<br>

A row is then created by the keys/ numbers of the entries of the data in columns.E.g column one and its content will create row 1 as the first row with data entry.<br>
The column parameters specify the names of the columns of the table.<br>

The datatype parameter specifies the type of data the column can hold (e.g. varchar, integer, date, etc.).<br>
E.g <br>
CREATE TABLE Cars (id INTEGER PRIMARY KEY, brand TEXT, quantity INTEGER);<br>

INSERT INTO Cars VALUES (1,'Toyota',89),<br>(2, 'BMW',92),<br>(3, 'Mercedes-Benz', 96),<br>(4,
'Lexus', 84),<br>(5, 'AUDI', 93);<br>

SELECT \*
FROM Cars ;<br>
For deleting in a table we use DROP TABLE<br>
The SQL DROP TABLE statement is used to remove a table definition and all the data, indexes, triggers, constraints and permission specifications for that table.<br>
Syntax
The basic syntax of this DROP TABLE statement is as follows −<br>

DROP TABLE table_name<br>

# CONCLUSION

To read more about sql tables visit -https://www.tutorialspoint.com/sql/sql-create-table.htm
