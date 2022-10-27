import React from "react";
import { FaCaretSquareUp, FaCaretSquareDown, FaTrash } from "react-icons/fa";

export function Lista({listaTransacoes}){
    return (
        <table>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Valor</th>
                    <th>Tipo</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {listaTransacoes.map(item => {
                    return (
                        <tr>
                            <td>{item.descricao}</td>
                            <td>{item.valor}</td>
                            <td>{item.saida ? <FaCaretSquareDown/> : <FaCaretSquareUp/>}</td>
                            <td></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}