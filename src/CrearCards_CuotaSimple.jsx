import { tasa_cuota_simple,porcentajes } from './tasas';
import CardCuota from './CardCuota';

function CrearCards_Ahora12 (props) {
    const {monto} = props;
    return (
        [
            <h2 key="ahora12" className='text-3xl m-3 weight-bold'>Cuota Simple</h2>,
            <CardCuota
                key="cuota1"
                cuota={1}
                montoFinal={tasa_cuota_simple.cuotas1}
                porcentaje={porcentajes.cuotas1}
                monto={monto}
            />,
            <CardCuota
                key="debito"
                cuota={"D"}
                mensaje = {"Precio final Debito"}
                montoFinal={tasa_cuota_simple.debito}
                porcentaje={porcentajes.debito}
                monto={monto}
            />,
            <CardCuota
                key="cuota3"
                cuota={3}
                montoFinal={tasa_cuota_simple.cuotas3}
                porcentaje={porcentajes.ahora3}
                monto={monto}
            />,
            <CardCuota
                key="cuota6"
                cuota={6}
                montoFinal={tasa_cuota_simple.cuotas6}
                porcentaje={porcentajes.ahora6}
                monto={monto}
            />,
            <CardCuota
                key="cuota9"
                cuota={9}
                montoFinal={tasa_cuota_simple.cuotas9}
                porcentaje={porcentajes.ahora9}
                monto={monto}
            />,
            
            <CardCuota
                key="cuota12"
                cuota={12}
                montoFinal={tasa_cuota_simple.cuotas12}
                porcentaje={porcentajes.ahora12}
                monto={monto}
            />,
        ]
    )

}



export default CrearCards_Ahora12

