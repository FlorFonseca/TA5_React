import React, { useState } from 'react';
import './TextoAMostrar.css';

const TextoAMostrar = ()=>{
    const [mostrarTexto, setMostrarTexto] = useState(false);

    const handleBoton = ()=>{
        setMostrarTexto(prev => !prev);
    }

    return(
        <div className='texto-mostrado'>
            {mostrarTexto && <h2 className='texto'>Hola Mundo!</h2>}
            <button className='mostrar-btn' onClick={handleBoton}>Botoncito</button>
        </div>
    );

}

export default TextoAMostrar;
