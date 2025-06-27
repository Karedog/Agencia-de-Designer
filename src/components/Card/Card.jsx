import estilo from "./Card.module.css"

export default function Card(props){
    return (
        <div className={estilo.card}>
            <p className={estilo.card_data}>{props.data}</p>
            <h3 className={estilo.card_titulo}>{props.titulo}</h3>
            <p className={estilo.card_empresa}>{props.empresa}</p>
            <p className={estilo.card_info}>{props.info}</p>
        </div>
    );

}