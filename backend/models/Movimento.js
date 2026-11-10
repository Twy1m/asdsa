const conn = require('../db/conn')
const { DataTypes } = require('sequelize')

const Movimento = conn.define('movimento', {
    codMovimento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipo: {
        type: DataTypes.ENUM("ENTRADA", "SAIDA"),
        allowNull: false,
    },
    qtdMovimento: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    data: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    idProduto: {
        type: DataTypes.INTEGER,
        references: {
            module: 'produtos',
            key: 'codProduto'
        }
    }
}, {
    timestamps: false,
    tableName: 'movimentos'
})

module.exports = Movimento