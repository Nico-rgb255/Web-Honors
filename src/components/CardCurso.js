import React from 'react';

function CardCurso({ nombre, descripcion, alClick }) {
    // Este es tu marco y el truco para ponerlos en fila (inline-block)
    const cardStyle = {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '20px',
        width: '250px',
        margin: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        display: 'inline-block', // <--- Esto los pone uno al lado del otro
        verticalAlign: 'top',
        backgroundColor: 'white'
    };

    return (
        <div style={cardStyle}>
            <h2 style={{ color: '#0070f3', marginTop: '0' }}>{nombre}</h2>
            <p style={{ color: '#333' }}>{descripcion}</p>
            
            <button 
                onClick={alClick} 
                style={{ 
                    cursor: 'pointer', 
                    padding: '8px 12px',
                    borderRadius: '4px',
                    border: '1px solid #000000',
                    backgroundColor: 'white',
                    color: '#0070f3'
                }}
            >
                Ver más
            </button>
        </div>
    );
}

export default CardCurso;