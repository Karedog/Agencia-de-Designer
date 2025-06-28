import imgLogo from "@/../public/logo.png"
import iconeMoon from "@/../public/moon.png"
import iconeSun from "@/../public/sun.png"
import estilo from "./Topo.module.css"

export default function Topo(){
    return (
        <header id={estilo.header}>
            <img className={estilo.img} src={imgLogo.src} alt="Logotipo da loja, um 'M'" />
            <button className={estilo.icone}><img src={iconeMoon.src} alt="icone de lua" className={estilo.botao_iconeLua} /></button>
        </header>
    );

}