import React, { useEffect, useState } from 'react';

const Message = () => {
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const { x, y } = coords;


    useEffect(() => {
        //Este es el cuerpo del efecto
        const mouseMove = (evt) => {
            const coords = { x: evt.x, y: evt.y }
            setCoords(coords);
        }

        window.addEventListener('mousemove', mouseMove);
        //Ejecuta la limpieza del efecto
        return () => {
            window.removeEventListener('mouseMove', mouseMove);
        }
    }, []);//La condición del efecto que desea escuchar

    return (
        <div>
            <h3>Eres genial!</h3>
            <p>
                X: { x } | Y: { y }
            </p>
        </div>
    )
}

export default Message;
