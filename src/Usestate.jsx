import { useState } from "react"


export const Usestate = ({ valor }) => {
    
    const bgRed = () => 'red'; 
    const bgBlue = () => 'blue'; 

    const [color, setColor] = useState(null)


    const handleRed = (event) => {
        const redColor = bgRed;
        setColor( redColor )
    }
    
    const handleBlue = (event) => {
        const blueColor = bgBlue;
        setColor( blueColor )
    }

    return (
        <>
        <div style={{ background: color }}>
            <h1>{ valor }</h1>
            <button onClick={ handleRed }>Rojo</button>
            <button onClick={ handleBlue }>Azul</button>
        </div>
        </>
    )
}


