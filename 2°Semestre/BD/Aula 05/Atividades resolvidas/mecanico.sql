DROP DATABASE IF EXISTS mecanico;

CREATE DATABASE mecanico;

USE mecanico;

CREATE TABLE clientes(
    id integer PRIMARY KEY AUTO_INCREMENT,
    nome varchar(50),
    cpf varchar(11) NOT null
    );

CREATE TABLE veiculos(
    id integer PRIMARY KEY AUTO_INCREMENT,
    modelo varchar(50),
    placa varchar(10),
    categoria varchar(30)
    );
    
CREATE TABLE manutencoes(
    id integer PRIMARY KEY AUTO_INCREMENT,
    veiculo_id integer,
    tipo varchar(50),
    data date,
    observacao varchar(100),
    FOREIGN KEY (veiculo_id) REFERENCES veiculos(id)
    );
    
CREATE TABLE contratos(
    id integer AUTO_INCREMENT PRIMARY KEY,
    cliente_id integer,
    veiculo_id integer,
    data_inicio date,
    data_fim date,
    valor DECIMAL,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id),
    FOREIGN KEY (veiculo_id) REFERENCES veiculos(id)
    );

INSERT into clientes(id, nome, cpf)
values(DEFAULT, "Nicollas", "12345678901");

SELECT * FROM clientes;

INSERT INTO veiculos(id, modelo, placa, categoria)
values(DEFAULT, "Civic", "uisa789", "Esportivo");

SELECT * FROM veiculos;

INSERT INTO manutencoes(id, veiculo_id, tipo, data, observacao)
VALUES (DEFAULT,  1, "Batida", "2025-09-02", "Batida feia");

SELECT * FROM manutencoes;

INSERT INTO contratos(id, cliente_id, veiculo_id, data_inicio, data_fim, valor)
VALUES (DEFAULT, 1, 1, "2025-09-02", "2025-10-02", 900.90);

SELECT * FROM contratos;