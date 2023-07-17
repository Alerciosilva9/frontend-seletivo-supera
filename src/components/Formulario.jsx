import React, { useState } from 'react';

function Formulario({ onSubmit }) {
    const [operador, setOperador] = useState('');
    const [inicio, setInicio] = useState('');
    const [fim, setFim] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if(inicio!=='' && fim===''){
            alert("Informe a data de Fim para completar a busca por periodo")
        } else if(inicio==='' && fim!==''){
            alert("Informe a data de Inicio para completar a busca por periodo")
        } 

        onSubmit({ inicio, fim, operador });
        
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={operador} onChange={e => setOperador(e.target.value)} placeholder="Nome do Operador" />
            <input type="date" value={inicio} onChange={e => setInicio(e.target.value)} />
            <label htmlFor="fim">Data Fim</label>
            <input type="date" value={fim} id="fim" onChange={e => setFim(e.target.value)} />

            <button type="submit">Pesquisar</button>
        </form>
    );
}


export default Formulario;