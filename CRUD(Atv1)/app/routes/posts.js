//rotas de aplicação
let controller = require("../controllers/posts.js")
module.exports=function(app){
//GET
    app.get("/posts", controller.listarPosts)
    app.get("/posts/:id", controller.obterPost)
//POST
    app.post("/posts",controller.inserirPost)
//DELETE
    app.delete("/posts/:id", controller.deletarPost)
//PUT 
    app.put("/posts/:id", controller.editarPost)
}