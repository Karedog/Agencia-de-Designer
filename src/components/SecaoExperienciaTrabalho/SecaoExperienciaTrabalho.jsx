import Card from "../Card/Card";
import estilo from "./SecaoExperienciaTrabalho.module.css"

export default function SecaoExperienciaTrabalho(){
    return (
        <section id={estilo.secao_experiencia}>
            <div className={estilo.caixa_experiencia}>
                <h2>Experiências De Trabalho</h2>
                <div className={estilo.linha_designer}></div>
                <p>Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de
                    Sites e Marketing Digital, nos empenhamos diariamente para entregar
                    resultados que tragam impacto aos nossos clientes.
                </p>
            </div>
            <div className={estilo.caixa_cards}>
                <Card 
                    data="JUNHO 2012 - 2016" 
                    titulo="Web Designer" 
                    empresa="Pied Piper StartUp." 
                    info="Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores"
                />
                <Card 
                    data="AGOSTO 2016 - 2019" 
                    titulo="Product Designer" 
                    empresa="E Corp." 
                    info="Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra"
                />
                <Card 
                    data="FEVEREIRO 2019 - 2021" 
                    titulo="Digital Consulting" 
                    empresa="Arasaka Inc." 
                    info="Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução"
                />
            </div>
        </section>
    );

}