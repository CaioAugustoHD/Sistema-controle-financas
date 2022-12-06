import React, { useState } from "react";
import "./Form.css";

export function Form({registrarTransacao}){

    const [descricao, setDescricao] = useState("");
    const [valor, setValor] = useState("");
    const [isSaida, setSaida] = useState(false);

    const gerarID = () => Math.round(Math.random()*100000);

    function addTransacao(){

        // VALIDAÇÃO DOS INPUT'S
        if(!descricao || !valor){
            alert("Preencha todos os campos!");
            return;
        } else if (valor < 1) {
            alert("Digite um valor maior que zero!");
            return;
        }
        
        let novaTransacao = {
            descricao: descricao,
            valor: Number(Number(valor).toFixed(2)),
            saida: isSaida,
            ID: gerarID()
        }

        registrarTransacao(novaTransacao);

        setDescricao("");
        setValor("");
    }

    return (
        <form>
            <div className="conteinerInput">
                <div>
                    <label htmlFor="inputDescricao" >Descrição </label>
                    <input 
                        type="text" 
                        id="inputDescricao"
                        maxLength={20}
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        />
                </div>
                <div>
                    <label htmlFor="inputValor" >Valor </label>
                    <input 
                        type="number" 
                        id="inputValor"
                        value={valor}
                        onChange={(e) => setValor(e.target.value)}
                        />
                </div>
            </div>
            <div>
                <input 
                    type="radio" 
                    name="opcao" 
                    id="radioEntrada"
                    onChange={() => setSaida(!isSaida)}
                    defaultChecked
                    />
                <label htmlFor="radioEntrada" >Entrada</label>
                <br/>
                <input 
                    type="radio" 
                    name="opcao" 
                    id="radioSaida"
                    onChange={() => setSaida(!isSaida)}
                    />
                <label htmlFor="radioSaida" >Saída</label>
            </div>
            <div>
                <button className="btn-salvar" onClick={addTransacao} type="button">Salvar</button>
            </div>
        </form>
    )
}