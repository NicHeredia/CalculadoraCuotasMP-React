import './btn.css'
import  { useState } from 'react';
import CrearCards_CuotaSimple from './CrearCards_CuotaSimple';
import CrearCards_Naranja from './CrearCards_Naranja';
import CrearCards_Costos from './CrearCards_Costos';




function Contenedor() {
    const [mostrarCard_Ahora, setMostrarCard_Ahora] = useState(false);
    const [mostrarCard_Naranja, setMostrarCard_Naranja] = useState(false);
    const [mostrarCard_Costos, setMostrarCard_Costos] = useState(false);
    const [mostrarBtnBorrar, setMostrarBtnBorrar] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);


    const [montoValue, setMontoValue] = useState('');

    const handleChange = (event) => {
        // Actualiza el estado con el valor del input
        setMontoValue(event.target.value);
    };

    const handleClickCuotaSimple = () => {
        // Cambia el estado para mostrar la CardCuota
        setMostrarBtnBorrar(true);
        setMostrarCard_Ahora(true);
        setMostrarCard_Naranja(false);
        setMostrarCard_Costos(false)
        setFadeOut(false);

    };

    const handleClickNaranja = () => {
        // Cambia el estado para mostrar la CardCuota
        setMostrarBtnBorrar(true);
        setMostrarCard_Naranja(true);
        setMostrarCard_Ahora(false);
        setMostrarCard_Costos(false)
        setFadeOut(false);
    };

    const handleClickCostos = () => {
        // Cambia el estado para mostrar la CardCuota
        setMostrarBtnBorrar(true);
        setMostrarCard_Naranja(false);
        setMostrarCard_Ahora(false);
        setMostrarCard_Costos(true);
        setFadeOut(false);
    };

    const handleClickBorrar = () => {
        // Cambia el estado para mostrar la CardCuota
        setFadeOut(true)
        setTimeout(() => {
            setMostrarCard_Naranja(false);
            setMostrarCard_Ahora(false);
            setMostrarCard_Costos(false);
            setMontoValue('');
        },750);
        setMostrarBtnBorrar(false)
    }

    return (
        <>
            <section className="text-center lg:w-3/4 mx-auto py-1 bg-[#ffffffb7] shadow-2xl rounded-xl border-1 border-[ffffff2e] w-11/12 min-h-52 mb-10 ">
                <h1 className="text-3xl py-2 font-medium">Calculadora Cuotas</h1>
                

                    <div className="flex align-middle justify-center w-full m-auto">
                        <input
                            type="number"
                            className="w-9/12 text-center my-3 mx-auto lg:w-2/5 focus:outline-none text-lg"
                            id='monto'
                            placeholder="Ingrese el monto"
                            value={montoValue} // Asigna el valor del estado al input
                            onChange={handleChange} // Maneja cambios en el input
                            autoFocus
                        />

                        {mostrarBtnBorrar && (
                            <button 
                                id='borrarBtn' 
                                className='absolute lg:right-[500px] right-20 m-2 text-xl bg-transparent text-black'
                                onClick={handleClickBorrar}
                            >
                                X
                            </button>
                        )}
                    </div>

                    <button className='bg-[#004e98]' onClick={handleClickCuotaSimple}>Cuota Simple</button>
                    <button className='bg-[#ff6b35]'onClick={handleClickNaranja}>Naranja</button>
                    <button className='bg-black' onClick={handleClickCostos}>Costos</button>

                

                <div id="resultadoCuotas" className={fadeOut ? 'fade-out' : ''}>
                    {mostrarCard_Ahora && CrearCards_CuotaSimple({monto: montoValue })}
                    {mostrarCard_Naranja && CrearCards_Naranja({monto: montoValue })}
                    {mostrarCard_Costos && CrearCards_Costos({monto: montoValue })}

                </div>
            </section>
        </>
    );
}

export default Contenedor;
