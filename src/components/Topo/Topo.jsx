
import imgLogo from "@/../public/logo.png"
import iconeMoon from "@/../public/moon.png"
import iconeSun from "@/../public/sun.png"
import estilo from "./Topo.module.css"
import { useState } from "react"


export default function Topo(){
    const [tema, setTema] = useState('claro')
    
    function TrocarTema (){
        tema === 'claro'? setTema('escuro') : setTema('claro')
        document.querySelector("body").classList.toggle("tema_escuro")
    }

    return (
        <header id={estilo.header}>
            <img className={estilo.img} src={imgLogo.src} alt="Logotipo da loja, um 'M'" />
            <button 
                onClick={TrocarTema}
                className={estilo.icone}
            >
                <img 
                    src={tema === 'claro'? iconeMoon.src : iconeSun.src} 
                    alt={tema === 'claro'? "Icone de lua" : "icone de sol"}
                    className={estilo.botao_iconeLua}
                />
            </button>
        </header>
    );

}