# Como funciona as funções matemáticas, texto e as datas no Banco de Dados MYSQL
+ ## Funções Matemáticas 
    Há várias funções na matemática e o MYSQL ajuda com essas funções com esses parâmetros:
    - Soma = ``SUM()``
    - Média = ``AVG()``
    - Máximo = ``MAX()``
    - Mínimo = ``MIN()``
    - Contagem = ``COUNT()``
    - Arredondamento = ``ROUND()``
    - Potência = ``POW()``
    - Módulo (resto da divisão) = ``MOD()``

    ### Exemplos:
    1.  ```
        SELECT 
        SUM(quantidade) AS "quantidade_total", 
        SUM(quantidade * preco_unitario) AS "faturamento",
        AVG(quantidade * preco_unitario) AS "preco_medio",
        MAX(quantidade * preco_unitario) AS "maior_venda",
        MIN(quantidade * preco_unitario) AS "menor_venda"
        FROM pedidos
        WHERE produto =  "arroz";
        ```
    2.  ```
        SELECT COUNT(DISTINCT produto) AS "produtos_vendidos" FROM pedidos;
        ```
+ ## Funções de Texto
    - Concatenação de colunas = ``CONCAT()``
    - Tamanho do texto = ``LENGTH()``
    - Letra Maiúscula = ``UPPER()``
    - Letra Minúscula = ``LOWER()``

    ### Exemplos:
    1.  ```
        SELECT CONCAT(cliente_nome, ' comprou ', produto) AS descricao FROM pedidos;
        ```
    2.  ```
        SELECT cliente_nome, LENGTH(cliente_nome) AS tamanho_nome FROM pedidos;
        ```
    3.  ```
        SELECT UPPER(cliente_nome) AS nome_maiusculo FROM pedidos;
        ```
    4.  ```
        SELECT LOWER(produto) AS produto_minusculo FROM pedidos;
        ```

+ ## Funções de Tempo
    As datas são separas em 5 parâmetros:
    - Dia = ``DAY``
    - Meses = ``MONTH``
    - Anos = ``YEAR``
    - Data e Hora atual = ``NOW()``
    - Data atual = ``CURDATE()``
    
    ### Exemplo:
    ```
    SELECT *, (quantidade * preco_unitario) As "valor_final" FROM pedidos
    WHERE MONTH(data_pedido) = 3 
    AND DAY(data_pedido) = 10;
    ```