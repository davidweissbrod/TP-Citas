import React from 'react'

const Boton = (color, texto, onClick) =>{
    return(
        <>
            <button variant={color} onClick={onClick}>{texto}</button>
        </>
    );
}

export default Boton;