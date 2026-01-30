DROP DATABASE IF EXISTS escola;

CREATE DATABASE escola;

USE escola;

CREATE TABLE alunos(
    id integer AUTO_INCREMENT PRIMARY KEY,
	nome varchar(50) NOT null,
    turma varchar(15) NOT null
);

CREATE TABLE oficinas(
	id integer AUTO_INCREMENT PRIMARY KEY,
    nome varchar(50) NOT NULL,
    categoria varchar(30) NOT NULL,
    vagas integer NOT NULL
);

CREATE TABLE inscricoes(
	id integer AUTO_INCREMENT PRIMARY KEY,
    data_inscricao date NOT NULL,
    id_aluno integer NOT NULL,
    id_oficina integer NOT NULL,
    FOREIGN KEY(id_aluno) REFERENCES alunos(id),
    FOREIGN KEY(id_oficina) REFERENCES oficinas(id)
);

INSERT INTO alunos(id, nome, turma) VALUES(DEFAULT, "Nicollas", "2°B");
INSERT INTO oficinas(id, nome, categoria, vagas) VALUES(DEFAULT, "Clube de Xadrez", "Xadrez", 4);
INSERT INTO inscricoes(id, data_inscricao, id_aluno, id_oficina) VALUES(DEFAULT, "2025-12-12", 1, 1);