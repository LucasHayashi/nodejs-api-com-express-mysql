CREATE TABLE IF NOT EXISTS Clientes(
      ID int NOT NULL AUTO_INCREMENT,
      Nome varchar(150) NOT NULL,
      Idade int NOT NULL,
      UF char(2) NOT NULL,
      PRIMARY KEY (ID)
);