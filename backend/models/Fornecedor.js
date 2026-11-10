    const conn = require('../db/conn')
    const { DataTypes } = require('sequelize')

    const Fornecedor = conn.define('fornecedor', {
        codFornecedor: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cpfEcnpj: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    }, {
        timestamps: false,
        tableName: 'fornecedores'
    })

    module.exports = Fornecedor