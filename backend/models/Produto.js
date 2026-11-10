const conn = require('../db/conn')
const { DataTypes } = require('sequelize')

const Produto = conn.define('produto', {
    codProduto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    qtdEstoque: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    idFornecedor: {
        type: DataTypes.INTEGER,
        references: {
            module: 'fornecedores',
            key: 'codFornecedor'
        }
    }
}, {
    timestamps: false,
    tableName: 'produtos'
})

module.exports = Produto