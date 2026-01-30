DROP DATABASE IF EXISTS biblioteca;

CREATE DATABASE biblioteca;

USE biblioteca;

CREATE TABLE usuarios(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    nascimento DATE
);

CREATE TABLE livros(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100) NOT NULL,
    autor VARCHAR(100) NOT NULL,
    publicacao VARCHAR(4)
);

CREATE TABLE emprestimos(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    usuario_id INTEGER,
    livro_id INTEGER,
    data_emprestimo DATE,
    data_devolucao DATE,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    FOREIGN KEY (livro_id) REFERENCES livros(id)
);

INSERT INTO usuarios (nome, email, nascimento)
VALUES(DEFAULT, "Fulano", "fulano@gmail.com", "2009-09-09"),
(DEFAULT, "Ciclano", "ciclano@gmail.com", "2008-08-08"),
(DEFAULT, "Beltrano", "beltrano@gmail.com", "12-12-2012");

SELECT * FROM usuarios;

SELECT * FROM usuarios WHERE id = 2;

INSERT INTO livros (titulo, autor, publicacao)
VALUES(DEFAULT, "LIVRO A", "Autor A", "1990"),
(DEFAULT, "LIVRO B", "Autor B", "2000"),
(DEFAULT, "LIVRO C", "Autor C", "2010");

SELECT * FROM livros;

SELECT titulo, publicacao FROM livros WHERE id = 3;

INSERT INTO emprestimos(id, usuario_id, livro_id, data_emprestimo, data_devolucao)
VALUES(DEFAULT, 1, 1, "2025-08-25", "2025-09-25"),
(DEFAULT, 2, 2, "2025-08-26", "2025-09-26");

SELECT * FROM emprestimos;

SELECT usuario_id, data_emprestimo FROM emprestimos;

UPDATE emprestimos
SET data_devolucao = "2025-10-25"
WHERE id = 1;

SELECT * FROM emprestimos WHERE id = 1;

DELETE FROM usuarios WHERE id = 3;

SELECT * FROM usuarios;

SELECT * FROM usuarios WHERE id = 3;

