import React, { useState, useEffect } from 'react';

import BotaoSair from '../../components/BotaoSair';
import Logo from '../../components/Logo';
import Mensagem from '../../components/Mensagem';

import api from '../../services/api';

import './style.css';

export default function CadastraRegistro(props) {
    const [localAcesso, setLocalAcesso] = useState('');
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [privacidade, setPrivacidade] = useState('');
    const [exibeMensagem, setExibeMensagem] = useState(false);
    const [mensagemSucesso, setMensagemSucesso] = useState(false);
    const [mensagem, setMensagem] = useState('');

    function limparCampos() {
        
        setLocalAcesso('');
        setUsuario('');
        setPassword('');
        setPrivacidade('');

    }

    useEffect(() => {
        async function carregaDados() {
            if(props.match.params.id) {
                const retorno = await api.get(`/acessos/${props.match.params.id}`);
                setLocalAcesso(retorno.data.localAcesso);
                setUsuario(retorno.data.usuario);
                setPassword(retorno.data.password);
                setPrivacidade(retorno.data.privacidade);
            }
        }

        carregaDados();

    }, []);

    async function handleClick() {
        if(localAcesso.length < 3 || usuario.length < 3 || password.length < 1 || privacidade === '') {
            setMensagem('Dados Incompletos! Favor concluir preenchimento.');
            setExibeMensagem(true);
            return null;
        }

        let retorno;
        if(props.match.params.id) {
            retorno = await api.put('/acessos', {
                id: props.match.params.id,
                localAcesso,
                usuario,
                password,
                privacidade
            });                    
        } else {            
            retorno = await api.post('/acessos', {
                localAcesso,
                usuario,
                password,
                privacidade
            }); 
        }    
        
        if(retorno.status === 200)  {
            limparCampos();
            setMensagem('Registro salvo com sucesso!');
            setExibeMensagem(true);
            setMensagemSucesso(true);

            setTimeout(() => {
                setMensagem('');
                setExibeMensagem(false);
                setMensagemSucesso(false);
            }, 5000);

        } else {
            setMensagem('Não foi possível salvar no Banco! Tente novamente');
            setExibeMensagem(true);
        }
    }
    return (
        <div className="container">
            <Mensagem 
                texto={mensagem}
                visivel={exibeMensagem}
                sucesso={mensagemSucesso}
            />
            <div className="corpoForm">
                <Logo {...props}/>
                <input 
                    type="text" 
                    className="textBox"
                    placeholder="Nome ou Endereço do site ou sistema"
                    value={localAcesso}
                    onChange={e => setLocalAcesso(e.target.value)}
                />
                <input 
                    type="text" 
                    className="textBox"
                    placeholder="Usuário de acesso"
                    value={usuario}
                    onChange={e => setUsuario(e.target.value)}
                />
                <input 
                    type="text" 
                    className="textBox"
                    placeholder="Password de acesso"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                
                <select 
                    className="textBox"
                    value={privacidade}
                    onChange={e => setPrivacidade(e.target.value)}
                >
                    <option value="">Tipo de Privacidade</option>
                    <option value="Normal">Normal</option>
                    <option value="Alta">Alta</option>
                </select>

                <button 
                    className="editar"
                    onClick={e => handleClick()}
                >Salvar Dados de Acesso</button>
                <button className="voltar" onClick={e => props.history.push('/registros')}>Voltar</button>
            </div>

            <BotaoSair {...props}/>
        </div>
    );
}