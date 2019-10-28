import React from 'react';

import './style.css';
import BotaoSair from '../../components/BotaoSair';
import Logo from '../../components/Logo';

export default function CadastraRegistro(props) {
    return (
        <div className="container">
            <div className="corpoForm">
                <Logo />
                <input 
                    type="text" 
                    className="textBox"
                    placeholder="Nome ou Endereço do site ou sistema"
                />
                <input 
                    type="text" 
                    className="textBox"
                    placeholder="Usuário de acesso"
                />
                <input 
                    type="password" 
                    className="textBox"
                    placeholder="Password de acesso"
                />
                
                <select className="textBox">
                    <option value="">Tipo de Privacidade</option>
                    <option value="">Normal</option>
                    <option value="">Alta</option>
                </select>

                <button className="editar">Registrar Dados de Acesso</button>
                <button className="voltar" onClick={e => props.history.push('/registros')}>Voltar</button>
            </div>

            <BotaoSair {...props}/>
        </div>
    );
}