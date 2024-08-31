import { useEffect, useState } from 'react';
import './Contador.css';

const Hora = () => {
    const [hora, setHora] = useState(new Date().toLocaleTimeString());

    useEffect(()=>{
        const interval =setInterval(()=>{
            setHora(new Date().toLocaleTimeString());
        }, 1000);
    },[]);

    //Para limpiar el bufer de memoria
    //return ()=> clearInterval(interval);

    return(
        <div className='reloj'>
            <h3>{hora}</h3>
        </div>
    );

}

export default Hora;

