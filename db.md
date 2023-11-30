# Database Layout

What will the database be tracking?
 - patient information
 - employee information

## Entities

#### Patient
  - fname VARCHAR(20)
  - lname VARCHAR(20)
  - arrival_time TIMESTAMP AUTO_INCREMENT
  - severity TINYINT(15)
  - issue_summary TINYTEXT

#### Employee
  - fname VARCHAR(20)
  - lname VARCHAR(20)
  - role VARCHAR(20)
