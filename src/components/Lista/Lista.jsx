import React from "react";
import { FaCaretSquareUp, FaCaretSquareDown, FaTrash } from "react-icons/fa";
import "./Lista.css";

export function Lista({listaTransacoes, setListaTransacoes}){
    function removerTransacao(IDtransacao){
        const novaListaTransacoes = listaTransacoes.filter(transacao => transacao.ID !== IDtransacao);
        setListaTransacoes(novaListaTransacoes);

        localStorage.setItem("listaTransacoes", JSON.stringify(novaListaTransacoes));
    }

    return (
        <table>
            <tbody>
                {listaTransacoes.map(transacao => {
                    return (
                        <tr key={transacao.ID}>
                            <td className="desc">{transacao.descricao}</td>
                            <td className="desc">{`${transacao.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}</td>
                            <td>{transacao.saida ? <FaCaretSquareDown style={{color:"var(--down)"}}/> : <FaCaretSquareUp style={{color:"var(--up)"}}/>}</td>
                            <td><button type="button" onClick={() => removerTransacao(transacao.ID)}><FaTrash/></button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}