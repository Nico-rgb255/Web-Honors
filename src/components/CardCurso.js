import React from 'react';

function CardCurso({ nombre, descripcion }) {
    const cardStyle = {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '20px',
        width: '250px',
        margin: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        display: 'inline-block',
        verticalAlign: 'top'
    };

    return (
        <div style={cardStyle}>
            <h2 style={{ color: '#0070f3' }}>{nombre}</h2>
            <p>{descripcion}</p>
            <button>Ver más</button>
        </div>
    );
}

export default CardCurso;