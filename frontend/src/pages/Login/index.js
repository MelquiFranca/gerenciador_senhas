import React, { useState, useEffect } from 'react';

import Logo from '../../components/Logo';
import Mensagem from '../../components/Mensagem';
import './styles.css';

import api from '../../services/api';

export default function Login(props) {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [exibeMensagem, setExibeMensagem] = useState(false);
    const [mensagem, setMensagem] = useState('');
    
    useEffect(() => {
        localStorage.removeItem('idUsuario');
        localStorage.removeItem('usuario');
    }, []);

    async function handleClick() {    
        
        if(usuario.length < 1 || senha.length < 1) {
            setMensagem("Senha ou usuário inválidos! Tente novamente.");
            setExibeMensagem(true);
            return null;
        }
        
        const retorno = await api.post('/validaUsuario', {
            usuario,
            senha
        });

        if(retorno.status === 200 && retorno.data.id) {
            localStorage.setItem('idUsuario', retorno.data.id);
            localStorage.setItem('usuario', retorno.data.usuario);
            props.history.push('/registros');
        } else {
            setMensagem("Senha ou usuário inválidos! Tente novamente.");
            setExibeMensagem(true);
        }
    }
    return (
        <div className="container">
            <Mensagem 
                texto={mensagem}
                visivel={exibeMensagem}
            />
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