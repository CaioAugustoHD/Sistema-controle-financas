import React, { useState } from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { ConteinerSaldo } from './components/Saldo/ConteinerSaldo'
import { Form } from './components/Form/Form'

export function App() {

  const dados = localStorage.getItem("listaTransacoes");
  const [listaTransacoes, setListaTransacoes] = useState (dados ? JSON.parse(dados) : []);

  const [entrada, setEntrada] = useState(0);
  const [saida, setSaida] = useState(0);
  const [total, setTotal] = useState(0);
  
  function registrarTransacao(novaTransacao){
    console.log(novaTransacao);
  }

  return (
    <>
      <Header/>
      <ConteinerSaldo/>
      <Form registrarTransacao={registrarTransacao}/>
    </>
  )
}
