ALTER USER 'root'@'localhost' IDENTIFIED BY 'myPassword';
DROP DATABASE IF EXISTS burgers_db;
CREATE database burgers_db;



USE burgers_db;

CREATE TABLE burgers (
  id INT AUTO_INCREMENT NOT NULL ,
  burger_name VARCHAR(30) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);
