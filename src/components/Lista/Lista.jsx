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
            <thead>
                <tr>
                    <th className="desc">Descrição</th>
                    <th>Valor</th>
                    <th>Tipo</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {listaTransacoes.map(transacao => {
                    return (
                        <tr>
                            <td className="desc">{transacao.descricao}</td>
                            <td>{transacao.valor}</td>
                            <td>{transacao.saida ? <FaCaretSquareDown/> : <FaCaretSquareUp/>}</td>
                            <td><button type="button" onClick={() => removerTransacao(transacao.ID)}><FaTrash/></button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}