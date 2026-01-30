DROP DATABASE IF EXISTS lojao;

CREATE DATABASE lojao; /*Criar uma Base de Dados*/

USE lojao;

CREATE TABLE produto(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL ,
    preco FLOAT NOT NULL,
    descricao VARCHAR(150)
);

CREATE TABLE pedidos(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    produto_id INTEGER,
    cliente VARCHAR(150),
    quantidade INTEGER,
    data DATETIME,
    FOREIGN KEY (produto_id) REFERENCES produto(id)
);

INSERT INTO produto (preco, nome, descricao)
VALUES(10.50, "Maquiaji", "Qualidade Galantida");

SELECT nome, preco FROM produto;

INSERT INTO produto
VALUES(DEFAULT, "Base", 6.99, "De Confianssa");

SELECT * FROM produto WHERE id = 1;/*Busca produto com id 1*/

INSERT INTO pedidos
VALUES
(DEFAULT, 1, "Fulana", 2, "2025-08-20"),
(DEFAULT, 2, "Fulana", 1, "2025-08-20"),
(DEFAULT, 2, "Beltrana", 5, "2025-08-23");

SELECT * FROM pedidos;

SELECT * FROM pedidos WHERE data = "2025-08-23";/*Busca pedidos na data de 23/08/2025 (WHERE -> filtro)*/

/*UPDATE -> Atualiza os registro da tabela*/
UPDATE pedidos
SET quantidade = 2, data = "2025-08-21"
WHERE id = 3;

SELECT * FROM pedidos WHERE id = 3;

DELETE FROM pedidos WHERE id = 3;/*Remove um registro da tabela*/

