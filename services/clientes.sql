CREATE TABLE IF NOT EXISTS Clientes(
      ID int NOT NULL AUTO_INCREMENT,
      Nome varchar(150) NOT NULL,
      Idade int NOT NULL,
      UF char(2) NOT NULL,
      PRIMARY KEY (ID)
);

CREATE TABLE IF NOT EXISTS Usuarios(
      ID int NOT NULL AUTO_INCREMENT,
      Nome varchar(150) NOT NULL,
      Senha varchar(255),
      Email varchar(50) UNIQUE,
      PRIMARY KEY (ID)
);