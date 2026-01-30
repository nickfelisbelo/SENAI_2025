# Atividades Banco de Dados
+ ## SUM()
    1.  ```
        SELECT SUM(preco) AS "valor_total" FROM locacoes; 
        ```


    2. ```
        SELECT SUM(preco) AS "valor_total" FROM locacoes WHERE status = "entregue"; 
        ```
+ ## AVG()
    1. ```
       SELECT AVG(preco) FROM filmes WHERE categoria = "comédia"; 
        ```
    2. ```
        SELECT AVG(preco) FROM locacoes WHERE status = "pendente";
        ```
+ ## COUNT()
    1. ```
        SELECT COUNT(DISTINCT titulo) FROM filmes;
        ```
    2. ```
        SELECT COUNT(id) FROM locacoes WHERE YEAR(data_locacao) = 2025;
        ```
+ ## MAX()
    1. ```
        SELECT MAX(preco) FROM filmes;
        ```
    2. ```
        SELECT max(data_locacao) FROM locacoes;
        ```
+ ## MIN()
    1. ```
        SELECT MIN(preco) FROM filmes WHERE categoria = "terror";
        ```
    2. ```
        SELECT MIN(data_locacao) FROM locacoes;
        ```
+ ## CONCAT()
    1. ```
        SELECT CONCAT(cliente_id,"-", filme_id) AS "id_cliente_filme" FROM locacoes;
        ```
    2. ```
        SELECT CONCAT("Cliente ", cliente_id," alugou ", filme_id, " em ", data_locacao) AS "id_cliente_filme" FROM locacoes;
        ```
+ ## LENGTH()
    1. ```
        SELECT LENGTH(nome) FROM clientes;
        ```
    2. ```
        SELECT titulo FROM filmes WHERE LENGTH(titulo) > 15;
        ```
+ ## LOWER()
    1. ```
        SELECT LOWER(titulo) FROM filmes;
        ```
    2. ```
        SELECT LOWER(nome) FROM clientes;
        ```
+ ## UPPER()
    1. ```  
        SELECT UPPER(nome) FROM clientes;
        ```
    2. ```
        SELECT UPPER(categoria) FROM filmes;
        ```
+ ## ROUND()
    1. ```
        SELECT ROUND(preco) FROM filmes;    
        ```
    2. ```
        SELECT ROUND((preco), 1) FROM filmes;
        ```
+ ## POW()
    1. ```
        SELECT *, POW(preco, 2) AS "preco\_quadrado" FROM filmes;
        ```
    2. ```
        SELECT POW(id, 2) FROM clientes;
        ```
+ ## MOD()
    1. ```
        SELECT * FROM clientes WHERE MOD(id, 2) = 0;    
        ```
    2. ```
        SELECT * FROM filmes WHERE MOD(id, 3) = 0;
        ```
+ ## NOW() / CURDATE()
    1. ```
        SELECT NOW();
        ```
    2. ```
        SELECT * FROM locacoes WHERE data_locacao < CURDATE();
        ```
+ ## DAY() / MONTH() / YEAR()
    1. ```
        SELECT *, DAY(data_locacao) AS "dia_locacao" FROM locacoes;
        ```
    2. ```
        SELECT * FROM locacoes WHERE MONTH(data_locacao) = 1;
        ```