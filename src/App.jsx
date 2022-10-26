import React from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { ConteinerSaldo } from './components/Saldo/ConteinerSaldo'
import { Form } from './components/Form/Form'

export function App() {

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
