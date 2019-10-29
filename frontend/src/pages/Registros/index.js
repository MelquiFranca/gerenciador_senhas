import React, { useState, useEffect } from 'react';

import Dados from '../../components/Dados';
import BotaoAdicionar from '../../components/BotaoAdicionar';
import BotaoSair from '../../components/BotaoSair';
import Logo from '../../components/Logo';

import api from '../../services/api';

import './style.css';

export default function Registros(props) {
    const [exibe, setExibe] = useState(false);
    const [registros, setRegistros] = useState([]);

    useEffect(() => {
        async function carregaDados() {
            const dados = await api.get('/acessos');
            setRegistros(dados.data);
        }

        carregaDados();
    }, []);
    return (
        <div className="container">
            {!exibe && <div className="corpoForm">
                <Logo />

                <ul className="listaRegistros">
                    <li className="topo">
                        <input type="text" className="textBox" placeholder="Pesquisar..."/>
                        Locais de acesso
                    </li>
                    {registros.map(reg => <li className="registros" onClick={e => setExibe(!exibe)}>{reg.localAcesso}</li>)}
                </ul>
            </div>}

            {exibe && <Dados 
                setExibe={setExibe}
                exibe={exibe}
            />}
            <BotaoSair {...props}/>
            <BotaoAdicionar {...props}/>

        </div>
    );
}