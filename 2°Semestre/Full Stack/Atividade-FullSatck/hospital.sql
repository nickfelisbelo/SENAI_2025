DROP DATABASE IF EXISTS hospital;

CREATE DATABASE hospital;

USE hospital;

CREATE TABLE paciente(
    id integer AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(200), 
    telefone varchar(20)
);

CREATE TABLE usuario(
    id integer AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(200),
    especialidade VARCHAR(20),
    cargo VARCHAR(20),
    senha VARCHAR(40)
);

CREATE TABLE consultas(
    id integer AUTO_INCREMENT PRIMARY KEY,
    status VARCHAR(20),
    datahora date,
    id_paciente integer,
    id_medico integer,
    FOREIGN KEY (id_paciente) REFERENCES paciente(id),
    FOREIGN KEY (id_medico) REFERENCES usuario(id)
);