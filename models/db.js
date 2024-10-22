const Sequelize = require('sequelize')
    //Conexao com o banco de dados ,Mysql
    const sequelize = new Sequelize('postapp', 'root', 'P@ssw0rd', {
        host: "localhost",
        dialect: 'mysql',
        query:{raw:true}
    })

    var db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;