let usuarios = 
    [
//  {
//    "id": "1",
//    "nome": "Victor",
//    "email": "victor.aefarias@gmail.com",
//    "senha": "123"
//  }
    ]

module.exports.listarUsuarios = function(req, res)    
    {
        res.json(usuarios)
    }

module.exports.obterUsuario = function(req,res)
    {
        var id = req.params.id;
        var usuario = usuarios.find(usuario => (usuario.id == id))
        if(usuario){
            res.json(usuario)
    }
        else
            {
                res.json({mensagem:"Usuario não encontrado!"})
            }
    }
    
module.exports.inserirUsuario = function(req,res)
    {
    let usuario = req.body;
    var existe = usuarios.find(a => (a.id == usuario.id))
    if(!existe){
        usuarios.push(usuario);
        res.status(201).json(usuario);
    }
    else
    res.json({mensagem:"ID já existente!"})
    }

module.exports.deletarUsuario = function(req,res){
    let id = req.params.id
    var existe = usuarios.find(a => (a.id == id))
    if(existe){
    usuarios = usuarios.filter(function(usuario){return usuario.id!=id})
    res.json({mensagem:"Usuario removido!"})
    }
    else
    res.json({mensagem:"ID inexistente!"})
}

module.exports.editarUsuario = function(req,res){
    let id = req.params.id;
    var index = usuarios.findIndex(usuario => (usuario.id == id))
    if (index>=0) {
        //
        usuarios[index]={...usuarios[index],...req.body}
        res.json(usuarios[index])
    } 
    else
    res.json({mensagem:"ID não registrado!"})
}
