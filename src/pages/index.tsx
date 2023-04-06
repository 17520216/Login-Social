import React from 'react'
import LoginGoogle from "../components/LoginGoogle"
import Providers from "../context/Providers"

const HOME = () => {
  return (
    <Providers>
      <LoginGoogle/>
    </Providers>
  )
}

export default HOME