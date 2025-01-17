import React, { createContext, useState, useContext, useEffect } from 'react'

export const CaptainDataContext = createContext()

const CaptainContext = ({ children }) => {
  const [captain, setCaptain] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const value={
    captain,
    setCaptain,
    isLoading,
    setIsLoading,
    error,
    setError
  }
  

  return (
    <CaptainDataContext.Provider value={value}>
      {children}
    </CaptainDataContext.Provider>
  )
}

export const useCaptainData = () => useContext(CaptainDataContext)

export default CaptainContext
