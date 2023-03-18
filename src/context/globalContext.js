import React, { createContext, useContext, useEffect, useState } from 'react'

export const GlobalContext = createContext({})

export const GlobalProvider = ({ children, results }) => {
    return (
        <GlobalContext.Provider value={data}>
            {children}
        </GlobalContext.Provider>
    )
}

export function useGlobalContext () {
    return useContext(GlobalContext)
}