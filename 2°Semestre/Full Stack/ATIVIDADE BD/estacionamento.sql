DROP DATABASE  IF EXISTS estacionamento;

CREATE DATABASE estacionamento;

USE estacionamento;

CREATE TABLE veiculo(
    placa VARCHAR(10) PRIMARY KEY NOT NULL,
    modelo VARCHAR(20),
    localizacao VARCHAR(20)
);

CREATE TABLE vaga(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,					
    status VARCHAR(20)
);

CREATE TABLE registros(
    hora_entrada datetime,
    hora_saida datetime,
    placa_veiculo VARCHAR(10),
    id_vaga INTEGER,
    FOREIGN KEY(placa_veiculo) REFERENCES veiculo(placa),
    FOREIGN KEY(id_vaga) REFERENCES vaga(id)
);

INSERT INTO veiculo(placa, modelo, localizacao) VALUES ("1234abc", "Carro Mercedes", "estacionamento");
INSERT INTO veiculo(placa, modelo, localizacao) VALUES ("12abc34", "Carro Mitsubishi", "fora");
INSERT INTO veiculo(placa, modelo, localizacao) VALUES ("1ab234c", "Carro Honda", "estacionamento");
INSERT INTO veiculo(placa, modelo, localizacao) VALUES ("abc1234", "Carro BMW", "estacionamento");

INSERT INTO vaga(id, status) VALUES (DEFAULT, "ocupada");
INSERT INTO vaga(id, status) VALUES (DEFAULT, "ocupada");
INSERT INTO vaga(id, status) VALUES (DEFAULT, "ocupada");
INSERT INTO vaga(id, status) VALUES (DEFAULT, "disponivel");

INSERT INTO registros(hora_entrada, hora_saida, placa_veiculo, id_vaga) VALUES ("2025-11-11 11:30:00", "2025-11-11 14:30:00", "abc1234", 1);
INSERT INTO registros(hora_entrada, hora_saida, placa_veiculo, id_vaga) VALUES ("2025-11-11 12:30:00", "2025-11-11 15:30:00", "1234abc", 2);
INSERT INTO registros(hora_entrada, hora_saida, placa_veiculo, id_vaga) VALUES ("2025-11-09 13:30:00", "2025-11-09 16:30:00", "1ab234c", 3);
INSERT INTO registros(hora_entrada, hora_saida, placa_veiculo, id_vaga) VALUES ("2025-11-11 14:30:00", "2025-11-11 16:30:00", "12abc34", 4);

SELECT * FROM veiculo WHERE localizacao = "estacionamento";
SELECT *, (hora_saida - hora_entrada) / 10000 * 6 AS total_pagar FROM registros;
SELECT * FROM registros WHERE placa_veiculo = "abc1234";
SELECT * FROM registros WHERE DATE(hora_entrada) = "2025-11-11";