import './CardCuota.css'

function CardCuota_Custom(props) {
    
    const { cuota, montoFinal, porcentaje , monto, mensaje} = props;
    return (
        <>
        <div className="cardCuota fade-in lg:w-1/5 w-2/5 fade-in">
                    <div className="cardCuota__numero">{cuota}</div>
                    <div className="cardCuota__contenedorMontos">
                        <p className="cardCuota__precioFinal">Precio Final ${Math.round(monto * montoFinal).toLocaleString("de-DE")}</p>
                        <p className="cardCuota__precioCuotas">{mensaje}</p>
                        <div className="cardCuota__porcentaje">{porcentaje}%</div>
                    </div>
                </div>
        </>
    )
}

export default CardCuota_Custom