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
            <div className={estilo.caixa_rodape_info}>
                <div className={estilo.caixa_info}>
                    <Image src={imgLogo} alt="Logotipo da loja, um 'M'" height={35} width={50}/>
                    <p className={estilo.rodape_texto}></p>
                    <p>Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias,
                        ferramentas e tecnologias personalizadas.</p>
                </div>

                <div className={estilo.caixa_social}>
                    <Link href="#"><Image alt="Icone Facebook" src={iconeFace.src} height={45} width={45}></Image></Link>
                    <Link href="#"><Image alt="Icone X" src={IconeX.src} height={45} width={45}></Image></Link>
                    <Link href="#"><Image alt="Icone Linkedin" src={iconeLinkedin.src} height={45} width={45}></Image></Link>
                    <Link href="#"><Image alt="Icone Dribble" src={IconeDribble.src} height={45} width={45}></Image></Link>
                    <Link href="#"><Image alt="Icone Behance" src={iconeBehance.src} height={45} width={45}></Image></Link>
                    <Link href="#"><Image alt="Icone Google" src={iconeGoogle.src} height={45} width={45}></Image></Link>
                </div>
            </div>
            <div className={estilo.caixa_rodape_copyright}>
                <p className={estilo.copyrigth}>Copyright 2025 <span>Douglas D. R.</span></p>
            </div>
        </footer>
        
    );

}