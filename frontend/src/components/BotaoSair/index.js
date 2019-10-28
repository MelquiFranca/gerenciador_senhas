import React from 'react';

import './style.css';
import '../../animations/animacao.css';

export default function BotaoSair({ history }) {

    function handleClick(e) {
        let botao = document.querySelector('.porta');
        botao.style.animation = 'abrirPorta 400ms forwards';
        setTimeout(() => {
            history.push('/');
        }, 400);
    }
    return (
        <div className="botaoSair" onClick={e => handleClick(e)}>
            <div className="porta">
                <h6>Sair</h6>
                <div className="macaneta">                    
                </div>
            </div>
            <div className="base"></div>
        </div>
    );
}