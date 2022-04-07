//importando express
let express = require('express');
let routerUsuarios = require("../app/routes/usuarios.js")
let routerPosts =  require("../app/routes/posts.js")
let bodyParser = require('body-parser')
module.exports = function(){
    let app = express()
    //variável de aplicação
    app.set("port",3000)
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:false}))
    app.use(express.static("./public"))
    routerPosts(app)
    routerUsuarios(app)
    return app
}