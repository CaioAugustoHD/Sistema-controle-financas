import React, { useState } from "react";

export function Form(){

    const [descricao, setDescricao] = useState("");
    const [valor, setValor] = useState("");
    const [isExpense, setExpense] = useState(false);
    return (
        <form>
            <div>
                <label htmlFor="inputDescricao" >Descrição:</label>
                <input 
                    type="text" 
                    id="inputDescricao"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    />
            </div>
            <div>
                <label htmlFor="inputValor" >Valor:</label>
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

                <input 
                    type="radio" 
                    name="opcao" 
                    id="radioSaida"
                    onChange={() => setExpense(!isExpense)}
                    />
                <label htmlFor="radioSaida" >Saída</label>
            </div>
            <div>
                <button type="button">Salvar</button>
            </div>
        </form>
    )
}