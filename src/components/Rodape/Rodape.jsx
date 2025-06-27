import estilo from "./Rodape.module.css"
import Image from "next/image";
import imgLogo from "@/../public/logo.png"
import iconeFace from "@/../public/facebook.png"
import iconeGoogle from "@/../public/google.png"
import iconeLinkedin from "@/../public/linkedin.png"
import IconeX from "@/../public/twitter.png"
import iconeBehance from "@/../public/behance.png"
import IconeDribble from "@/../public/dribble.png"
import Link from "next/link";


export default function Rodape(){
    return (
        <footer id={estilo.rodape}>
            <div className={estilo.caixa_rodape}>
                <Image src={imgLogo} alt="Logotipo da loja, um 'M'" height={50} width={50}></Image>
                <p className={estilo.rodape_texto}></p>
                <p>Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias,
        ferramentas e tecnologias personalizadas.</p>
                <div className={estilo.caixa_social}>
                    <Link href="#"><Image src={iconeFace.src} height={50} width={50}></Image></Link>
                    <Link href="#"><Image src={IconeX.src} height={50} width={50}></Image></Link>
                    <Link href="#"><Image src={iconeLinkedin.src} height={50} width={50}></Image></Link>
                    <Link href="#"><Image src={IconeDribble.src} height={50} width={50}></Image></Link>
                    <Link href="#"><Image src={iconeBehance.src} height={50} width={50}></Image></Link>
                    <Link href="#"><Image src={iconeGoogle.src} height={50} width={50}></Image></Link>
                </div>
            </div>
            <div className={estilo.caixa_rodape}>
                <p className={estilo.copyrigth}>Copyright 2025 <span>Douglas D. R.</span></p>
            </div>
        </footer>
        
    );

}