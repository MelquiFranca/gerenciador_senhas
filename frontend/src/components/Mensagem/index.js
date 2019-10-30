import React, { useState, useEffect } from 'react';

import './style.css';
export default function Mensagem(props) {
    const [cor, setCor]= useState('rgb(20, 212, 116)');

    useEffect(() => {
        if(props.sucesso) {
            setCor('rgb(20, 212, 116)');
        } else {
            setCor('rgb(245, 95, 82)');
        }
    },[props.sucesso]);
    return (
        <>
            {props.visivel && <div className="mensagem" style={{background: cor}}>
                <h4>
                {props.texto}
                </h4>
            </div>}
        </>
    );
}

// style={{background: 'rgb(20, 212, 116)'}}