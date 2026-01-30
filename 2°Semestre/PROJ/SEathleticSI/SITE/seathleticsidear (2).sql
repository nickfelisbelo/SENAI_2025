CREATE DATABASE seathleticsi;

CREATE TABLE aluno(
    aluno_id integer AUTO_INCREMENT PRIMARY KEY,
    nome varchar(50) NOT null,
    datanasc date,
    serie varchar(10),
    telefone varchar(20)
   );

CREATE TABLE professor(
    	nome varchar(50) NOT null,
    	id integer PRIMARY key AUTO_INCREMENT,
    	especialidade varchar(50),
    	telefone varchar(20)
    );
   
   CREATE TABLE turma(
       id integer AUTO_INCREMENT PRIMARY key,
       id_professor integer,
       horario date,
       localizacao varchar(50),
       FOREIGN key (id_professor) REFERENCES professor(id)
);

CREATE TABLE esporte(
    id integer AUTO_INCREMENT PRIMARY KEY,
    id_turma integer,
    nome varchar(50) NOT null,
    datanasc date,
    serie varchar(10),
    telefone varchar(20),
    FOREIGN key (id_turma) REFERENCES turma(id)
   );

   CREATE TABLE alunoporturma(
    id_turma integer,
    quantidade integer NOT null,
    FOREIGN key(id_turma) REFERENCES turma(id)
    );
