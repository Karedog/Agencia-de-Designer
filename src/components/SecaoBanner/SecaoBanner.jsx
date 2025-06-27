import estilo from "./SecaoBanner.module.css"
import imagemBanner from "../../../public/banner.jpg"

export default function SecaoBanner(){
    return (
        <section id={estilo.secao_banner}>
            <div className={estilo.caixa_img_banner}>
            </div>
            <div className={estilo.caixa_texto_banner}>
                <p>BRANDING / UI / UX / TECNOLOGIA</p>
                <h2>Agência de Branding</h2>
                <span>e design digital</span>
            </div>

        </section>
    );

}