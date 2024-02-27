import React from 'react'
import { useState } from 'react';
import {useSelector} from "react-redux"

const AuthCart = ({children}) => {
      const authCtx=useSelector((state)=>state.login)
      const {isLogged}=authCtx
      console.log(isLogged)
      if(!isLogged){
        window.location.href="/login"
      }
  return (
    <>
    {children}
    </>
    
  )
}
export default AuthCart;