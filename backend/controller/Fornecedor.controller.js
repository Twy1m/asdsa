const Fornecedor = require('../models/Fornecedor')
const CryptoJs = require('crypto-js')

const cadastrar = async (req,res)=>{
    let {nome, cpfEcnpj} = req.body

    if(!nome || !cpfEcnpj){
        return res.status(400).json({message: 'preencha todos os campos'})
    }

    try{
        cpfEcnpj = CryptoJs.AES.encrypt(cpfEcnpj, "senha").toString()

        await Fornecedor.create({
            nome: nome,
            cpfEcnpj: cpfEcnpj
        })

        res.status(201).json({ message: "forncedor cadastrado com sucesso" });
    }catch(err){
        console.error("erro", err);
        res.status(500).json({ message: "erro ao cadastrar" });
    }
}
 

module.exports = {cadastrar}