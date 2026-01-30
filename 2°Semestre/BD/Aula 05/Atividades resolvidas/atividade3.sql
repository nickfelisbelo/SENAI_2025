DROP DATABASE IF EXISTS atividade3;

CREATE DATABASE atividade3;

USE atividade3;

CREATE TABLE usuarios (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100)
);

CREATE TABLE cursos (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  titulo VARCHAR(100)
);

CREATE TABLE aulas (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  curso_id INTEGER,
  titulo VARCHAR(100),
  FOREIGN KEY (curso_id) REFERENCES cursos(id)
);

CREATE TABLE progresso (
  id INTEGER PRIMARY KEY,
  usuario_id INTEGER,
  aula_id INTEGER,
  status VARCHAR(20),
  data_conclusao DATE,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
  FOREIGN KEY (aula_id) REFERENCES aulas(id)
);
