import axios from "axios";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';


function Home() {

  const[contas,setContas] = useState([])

  const getContas = async() => {
    try {
        const response = await axios.get("http://localhost:8080/contas/")
        const data = response.data
        setContas(data)
        console.log(data)
    } catch (error) {
        console.log(error)
    }
  }
  useEffect(()=> {
        getContas()
  },[])

  return (
    <div className="App">
      
        <>
          <h1>Contas cadastradas</h1>
          <table  class="table">
          <thead class="thead-dark">
            <tr>
              <th>Id</th>
              <th>Valor</th>
              <th>#</th>
            </tr>
            </thead>
            <tbody>
            {contas.map(conta => (
              <tr key={conta.id_conta}>
                <td>{conta.id_conta}</td>
                <td>{conta.nome_responsavel}</td>
                <td><Link state={{ some: conta.id_conta }} to={`/transferencias`}> Ver Dados de Transferencias</Link></td>
              </tr>
            ))}</tbody>
          </table>
        </>
      
    </div>
  );
}

export default Home;
