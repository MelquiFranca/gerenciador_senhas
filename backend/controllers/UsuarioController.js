const crypto = require('crypto');
const { Usuario, Sequelize } = require('../database/models/index');
const Op = Sequelize.Op;

module.exports = {
    async validaSenha(req, res) {
        const { usuario, senha } = req.body;

        const usuario = await Usuario.findOne({
            where: {usuario}
        });

        if(!usuario) {
            return res.status(400).json({error: "Usuário não existe."});
        }
        
        let validacao = false;
        const senhaCriptografada = crypto.createHmac('sha256', senha).digest('hex');

        if(usuario.senha === senhaCriptografada)
            validacao = true;
        
        return res.json({validacao});
    }
}