import imgLogo from "@/../public/logo.png"
import estilo from "./Topo.module.css"

export default function Topo(){
    return (
        <header id={estilo.header}>
            <img className={estilo.img} src={imgLogo.src} alt="Logotipo da loja, um 'M'" />
            <button className={estilo.icone}>Icone</button>
        </header>
    );

}