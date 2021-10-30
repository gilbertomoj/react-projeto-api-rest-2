import {useState} from 'react';

function Card(props){
    
    return(
        <div className="content">
        <h1 className="title">CEP {props.data.cep}</h1>
        <p className="subtitle">{props.data.localidade} - {props.data.uf}</p>
        <div className="extras">
        <div className="extras-1">
          <p><span>Logradouro</span>: {props.data.logradouro}</p>
          <p><span>CEP</span>: {props.data.cep}</p>
          <p><span>Bairro</span>: {props.data.bairro}</p>
        </div>
        <div className="extras-2">
          <p><span>Cidade</span>: {props.data.localidade}</p>
          <p><span>UF</span>: {props.data.uf}</p>
          <p><span>Codigo DDD</span>: {props.data.ddd}</p>
        </div>
        </div>
      </div>
    )
}

export default Card;
