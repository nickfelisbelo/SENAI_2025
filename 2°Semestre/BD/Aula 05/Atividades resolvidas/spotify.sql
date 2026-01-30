DROP DATABASE IF EXISTS spotify;

CREATE DATABASE spotify;

USE spotify;
    
CREATE TABLE usuarios(
    id integer AUTO_INCREMENT PRIMARY KEY,
    nome varchar(50),
    email varchar(50)
    );

CREATE TABLE musicas(
    id integer AUTO_INCREMENT PRIMARY KEY,
    titulo varchar(40),
    artista varchar(30),
    duracao time
    );
    
CREATE TABLE playlist(
    id integer AUTO_INCREMENT PRIMARY KEY,
    nome varchar(40),
    usuario_id integer,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
    );
    
CREATE TABLE playlist_musica(
    ordem integer,
    id integer AUTO_INCREMENT PRIMARY KEY,
    musica_id integer,
    playlist_id integer,
    FOREIGN KEY (playlist_id) REFERENCES playlist(id),
    FOREIGN KEY (musica_id) REFERENCES musicas(id)
    );

INSERT INTO usuarios(id, nome, email)
VALUES (DEFAULT, "Robson", "robson@gmail.com");

SELECT * FROM usuarios;

INSERT INTO musicas(id, titulo, artista, duracao)
VALUES (DEFAULT, "Musica 1", "Artista 1", "0:03:23");

SELECT * FROM musicas;

INSERT INTO playlist(id, nome, usuario_id)
VALUES (DEFAULT, "Playlist 1", 1);

SELECT * FROM playlist;

INSERT INTO playlist_musica(ordem, id, musica_id, playlist_id)
VALUES (1, DEFAULT, 1, 1);

SELECT * FROM playlist_musica;