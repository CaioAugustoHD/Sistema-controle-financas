import React from "react";
import "./ItemSaldo.css";

export function ItemSaldo({titulo, valor, Icone}){
    return (
        <section>
            <h2>{titulo} <Icone/></h2>
            <span>{valor}</span>
        </section>
    )
}