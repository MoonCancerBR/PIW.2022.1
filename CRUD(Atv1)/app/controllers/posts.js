let posts = 
    [
    //     {
    //     _id: 1,
    //     nome:"Renata",
    //     sobrenome:"Glask"
    // }
]

module.exports.listarPosts = function(req, res)    
    {
        res.json(posts)
    }

module.exports.obterPost = function(req,res)
    {
        var id = req.params.id;
        var post = posts.find(post => (post.id == id))
        if(post){
            res.json(post)
    }
        else
            {
                res.json({mensagem:"Post não encontrado"})
            }
    }
    
module.exports.inserirPost = function(req,res)
    {
    let post = req.body;
    var existe = posts.find(a => (a.id == post.id))
    if(!existe){
        posts.push(post);
        res.status(201).json(post);
    }
    else
    res.json({mensagem:"ID já existente!"})
    }

module.exports.deletarPost = function(req,res){
    let id = req.params.id
    var existe = posts.find(a => (a.id == id))
    if(existe){
    posts = posts.filter(function(post){return post.id!=id})
    res.json({mensagem:"Post removido!"})
    }
    else
    res.json({mensagem:"ID inexistente!"})
}

module.exports.editarPost = function(req,res){
    let id = req.params.id;
    var index = posts.findIndex(post => (post.id == id))
    if (index>=0) {
        //
        posts[index]={...posts[index],...req.body}
        res.json(posts[index])
    } 
    else
    res.json({mensagem:"ID não registrado!"})
}