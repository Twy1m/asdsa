const conn = require('../db/conn')
const { DataTypes } = require('sequelize')

const Funcionario = conn.define('funcionario', {
    codFuncionario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: false,
    tableName: 'funcionarios'
})

module.exports = Funcionario