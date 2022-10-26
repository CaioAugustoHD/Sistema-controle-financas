import React, { useState } from "react";
import "./Form.css";

export function Form(){

    const [descricao, setDescricao] = useState("");
    const [valor, setValor] = useState("");
    const [isExpense, setExpense] = useState(false);

    function addTransacao(){

        if(!descricao || !valor){
            alert("Preencha todos os campos!");
            return;
        } else if (valor < 1) {
            alert("Digite um valor maior que zero!");
            return;
        }
        
    }

    return (
        <form>
            <div>
                <label htmlFor="inputDescricao" >Descrição </label>
                <input 
                    type="text" 
                    id="inputDescricao"
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
            <div>
                <input 
                    type="radio" 
                    name="opcao" 
                    id="radioEntrada"
                    onChange={() => setExpense(!isExpense)}
                    defaultChecked
                    />
                <label htmlFor="radioEntrada" >Entrada</label>
                <br/>
                <input 
                    type="radio" 
                    name="opcao" 
                    id="radioSaida"
                    onChange={() => setExpense(!isExpense)}
                    />
                <label htmlFor="radioSaida" >Saída</label>
            </div>
            <div>
                <button onClick={addTransacao} type="button">Salvar</button>
            </div>
        </form>
    )
}