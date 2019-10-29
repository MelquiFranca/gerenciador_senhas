const { Acesso, Sequelize } = require('../database/models/index');
const Op = Sequelize.Op;

module.exports = {
    async listar(req, res) {  
        const dados = await Acesso.findAll();
        acessos = dados.map(acs => acs.dataValues);

        return res.json(acessos);
    },
    
    async inserir(req, res) {
        const { localAcesso, usuario, password, privacidade } = req.body;
        const dados = await Acesso.findOrCreate({
            where: {
                [Op.and]: [
                    {localAcesso: localAcesso}, {usuario: usuario}
                ]
            },
            defaults: {
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
        const {id, localAcesso, usuario, password, privacidade} = req.body;

        const dados = await Acesso.update({
            localAcesso,
            usuario,
            password,
            privacidade
        },{where: {id}});

        return res.json(dados);
    }
}