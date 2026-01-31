# Comandos SQL
+ ## Lista de comandos
    - Apagar uma coluna
    - Relacionar 2 ou mais tabelas
    - Filtrar colunas em ordem
    - Realacionamento e filtro por grupo e ordem crescente
    - Média do valor
    ##
    1. ### Apagar uma coluna:
        ```
        ALTER TABLE Tabela
        DROP COLUMN Coluna;
        ```
    ##
    2. ### Relacionar 2 ou mais tabelas:
        Para funcionar a ``Coluna`` e a ``Coluna1`` precisam estar conectadas, ou seja, precisa ser uma chave primária conectada a outra tabela por uma chave estrangeira, como por exemplo um ``id``.
        ``` 
        SELECT * FROM Tabela1
        INNER JOIN Tabela2 
        ON Tabela1.Coluna = Tabela2.Coluna1;
        ``` 
    ##
    3. ### Filtrar colunas em ordem:
        Para filtrar colunas em ordem, basta escolher a(s) colunas e no ``ORDER BY`` colocar:
        - Para ordem descrescente: ``DESC``.
        - Para ordem crescente: ``ASC``.
        ```
        SELECT Tabela1.*, Tabela2.preco FROM Tabela1 
        INNER JOIN Tabela2 
        ON Tabela1.Coluna1 = Tabela2.Coluna1
        ORDER BY Tabela1.Coluna2 DESC;
        ```
    ##
    4. ### Relacionamento e filtro por grupo e ordem crescente:
        ``COUNT`` é utilizado para contagem.
        ```
        SELECT a.*, COUNT(b.Coluna1) as novoNomeDaColuna FROM Tabela1 a
        INNER JOIN Tabela2 b
        ON b.Coluna1 = a.Coluna1
        GROUP BY a.Coluna2
        ORDER BY a.Coluna1 ASC;
        ```
    ##
    5. ### Média de Valores de uma Coluna (ex: preços por categorias de filmes)
        ```
        SELECT categoria, AVG(preco) as preco_medio FROM filmes
        GROUP BY categoria;
        ```