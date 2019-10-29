const { Acesso } = require('../database/models/index');

module.exports = {
    async listar(req, res) {  
        const dados = await Acesso.findAll();
        acessos = dados.map(acs => acs.dataValues);
        
        return res.json(acessos);
    },
    
    async inserir(req, res) {
        const { localAcesso, usuario, password, privacidade } = req.body;
        
        const dados = await Acesso.findOrCreate({
            attributes: {localAcesso},
            default: {
                localAcesso,
                usuario,
                password,
                privacidade
            }
        });

        return res.json(dados.dataValues);
    },
    async selecionar(req, res) {
        const { id } = req.params;
        const dados = await Acesso.findOne({
            where: { id }
        });

        return res.json(dados.dataValues);
    },
    async excluir(req, res) {
        const { id } = req.body;

        const dados = await Acesso.destroy({
            where: {id}
        });

        return res.json(dados);
    },
    async atualizar(req, res) {

        const dados = await Acesso.updateOne({
            localAcesso,
            usuario,
            password,
            privacidade
        },{where: {id}});

        return res.json(dados);
    }
}