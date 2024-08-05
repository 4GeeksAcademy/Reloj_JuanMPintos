
import React from "react";
import ReactDOM from "react-dom/client";
import ContadorDeSegundos from "./component/ContadorDeSegundos.jsx";
import "../styles/index.css";

let contador = 0
setInterval(() => {
    contador++

    ReactDOM.createRoot(document.getElementById('app')).render(<ContadorDeSegundos contadores={contador} />);
}, 1000)

