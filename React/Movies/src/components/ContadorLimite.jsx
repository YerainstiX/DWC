import React, { useState } from "react"
import "./contadorLimite.css"

const ContadorLimite = () => {
    const [counter, setCounter] = useState(0)

    const incrementCounter = () => {
        if (counter > 10) return setCounter(10)
        return setCounter(counter + 1)
    }

    const decrementCounter = () => {
        if (counter < 0) return setCounter(0)
        return setCounter(counter - 1)
    }

    const counterStateDown = () => {
        if (counter === 0) return true
        return false
    }

    const counterStateUp = () => {
        if (counter === 10) return true
        return false
    }

    return (
        <>
            <div className="contador_container">
                <p className="contador_p">Contador</p>
                <button
                    className="contador_increment"
                    disabled={counterStateUp()}
                    onClick={incrementCounter}
                >
                    Increment
                </button>
                <button
                    className="contador_decrement"
                    disabled={counterStateDown()}
                    onClick={decrementCounter}
                >
                    Decrement
                </button>
                <p>{counter}</p>
            </div>
        </>
    )
}

export default ContadorLimite
