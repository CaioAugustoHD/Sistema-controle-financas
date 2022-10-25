import React from "react";
import { ItemSaldo } from "./ItemSaldo";

export function ConteinerSaldo(){
    return (
        <main>
            <ItemSaldo titulo="Entrada" valor="R$ 0.00"/>
            <ItemSaldo titulo="Saída" valor="R$ 0.00"/>
            <ItemSaldo titulo="Total" valor="R$ 0.00"/>
        </main>
    )
}