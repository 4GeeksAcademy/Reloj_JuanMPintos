
import React from "react";
import ReactDOM from "react-dom/client";
import ContadorDeSegundos from "../js/component/SecondsCounter.jsx";
import "../styles/index.css";
import Home from "./component/home.jsx";

let contador = 0
contador = setInterval(() => {
contador++    

ReactDOM.createRoot(document.getElementById('app')).render(<ContadorDeSegundos contador={contador} />);
} ,1000)

