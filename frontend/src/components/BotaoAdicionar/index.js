import React from 'react';

import './style.css'
export default function BotaoAdicionar({ history }) {

    function handleClick() {
        history.push('/novo');
    }
    return (
        <div className="botaoAdicionar" onClick={e => handleClick()}>
            <div className="cruz cruzVertical"></div>
            <div className="cruz cruzHorizontal"></div>
        </div>
    );
}