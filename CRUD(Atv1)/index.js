//Abrindo servidor
const http = require("http")
const app = require('./config/express.js')()
http.createServer(app).listen(app.get("port"), function(){
    console.log("Express na " + app.get("port"))
})