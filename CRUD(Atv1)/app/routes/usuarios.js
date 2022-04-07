//rotas de aplicação
let controller = require("../controllers/usuarios.js")
module.exports=function(app){
//GET
    app.get("/usuarios", controller.listarUsuarios)
    app.get("/usuarios/:id", controller.obterUsuario)
//POST
    app.post("/usuarios",controller.inserirUsuario)
//DELETE
    app.delete("/usuarios/:id", controller.deletarUsuario)
//PUT 
    app.put("/usuarios/:id", controller.editarUsuario)
}