const { Funcionario, Fornecedor, Produto, Movimento } = require('./models/rel')
const conn = require('./db/conn')

async function syncDataBase() {
    try{
        await conn.sync({force: true})
        console.log('sincronizando...')
    }catch(err){
        console.error('erro ao sincronizar', err)
    }finally{
        await conn.close()
        console.log('finalizando sincronização')
    }
}

syncDataBase()