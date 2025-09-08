const express = require("express")
const app = express();
const PORT = 8081
const fs = require("fs")

app.get('/eventos/', (req, res) => {
    try {
        const data = fs.readFileSync('./livros.json', 'utf-8')
        let livros = JSON.parse(data)


        const { titulo } = req.query;
        if (titulo) {
            livros = livros.filter(
                titulo => livros.titulo == dataEvento

            )
        }

        res.status(200).json(eventos)
    } catch (error) {
        console.error("Algum erro no servidor! Erro: ", error)
    }
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em https://localhost:${PORT}`)
});