const express = require("express")
const app = express()

app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html")
})

app.get("/sobre", function(req, res){
    res.sendFile(__dirname + "/html/sobre.html")
})

app.get("/blog", function(req, res){
    res.send("Bem vindo ao meu Blog")
})

app.get("/ola/:cargo/:nome/:cor", function(req, res){
    res.send("<h5>ola "+req.params.nome+"</h5>" + "<h5>Seu cargo e "+req.params.cargo+"</h5>" + "<h5>Sua cor favorita e "+req.params.cor +"</h5>")
})

app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081")
})