
import React, { createContext, useContext, useEffect, useState } from 'react'

// Creating a new context object
const Crypto = createContext()

// Creating a custom context provider component
const CryptoContext = ({ children }) => {


    const [currency, setCurrency] = useState('INR')
    const [symbol, setSymbol] = useState("₹")

    useEffect(() => {
        if (currency === "INR") setSymbol("₹");
        if (currency === "USD") setSymbol("$");
    }, [currency])

    // Returning the provider component with context values and children components
    return (
        <Crypto.Provider value={{ currency, symbol, setCurrency, setSymbol }}>
            {children}
        </Crypto.Provider>
    )
}


export default CryptoContext

// Creating a custom hook to access context values
export const CryptoState = () => {
    return useContext(Crypto)
}