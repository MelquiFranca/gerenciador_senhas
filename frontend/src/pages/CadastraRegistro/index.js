import React from 'react';

import './style.css';

export default function CadastraRegistro({ history }) {
    return (
        <div className="container">
            <div className="corpoForm">
                <div className="logo">GerPaSS</div>
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
                <button className="voltar" onClick={e => history.push('/registros')}>Voltar</button>
            </div>
        </div>
    );
}