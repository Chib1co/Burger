ALTER USER 'root'@'localhost' IDENTIFIED BY 'Pass1on103';
DROP DATABASE IF EXISTS burgers_db;
CREATE database burgers_db;



USE burgers_db;

CREATE TABLE burgers (
  id INT AUTO_INCREMENT NOT NULL ,
  burger_name VARCHAR(30) NULL,
  devoured BOOLEAN NULL,
  PRIMARY KEY (id)
);
