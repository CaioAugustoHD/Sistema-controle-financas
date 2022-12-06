import React, { useState, useEffect } from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { ConteinerSaldo } from './components/Saldo/ConteinerSaldo'
import { Form } from './components/Form/Form'
import { Lista } from './components/Lista/Lista'

export function App() {

  const dados = localStorage.getItem("listaTransacoes");
  const [listaTransacoes, setListaTransacoes] = useState (dados ? JSON.parse(dados) : []);

  const [entrada, setEntrada] = useState(0);
  const [saida, setSaida] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    
    const arrayEntradas = listaTransacoes.filter(transacao => !transacao.saida).map(transacao => transacao.valor)
    const arraySaidas = listaTransacoes.filter(transacao => transacao.saida).map(transacao => transacao.valor)

    const somaEntradas = arrayEntradas.reduce((acc, num) => acc + num, 0);
    const somaSaidas = arraySaidas.reduce((acc, num) => acc + num, 0);
    const calculoTotal = somaEntradas - somaSaidas;

    setEntrada(`${somaEntradas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
    setSaida(`${somaSaidas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
    setTotal(`${calculoTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);

    
  }, [listaTransacoes]);
  
  function registrarTransacao(novaTransacao){
    
    const novaListaTransacoes = [...listaTransacoes, novaTransacao]
    setListaTransacoes(novaListaTransacoes)

    localStorage.setItem("listaTransacoes", JSON.stringify(novaListaTransacoes));

  }

  return (
    <>
      <Header/>
      <ConteinerSaldo entrada={entrada} saida={saida} total={total}/>
      <Form registrarTransacao={registrarTransacao}/>
      <Lista listaTransacoes={listaTransacoes} setListaTransacoes={setListaTransacoes}/>
    </>
  )
}
