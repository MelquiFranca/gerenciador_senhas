import React from 'react';

import Logo from '../../components/Logo';
import './styles.css';

export default function Login({ history }) {

    function handleClick() {
        history.push('/registros');
    }
    return (
        <div className="container">
            <div className="corpoForm">
                <Logo />
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