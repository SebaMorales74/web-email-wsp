import React from 'react'
import Carrusel from '../components/Carrusel'
import Portfolio from '../components/Portfolio'
import Footer from '../components/Footer';
import FloatingButton from '../components/FloatingButton';

const work = () => {
  return (
    <div>
        <Carrusel heading='My Work' message='This is some of my recent work traveling the world.' />
        <Portfolio />
        <FloatingButton/>
        <Footer />

    </div>
  )
}

export default work