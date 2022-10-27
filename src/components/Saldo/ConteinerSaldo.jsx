import React from "react";
import { ItemSaldo } from "./ItemSaldo";
import "./ConteinerSaldo.css";
import { FaCaretSquareUp, FaCaretSquareDown, FaMoneyCheckAlt} from "react-icons/fa";

export function ConteinerSaldo({entrada, saida, total}){
    return (
        <main>
            <ItemSaldo titulo="Entrada " valor={entrada} Icone={FaCaretSquareUp}/>
            <ItemSaldo titulo="Saída " valor={saida} Icone={FaCaretSquareDown}/>
            <ItemSaldo titulo="Total" valor={total} Icone={FaMoneyCheckAlt}/>
        </main>
    )
}