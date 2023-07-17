import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Formulario from "../components/Formulario";

function Transferencias() {


  const conta_id = useLocation().state.some
  const[transferencias,setTransferencias] = useState([])

  const getTransferencias = async(params) => {
    
    try {
      const url = new URL('http://localhost:8080/transferencias/'+conta_id);
      
      Object.keys(params).forEach(key => params[key]!=''?url.searchParams.append(key, params[key]):console.log(" "));
     
      
      console.log(url)
      fetch(url)
        .then(response => response.json())
        .then(data => {
          setTransferencias(data);
        });
    } catch (error) {
        console.log(error)
    }
  }
  useEffect(()=> {
        getTransferencias()
  },[])
    

    return (
        <div className="App">
        
        <>
        <h3>FIltros de Busca</h3>
        <Formulario onSubmit={getTransferencias} />
          <h1>Transferências</h1>
          <table  class="table">
          <thead class="thead-dark">
            <tr>
              <th>Data</th>
              <th>Valor</th>
              <th>Tipo</th>
              <th>Nome do Operador Transacionado</th>
            </tr>
            </thead>
            <tbody>
            {transferencias.map(transferencias => (
              <tr key={transferencias.id}>
                <td>{transferencias.dataTransferencia}</td>
                <td>{transferencias.valor}</td>
                <td>{transferencias.tipo}</td>
                <td>{transferencias.operador}</td>
                
              </tr>
            ))}</tbody>
          </table>
        </>
      
    </div>
    );
  }
  
  export default Transferencias;
  