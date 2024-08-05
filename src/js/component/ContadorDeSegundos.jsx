import React from "react"

function ContadorDeSegundos(prop){
    return (
        <div className="col-xl-12" id="reloj">
            <p><i className="fa-regular fa-clock"></i></p>
            <p>{Math.floor(prop.contadores/100000)%10}</p>
            <p>{Math.floor(prop.contadores/10000)%10}</p>
            <p>{Math.floor(prop.contadores/1000)%10}</p>
            <p>{Math.floor(prop.contadores/100)%10}</p>
            <p>{Math.floor(prop.contadores/10)%10}</p>
            <p>{Math.floor(prop.contadores/1)%10}</p>
        </div>
    )
}

export default ContadorDeSegundos


