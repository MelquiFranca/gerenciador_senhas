import React, { useState } from 'react';

import Dados from '../../components/Dados';
import BotaoAdicionar from '../../components/BotaoAdicionar';
import BotaoSair from '../../components/BotaoSair';
import Logo from '../../components/Logo';

import './style.css';

export default function Registros(props) {
    const [exibe, setExibe] = useState(false);
    return (
        <div className="container">
            {!exibe && <div className="corpoForm">
                <Logo />

                <ul className="listaRegistros">
                    <li className="topo">
                        <input type="text" className="textBox" placeholder="Pesquisar..."/>
                        Locais de acesso
                    </li>

                    <li className="registros" onClick={e => setExibe(!exibe)}>
                        www.hotmail.com.br
                    </li>
                    <li className="registros" onClick={e => setExibe(!exibe)}>
                        www.GOOGLE.com.br
                    </li>
                    <li className="registros" onClick={e => setExibe(!exibe)}>
                        www.hotmail.com.br
                    </li>
                    <li className="registros" onClick={e => setExibe(!exibe)}>
                        www.hotmail.com.br
                    </li>
                    <li className="registros" onClick={e => setExibe(!exibe)}>
                        www.hotmail.com.br
                    </li>
                    <li className="registros" onClick={e => setExibe(!exibe)}>
                        www.hotmail.com.br
                    </li>
                    <li className="registros" onClick={e => setExibe(!exibe)}>
                        www.hotmail.com.br
                    </li>
                    <li className="registros" onClick={e => setExibe(!exibe)}>
                        www.hotmail.com.br
                    </li>
                    <li className="registros" onClick={e => setExibe(!exibe)}>
                        www.hotmail.com.br
                    </li>
                    <li className="registros" onClick={e => setExibe(!exibe)}>
                        www.hotmail.com.br
                    </li>
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