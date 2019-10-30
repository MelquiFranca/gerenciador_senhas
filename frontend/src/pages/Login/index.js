import React, { useState, useEffect } from 'react';

import Logo from '../../components/Logo';
import './styles.css';

import api from '../../services/api';

export default function Login(props) {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    
    useEffect(() => {
        localStorage.removeItem('idUsuario');
        localStorage.removeItem('usuario');
    }, []);

    async function handleClick() {        
        const retorno = await api.post('/validaUsuario', {
            usuario,
            senha
        });

        if(retorno.status === 200 && retorno.data.id) {
            localStorage.setItem('idUsuario', retorno.data.id);
            localStorage.setItem('usuario', retorno.data.usuario);
            props.history.push('/registros');
        }
    }
    return (
        <div className="container">
            <div className="corpoForm">
                <Logo {...props}/>
                <input 
                    type="text" 
                    className="textBox"
                    placeholder="Usuário"
                    value={usuario}
                    onChange={e => setUsuario(e.target.value)}
                />
                <input 
                    type="password" 
                    className="textBox"
                    placeholder="Senha"
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                />
                <button 
                    className="botaoLogin"
                    onClick={e => handleClick()}
                >Entrar no Sistema</button>
            </div>
        </div>
    );
}