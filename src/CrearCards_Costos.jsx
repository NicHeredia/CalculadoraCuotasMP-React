import {costos_compra} from './tasas';

import CardCuota_Custom from './CardCuota_Custom';

function CrearCards_Costos (props) {

    const {monto} = props;

    return (
        [
            <h2 key="costos" className='text-3xl m-3 weight-bold'>Costos</h2>,
            <CardCuota_Custom
                key="costos40"
                cuota={"40"}
                mensaje = {"Precio 40% + IVA"}
                montoFinal={costos_compra.cuarenta}
                porcentaje={40}
                monto={monto}
            />,
            <CardCuota_Custom
                key="costos50"
                cuota={"50"}
                mensaje = {"Precio 50% + IVA"}
                montoFinal={costos_compra.cincuenta}
                porcentaje={50}
                monto={monto}
            />,
        ]
    )
}

export default CrearCards_Costos