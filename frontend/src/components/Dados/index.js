import React, { useState, useEffect } from 'react';

import '../../animations/animacao.css';
import './style.css';

import api from '../../services/api';

export default function Dados(props) {
    const [acesso, setAcesso] = useState({});
    const [privado, setPrivado] = useState();
    const [senha, setSenha] = useState('');
    
    useEffect(() => {        
        async function carregaDados() {
            const retorno = await api.get(`acessos/${props.id}`);
            setAcesso(retorno.data);
            
            if(retorno.data.privacidade === 'Alta') {
                setPrivado(true);
            }
        }

        carregaDados();


    }, []);

    function handleClickValidar(e) {
        e.preventDefault();

        if(senha === '123456')
            setPrivado(false);
    };

    function handleClick(e) {
        e.preventDefault();
        props.history.push(`/editar/${acesso.id}`);
    }
    return (
        <>
        {(!privado) ? <div className="corpoExibeDados">
                
                <h2>{acesso.localAcesso}</h2>
                <h3>Usuário: {acesso.usuario}</h3>
                <h3>Senha: {acesso.password}</h3>
                <button className="editar" onClick={e => handleClick(e)}>Editar</button>
                <button 
                    onClick={e => props.setExibe(!props.exibe)} 
                    className="voltar"
                >Voltar</button>
            </div> : 
            <div className="corpoExibeDados">
                <h2>Privacidade Alta!</h2>
                <h3>Informe sua senha para visualizar:</h3>
                    <input 
                        type="password" 
                        className="textBox"
                        placeholder="Digite sua senha"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                    />
                    <button 
                        className="editar"
                        onClick={e => handleClickValidar(e)}
                    >Validar Senha</button>

                <button 
                    onClick={e => props.setExibe(!props.exibe)} 
                    className="voltar"
                >Voltar</button>
            </div>}
        </>
    );
}