DROP DATABASE IF EXISTS atividade1;

CREATE DATABASE atividade1;

USE atividade1;

CREATE TABLE departamento (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100)
);

CREATE TABLE funcionarios (
  id integer PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100),
  cargo VARCHAR(50),
  departamento  INTEGER,
  FOREIGN KEY (departamento) REFERENCES departamento(id)
);

