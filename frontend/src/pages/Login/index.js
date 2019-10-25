import React from 'react';

import './styles.css';

export default function Login({ history }) {

    function handleClick() {
        history.push('/registros');
    }
    return (
        <div className="container">
            <div className="corpoForm">
                <div className="logo">GerPaSS</div>
                <input 
                    type="text" 
                    className="textBox"
                    placeholder="Usuário"
                />
                <input 
                    type="password" 
                    className="textBox"
                    placeholder="Senha"
                />
                <button 
                    className="botaoLogin"
                    onClick={e => handleClick()}
                >Entrar no Sistema</button>
            </div>
        </div>
    );
}