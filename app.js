const express = require("express")
const app = express();
const PORT = 8081
const fs = require("fs")

app.get('/usuarios/', (req, res) => {
    try {
        const data = fs.readFileSync('./users.json', 'utf-8')
        let usuarios = JSON.parse(data)

        
        const {nomeUsuario} = req.query;
        if (nomeUsuario){
            usuarios = usuarios.filter(
                usuario => usuario.nome.toLowerCase() 
                .includes(nomeUsuario.toLowerCase())
            )
        }
        
        res.status(200).json(usuarios)
    } catch (error) {
        console.error("Algum erro no servidor! Erro: ", error)
    }
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em https://localhost:${PORT}`)
});