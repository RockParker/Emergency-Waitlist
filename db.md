# Database Layout

What will the database be tracking?
 - patient information
 - employee information
 - passwords for employees

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
  - medical_license VARCHAR(35)
  - p_id INT FOREIGN KEY

#### Passwords
 - p_id INT AUTO_INCREMENT PRIMARY KEY
 - password VARCHAR(25)
