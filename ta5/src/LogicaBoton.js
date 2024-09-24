import React, { useState } from "react";

const MostrarTexto = ()=>{
    const [texto, setMostrarTexto] = useState(false);

    const handleMostrarTexto = ()=>{
        setMostrarTexto(true);
    }

    const handleOcultarTexto = ()=>{
        setMostrarTexto(false);
    }

    return(
        
    );

}