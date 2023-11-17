let express = require('express') // Servidor WEB - Comunicação entre o FRONT e O BACK END
let app = express()

let mysql = require('mysql2') // Se comunicar com o MySQL
let conection = mysql.connect({ // Abrindo uma conexão com o MySQL
    user: 'root',
    password: 'ifba',
    host: 'localhost',
    database: 'hospital'
})

// View engine Handlebars
let expressHandlebars = require('express-handlebars')

app.engine('handlebars', expressHandlebars.engine({
    defaultlayout: 'main'
}))

app.set('view engine', 'handlebars');

app.use('/',
    express.static(__dirname + '/public')
)

app.get('/', (req, res) => { // A rota raíz retorna a tela de menu
    conection.query( // Listando dados
    'select * from especialidades', (err, result) => {
        res.render("especialidades", {especialidades: result})
    })
})

app.listen(80, () => {
    console.log("Servidor iniciado...")
})


