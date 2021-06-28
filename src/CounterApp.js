import React, { useState } from 'react';
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css'

const CounterApp = ({ value = 0 }) => {
    const [counter, setCounter] = useState(value);

    //handleAdd
    const handleAdd = () => {
        setCounter(counter + 1);
    }

    //handleReset
    const handleReset = () => {
        setCounter(value);
    }

    //handleSubtract
    const handleSubtract = () => {
        setCounter(counter - 1);
    }

    return (
        <>
            <h1 className="text-center">CounterApp</h1>
            <h2 className="text-center"> {counter} </h2>

            <div className="text-center">

                <button type="button" className="btn btn-outline-warning btn-lg"
                    onClick={handleSubtract}>-1
                </button>

                <button type="button" className="btn btn-outline-warning btn-lg"
                    onClick={handleReset}>Reset
                </button>

                <button type="button" className="btn btn-outline-warning btn-lg"
                    onClick={handleAdd}>+1
                </button>
            </div>
        </>
    );
}

//declaracion de propTypes 
CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;