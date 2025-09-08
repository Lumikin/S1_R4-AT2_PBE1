const express = require("express")
const app = express();
const PORT = 8081
const fs = require("fs")

app.get('/livros/', (req, res) => {
    try {
        const data = fs.readFileSync('./livros.json', 'utf-8')
        let livros = JSON.parse(data)


        const { titulo } = req.query;
        if (titulo) {
            livros = livros.filter(
                nomeTitulo => nomeTitulo.titulo.toLowerCase().includes(titulo.toLowerCase())

            )
        }

        // Para achar o autor

        const { autor } = req.query;
        if (autor){
            livros = livros.filter(
                nomeAutor => nomeAutor.autor.toLowerCase().includes(autor.toLowerCase())
            )
        }

        const { ano } = req.query;
        if (ano) {
            livros = livros.filter(
                anoLivro => anoLivro.ano >= ano
            )
        }

            res.status(200).json(livros)
    } catch (error) {
        console.error("Algum erro no servidor! Erro: ", error)
    }
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em https://localhost:${PORT}`)
});