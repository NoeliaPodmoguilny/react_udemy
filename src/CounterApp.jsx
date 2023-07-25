import PropTypes from 'prop-types'
import { useState } from 'react'


export const CounterApp = ({value}) => {
    
    const [ counter, setCounter] = useState(value)
    
    const handleAdd = (event) => {
        // console.log(event);
        setCounter( counter + 1 )
    }
    const handleDecremen = (event) => {
        // console.log(event);
        setCounter( counter - 1 )
    }
    const handleReset = (event) => {
        // console.log(event);
        setCounter( value )
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={ handleAdd }> +1 </button>
            <button onClick={ handleDecremen }> -1 </button>
            <button onClick={ handleReset }> Reset </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}
