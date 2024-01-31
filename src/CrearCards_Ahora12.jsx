import { tasa_ahora12,porcentajes } from './tasas';
import CardCuota from './CardCuota';

function CrearCards_Ahora12 (props) {
    const {monto} = props;
    return (
        [
            <h2 key="ahora12" className='text-3xl m-3 weight-bold'>Ahora 12</h2>,
            <CardCuota
                key="cuota1"
                cuota={1}
                montoFinal={tasa_ahora12.cuotas1}
                porcentaje={porcentajes.cuotas1}
                monto={monto}
            />,
            <CardCuota
                key="debito"
                cuota={"D"}
                mensaje = {"Precio final Debito"}
                montoFinal={tasa_ahora12.debito}
                porcentaje={porcentajes.debito}
                monto={monto}
            />,
            <CardCuota
                key="cuota3"
                cuota={3}
                montoFinal={tasa_ahora12.cuotas3}
                porcentaje={porcentajes.ahora3}
                monto={monto}
            />,
            <CardCuota
                key="cuota6"
                cuota={6}
                montoFinal={tasa_ahora12.cuotas6}
                porcentaje={porcentajes.ahora6}
                monto={monto}
            />,
            <CardCuota
                key="cuota12"
                cuota={12}
                montoFinal={tasa_ahora12.cuotas12}
                porcentaje={porcentajes.ahora12}
                monto={monto}
            />
        ]
    )

}



export default CrearCards_Ahora12

