import React from "react";
import { ItemSaldo } from "./ItemSaldo";
import "./ConteinerSaldo.css";
import { FaCaretSquareUp, FaCaretSquareDown, FaMoneyCheckAlt} from "react-icons/fa";

export function ConteinerSaldo(){
    return (
        <main>
            <ItemSaldo titulo="Entrada " valor="R$ 0.00" Icone={FaCaretSquareUp}/>
            <ItemSaldo titulo="Saída " valor="R$ 0.00" Icone={FaCaretSquareDown}/>
            <ItemSaldo titulo="Total" valor="R$ 0.00" Icone={FaMoneyCheckAlt}/>
        </main>
    )
}