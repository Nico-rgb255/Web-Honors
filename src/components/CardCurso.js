import React from 'react';

function CardCurso({ nombre, descripcion, alClick }) {
    return (
        /* Le asignamos la clase global de tarjeta */
        <div className="tarjeta-curso-individual" onClick={alClick}>
            {/* Usamos las clases que ya reaccionan a las variables CSS */}
            <h2 className="titulo-tarjeta">{nombre}</h2>
            <p className="texto-normal">{descripcion}</p>
            
            <button className="btn-tarjeta">
                Ver más
            </button>
        </div>
    );
}

export default CardCurso;