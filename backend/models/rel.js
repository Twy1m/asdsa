const Funcionario = require('./Funcionario')
const Fornecedor = require('./Fornecedor')
const Produto = require('./Produto')
const Movimento = require('./Movimento')

Fornecedor.hasMany(Produto, {
    foreignKey: 'idFornecedor',
    as: 'ProdutoFornecedor',
    onDelete: 'CASCADE' 
})

Produto.belongsTo(Fornecedor, {
    foreignKey: 'idFornecedor',
    as: 'FornecedorProduto',
    allowNull: false
})

Produto.hasMany(Movimento, {
    foreignKey: 'idProduto',
    as: 'MovimentoProduto',
    onDelete: 'CASCADE' 
})

Movimento.belongsTo(Produto, {
    foreignKey: 'idProduto',
    as: 'ProdutoMovimento',
    allowNull: false
})

module.exports = { Funcionario, Fornecedor, Produto, Movimento }