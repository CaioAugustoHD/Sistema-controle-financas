import React from "react";
import { FaCaretSquareUp, FaCaretSquareDown, FaTrash } from "react-icons/fa";
import "./Lista.css";

export function Lista({listaTransacoes}){
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
                {listaTransacoes.map(item => {
                    return (
                        <tr>
                            <td className="desc">{item.descricao}</td>
                            <td>{item.valor}</td>
                            <td>{item.saida ? <FaCaretSquareDown/> : <FaCaretSquareUp/>}</td>
                            <td><button><FaTrash/></button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}