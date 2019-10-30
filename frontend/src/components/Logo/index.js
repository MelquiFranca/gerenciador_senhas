import React, { useEffect } from 'react';

export default function Logo(props) {
    useEffect(() => {
        if(!localStorage.getItem('usuario')) {
            props.history.push('/');
        }
    }, []);

    return (
        <div className="logo">GerPasS</div>
    );
}