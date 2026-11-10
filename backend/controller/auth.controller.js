const Funcionario = require('../models/Funcionario')
const CryptoJs = require('crypto-js')

const login = async (req, res)=>{
    const {email, senha } = req.body

    try{
        let funcionario = await Funcionario.findOne({where: {email:email}})
        if(!funcionario){
            res.status(404).json({message: 'usuario não encontrado'})
        }

        let senhaDescri = CryptoJs.AES.decrypt(funcionario.senha, "senha").toString(CryptoJs.enc.Utf8)
        if(!email || senhaDescri !==  senha){
            res.status(401).json({message: 'senha invalida'})
        }

        const duracao = 240 * 60 *1000
        const tempoExpiracao = Date.now() + duracao

        const token = CryptoJs.AES.encrypt(JSON.stringify({
            nomeFuncionario: funcionario.nome,
            expiraEm: tempoExpiracao
        }), "senha").toString()

        res.status(200).json({ token: token, nome: funcionario.nome})
    }catch(err){
        console.error("erro", err);
        res.status(500).json({ message: "erro ao realizar login" });
    }
}

module.exports = {login}