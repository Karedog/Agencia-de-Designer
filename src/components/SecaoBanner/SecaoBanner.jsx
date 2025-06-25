import estilo from "./SecaoBanner.module.css"
import Image from "next/image";
import imagemBanner from "../../../public/banner.jpg"

export default function SecaoBanner(){
    return (
        <section className={estilo.secao_banner}>
            <div className={estilo.caixa_img_banner}>
                <Image className={estilo.imagem_banner}src={imagemBanner.src} alt="Banner" width={500} height={500}/>
            </div>
            <div className={estilo.caixa_texto_banner}>
                <p>BRANDING / UI / UX / TECNOLOGIA</p>
                <h2>Agência de Branding</h2>
                <span>e design digital</span>
            </div>

        </section>
    );

}