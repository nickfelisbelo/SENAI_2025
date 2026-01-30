DROP DATABASE IF EXISTS lojamanga;

CREATE DATABASE lojamanga;

USE lojamanga;

CREATE TABLE manga(
    id int AUTO_INCREMENT PRIMARY KEY,
    nome varchar(100),
    genero varchar(50),
    classificacao int
    );
    
CREATE TABLE vendedor(
    id int AUTO_INCREMENT primary key,
    nome varchar(50),
    endereco varchar(200),
    nascimento date,
    idade int
    );

CREATE TABLE cliente(
    nome varchar(200),
    id int AUTO_INCREMENT PRIMARY KEY,
    endereco varchar(200),
    nascimento date,
    idade int,
    pai varchar(200),
    mae varchar(200)
);
    
CREATE TABLE vendas(
    id int AUTO_INCREMENT PRIMARY KEY,
    cliente int,
    vendedor int,
    valor decimal,
    FOREIGN KEY(cliente) REFERENCES cliente(id),
    FOREIGN KEY(vendedor) REFERENCES vendedor(id)
);