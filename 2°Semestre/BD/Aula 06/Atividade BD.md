/\*SUM()\*/



/\*1\*/

SELECT

SUM(preco) AS "valor\_total"

FROM locacoes;



/\*2\*/

SELECT

SUM(preco) AS "valor\_total"

FROM locacoes

WHERE status = "entregue";







/\*AVG()\*/



/\*1\*/

SELECT 

AVG(preco)

FROM filmes

Where categoria = "comédia";



/\*2\*/

SELECT 

AVG(preco) 

FROM locacoes

Where status = "pendente";







/\*COUNT()\*/



/\*1\*/

SELECT

COUNT(DISTINCT titulo)

FROM filmes;



/\*2\*/

SELECT

COUNT(id)

FROM locacoes

WHERE 

YEAR(data\_locacao) = 2025;







/\*MAX()\*/



/\*1\*/

SELECT

MAX(preco)

FROM filmes;



/\*2\*/

SELECT

max(data\_locacao)

FROM locacoes;







/\*MIN()\*/



/\*1\*/

SELECT

MIN(preco)

FROM filmes

Where categoria = "terror";



/\*2\*/

SELECT

MIN(data\_locacao)

FROM locacoes;







/\*CONCAT()\*/



/\*1\*/

SELECT

concat(cliente\_id,"-", filme\_id) AS "id\_cliente\_filme"

from locacoes;



/\*2\*/

SELECT

concat("Cliente ", cliente\_id," alugou ", filme\_id, " em ", data\_locacao) AS "id\_cliente\_filme"

from locacoes;







/\*LENGTH()\*/



/\*1\*/

SELECT

LENGTH(nome)

FROM clientes;



/\*2\*/

SELECT

titulo

FROM filmes

WHERE LENGTH(titulo) > 15;







/\*LOWER()\*/



/\*1\*/

SELECT

LOWER(titulo)

FROM filmes;



/\*2\*/

SELECT

LOWER(nome)

FROM clientes;







/\*UPPER\*/



/\*1\*/

SELECT

UPPER(nome)

FROM clientes;



/\*2\*/

SELECT

UPPER(categoria)

FROM filmes;







/\*ROUND()\*/



/\*1\*/

SELECT

ROUND(preco)

FROM filmes;



/\*2\*/

SELECT

ROUND((preco), 1)

FROM filmes;









/\*POW()\*/



/\*1\*/

SELECT

\*, 

POW(preco, 2) AS "preco\_quadrado"

FROM filmes;



/\*2\*/

SELECT 

POW(id, 2)

FROM clientes;







/\*MOD()\*/



/\*1\*/

SELECT 

\*

FROM clientes

WHERE MOD(id, 2) = 0;



/\*2\*/

SELECT 

\*

FROM filmes

WHERE MOD(id, 3) = 0;







/\*NOW() / CURDATE()\*/



/\*1\*/

SELECT NOW();



/\*2\*/

SELECT 

\*

from locacoes

WHERE data\_locacao < CURDATE();







/\*DAY() / MONTH() / YEAR()\*/



/\*1\*/

SELECT

\*,

DAY(data\_locacao) AS "dia\_locacao"

FROM locacoes;



/\*2\*/

SELECT

\*

FROM locacoes

WHERE MONTH(data\_locacao) = 1;





