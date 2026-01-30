const pedidos = [
    {
        "data": "2025-09-08",
        "status": "pendente",
        "id": "2",
        "cliente_cpf": "123456789-99",
        "produto_cod": "1",
        "quantidade": 2
    },
    {
        "data": "2025-09-08",
        "status": "pendente",
        "id": "1",
        "cliente_cpf": "109876543-21",
        "produto_cod": "1",
        "quantidade": 2
    }
];

module.exports = pedidos;
// Pedidos:
// + Quem comprou - Chave estrangeira
// + Produto Comprado - Chave estrangeira
// + Quantidade - Chave estrangeira
// + Data
// + status
// + id

// * Atualizar status (manualmente)
// * Listar todos pedidos
// * Consultar pedido pelo seu código(id)
