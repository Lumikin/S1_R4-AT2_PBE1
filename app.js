const express = require("express")
const app = express();
const PORT = 8081
const fs = require("fs")

app.get('/eventos/', (req, res) => {
    try {
        const data = fs.readFileSync('./eventos.json', 'utf-8')
        let eventos = JSON.parse(data)


        const { dataEvento } = req.query;
        if (dataEvento) {
            eventos = eventos.filter(
                evento => evento.data == dataEvento

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