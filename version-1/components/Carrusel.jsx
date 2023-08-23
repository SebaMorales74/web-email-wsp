"use client"
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Carrusel = ({ heading, message }) => {
  
  return (
    <div className='relative'>
      {/* Filtro de fondo */}
      <div className='' />

      {/* Carrusel */}
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
      >
        {/* Primera imagen */}
        <div className='relative h-screen flex justify-center items-center'>
          <img
            className='object-cover w-full h-full'
            src='./imagenes_carrusel/vidrios_Carrusel_1.jpg'
            alt='Carousel Slide 1'
          />
          <div className='absolute inset-0 bg-black/70 z-[3]' />
          <div className='absolute p-5 text-white z-[4] text-center'>
            <h2 className='text-5xl font-bold'>{heading}</h2>
            <p className='py-2 text-xl'>{message}</p>
            <button className='px-8 py-2 border'>Agendar</button>
          </div>
        </div>

        {/* Segunda imagen */}
        <div className='relative h-screen flex justify-center items-center'>
          <img
            className='object-cover w-full h-full'
            src='./imagenes_carrusel/vidrios_Carrusel_2.png'
            alt='Carousel Slide 2'
          />
          <div className='absolute inset-0 bg-black/70 z-[3]' />
          <div className='absolute p-5 text-white z-[4] text-center'>
            <h2 className='text-5xl font-bold'>{heading}</h2>
            <p className='py-2 text-xl'>{message}</p>
            <button className='px-8 py-2 border'>Agendar</button>
          </div>
        </div>

        {/* Tercera imagen */}
        <div className='relative h-screen flex justify-center items-center'>
          <img
            className='object-cover w-full h-full'
            src='./imagenes_carrusel/vidrios_Carrusel_3.jpg'
            alt='Carousel Slide 3'
          />
          <div className='absolute inset-0 bg-black/70 z-[3]' />
          <div className='absolute p-5 text-white z-[4] text-center'>
            <h2 className='text-5xl font-bold'>{heading}</h2>
            <p className='py-2 text-xl'>{message}</p>
            <button className='px-8 py-2 border'>Agendar</button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Carrusel;
