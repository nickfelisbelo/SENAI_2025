DROP DATABASE IF EXISTS escola;

CREATE DATABASE escola;

USE escola;

CREATE TABLE professores(
    id integer PRIMARY KEY AUTO_INCREMENT,
    nome varchar(50),
    email varchar(70),
    telefone varchar(13)
    );
    
CREATE TABLE turmas(
    id integer PRIMARY KEY AUTO_INCREMENT,
    nome varchar(30),
    periodo varchar(20)
    );
    
CREATE TABLE disciplinas(
    id integer AUTO_INCREMENT PRIMARY KEY ,
    nome varchar(40),
    professor_id integer,
    FOREIGN KEY (professor_id) REFERENCES professores(id)
);

CREATE TABLE possui(
    turma_id integer,
    disciplina_id integer,
    FOREIGN KEY (turma_id) REFERENCES turmas(id),
    FOREIGN KEY (disciplina_id) REFERENCES disciplinas(id)
);

insert into professores(id, nome, email, telefone)
VALUES (DEFAULT, "Reenye", "reenielima@gmail.com", "19 12345-6789");

SELECT * FROM professores;

INSERT INTO turmas(id, nome, periodo)
VALUES (DEFAULT, "2° B", "Manhã");

SELECT * FROM turmas;

INSERT into disciplinas(id, nome, professor_id)
VALUES (DEFAULT, "Banco de Dados", 1);

SELECT * FROM disciplinas;

INSERT INTO possui(turma_id, disciplina_id)
VALUES (1, 1);