const Acessos = require('../database/models/acesso');
const sequelize = require('sequelize');

module.exports = {
    async listar(req, res) {
        const teste = Acessos(sequelize, sequelize.DataTypes);        
        // const acessos = await Acessos.findAll();
        
        console.log(teste);
    }
}