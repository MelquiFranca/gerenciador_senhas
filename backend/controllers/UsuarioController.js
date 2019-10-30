const crypto = require('crypto');
const { Usuario, Sequelize } = require('../database/models/index');
const Op = Sequelize.Op;

module.exports = {
    async validaSenha(req, res) {
        const { usuario, senha } = req.body;

        const user = await Usuario.findOne({
            where: {usuario}
        });

        if(!user) {
            return res.status(400).json({error: "Usuário não existe."});
        }

        const senhaCriptografada = crypto.createHmac('sha256', senha).digest('hex');
        if(user.senha === senhaCriptografada){
            return res.json({id: user.id, usuario: user.usuario});
        }
        else
            return res.json(false);
    }
}