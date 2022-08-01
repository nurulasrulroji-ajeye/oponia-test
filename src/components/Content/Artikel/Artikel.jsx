import React from 'react'
import BodyArtikel from './BodyArtikel'
import Foot from './Foot'
import Head from './Head'

const Artikel = () => {
  return (
    <article className='flex flex-col w-full box-border'>
      <section className='flex flex-col box-border w-full h-[759px] bg-white rounded-[5px] shadow-[0_2px_4px_2px_rgba(0,0,0,0.1)] mb-[11px]'>
        <Head />
        <BodyArtikel />
        <Foot />
      </section>
      <section className='flex flex-col box-border w-full h-[759px] bg-white rounded-[5px] shadow-[0_2px_4px_2px_rgba(0,0,0,0.1)] mb-[105px]'>
        <Head />
        <BodyArtikel />
        <Foot />
      </section>
    </article>
  )
}

export default Artikel