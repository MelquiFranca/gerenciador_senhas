import React from 'react';

import './style.css';
import '../../animations/animacao.css';

export default function Dados(props) {
    return (
        <div className="corpoExibeDados">
            <h2>www.google.com.br</h2>
            <h3>Usuário: melquipereirafranca</h3>
            <h3>Senha: 123456</h3>
            <button className="editar">Editar</button>
            <button onClick={e => props.setExibe(!props.exibe)} className="voltar">Voltar</button>
        </div>
    );
}