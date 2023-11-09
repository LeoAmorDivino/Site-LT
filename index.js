let express = require('express') // Servidor WEB - Comunicação entre o FRONT e O BACK END
let app = express()

let mysql = require('mysql2') // Se comunicar com o MySQL
let conection = mysql.connect({ // Abrindo uma conexão com o MySQL
    user: 'root',
    password: 'root',
    host: 'localhost',
    database: 'hospital'
})
