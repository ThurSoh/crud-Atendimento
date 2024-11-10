import app from './app.js'

const port = process.env.PORT;


app.listen(port || 3303, (error) => {
    if (error) {
        console.log('Ocorreu um erro ao Iniciar')
    }
    console.log(`Servidor Iniciado na porta ${port}`)
})