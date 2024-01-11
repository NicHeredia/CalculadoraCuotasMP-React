import './CardCuota.css'
// const monto = document.getElementById("monto");


function CardCuota_Credito (props) {
    const { cuota, montoFinal, porcentaje , monto} = props;
    return (
        <>
        <div className="cardCuota fade-in lg:w-1/5 w-2/5 fade-in">
                    <div className="cardCuota__numero">{cuota}</div>
                    <div className="cardCuota__contenedorMontos">
                        <p className="cardCuota__precioFinal">Precio Final {Math.round(monto * montoFinal).toLocaleString("de-DE")}</p>
                        <p className="cardCuota__precioCuotas">{cuota} cuotas de {Math.round((monto * montoFinal) / cuota).toLocaleString("de-DE")}</p>
                        <div className="cardCuota__porcentaje">{porcentaje}%</div>
                    </div>
                </div>
        </>
    )
}

export default CardCuota_Credito
