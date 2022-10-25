import React from "react";
import "./ItemSaldo.css"

export function ItemSaldo({titulo, valor}){
    return (
        <section>
            <h2>{titulo}</h2>
            <span>{valor}</span>
        </section>
    )
}