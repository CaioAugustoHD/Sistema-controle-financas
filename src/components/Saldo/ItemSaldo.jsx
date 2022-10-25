import React from "react";

export function ItemSaldo({titulo, valor}){
    return (
        <section>
            <h2>{titulo}</h2>
            <h3>{valor}</h3>
        </section>
    )
}