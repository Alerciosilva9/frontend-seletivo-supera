import React, { useState } from 'react';

function Formulario({ onSubmit }) {
    const [operador, setOperador] = useState('');
    const [inicio, setInicio] = useState('');
    const [fim, setFim] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("INICIO "+inicio)
        console.log("FIM"+fim)
        console.log()
        onSubmit({ inicio, fim, operador });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={operador} onChange={e => setOperador(e.target.value)} placeholder="Nome do Operador" />
            <input type="date" value={inicio} onChange={e => setInicio(e.target.value)} />
            <input type="date" value={fim} onChange={e => setFim(e.target.value)} />

            <button type="submit">Pesquisar</button>
        </form>
    );
}


export default Formulario;