import CardCuota from './CardCuota';

import { tasa_naranja, porcentajes, tasa_cuota_simple } from './tasas';

function CrearCards_Naranja (props) {
    const {monto} = props;

    return (
        [
            <h2 key="Naranja" className='text-3xl m-3 weight-bold'>Naranja</h2>,
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
                key="cuota2_naranja"
                cuota={2}
                montoFinal={tasa_naranja. naranja2}
                porcentaje={porcentajes.naranja2}
                monto={monto}
            />,
            <CardCuota
                key="cuota3_naranja"
                cuota={3}
                montoFinal={tasa_naranja.naranja3}
                porcentaje={porcentajes.naranja3}
                monto={monto}
            />,
            <CardCuota
                key="cuota6_naranja"
                cuota={6}
                montoFinal={tasa_naranja.naranja6}
                porcentaje={porcentajes.naranja6}
                monto={monto}
            />,
            
        ]
    )

}

export default CrearCards_Naranja