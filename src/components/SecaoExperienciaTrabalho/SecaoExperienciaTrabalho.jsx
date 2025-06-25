import Card from "../Card/Card";
import estilo from "./SecaoExperienciaTrabalho.module.css"

export default function SecaoExperienciaTrabalho(){
    return (
        <section className={estilo.secao_experiencia}>
            <div className={estilo.caixa_experiencia}>
                <h2>Experiências De Trabalho</h2>
                <div className={estilo.linha_designer}></div>
                <p>Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de
                    Sites e Marketing Digital, nos empenhamos diariamente para entregar
                    resultados que tragam impacto aos nossos clientes.
                </p>
                <div className={estilo.caixa_cards}>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </section>
    );

}