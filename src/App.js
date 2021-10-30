import api from './api'
import {useState , useEffect} from 'react';
import Card from './Components/Card';
import './App.css'

function App() {

  const [data, setData] = useState();
  const [cpf, setCpf] = useState();
  const [button, setButton] = useState(false);
  useEffect(()=>{
    api
    .get(`https://viacep.com.br/ws/${cpf}/json/`)
    .then((response) =>{
      setData(response.data)
      console.log(response.data)
    })
    .catch((error) => {
      console.error(error)
    })
  },[button]);

  return (
    <div className="container">
      <h1>Consultar CEP</h1>
      <div>
      <input type="text" placeholder="ex: 46400-000" onChange={(e)=>{setCpf(e.target.value)}} />
      <button onClick={()=>{button ? setButton(false) : setButton(true)}}>Enviar</button>
      </div>
      {data ? (   
          <Card data={data} info={'asdas'}/>
      //   <div className="content">
      //   <h1 className="title">CEP {data.cep}</h1>
      //   <p className="subtitle">{data.localidade} - {data.uf}</p>
      //   <div className="extras">
      //   <div className="extras-1">
      //     <p><span>Logradouro</span>: {data.logradouro}</p>
      //     <p><span>CEP</span>: {data.cep}</p>
      //     <p><span>Bairro</span>: {data.bairro}</p>
      //   </div>
      //   <div className="extras-2">
      //     <p><span>Cidade</span>: {data.localidade}</p>
      //     <p><span>UF</span>: {data.uf}</p>
      //     <p><span>Codigo DDD</span>: {data.ddd}</p>
      //   </div>
      //   </div>
      // </div>
      ): null}
    </div>   
  );
}

export default App;
