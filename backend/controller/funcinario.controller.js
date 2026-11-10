const Funcionario = require('../models/Funcionario')
const CryptoJs = require('crypto-js')

const cadastrar = async (req,res)=>{
    let {nome, email, senha} = req.body

    if(!nome || !email || !senha){
        return res.status(400).json({message: 'preencha todos os campos'})
    }

    try{
        senha = CryptoJs.AES.encrypt(senha, "senha").toString()

        await Funcionario.create({
            nome: nome,
            email: email,
            senha: senha
        })

        res.status(201).json({ message: "usuario cadastrado com sucesso" });
    }catch(err){
        console.error("erro", err);
        res.status(500).json({ message: "erro ao cadastrar" });
    }
}
 

module.exports = {cadastrar}