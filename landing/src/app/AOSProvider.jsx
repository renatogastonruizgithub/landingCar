'use client';
import React from 'react'
import { useEffect } from 'react'


import AOS from 'aos';
    
import 'aos/dist/aos.css';

function AOSProvider({ children }) {
    useEffect(() => {
        AOS.init({
          once: true,
          disable: 'phone',
          duration: 600,
          easing: 'ease-out-sine',
        })
      })
  return (
    <>{ children }</>
  )
}

export default AOSProvider