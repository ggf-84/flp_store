import React from 'react'
import Hero from '../components/Hero'
import {Link} from 'react-router-dom'
import Services from '../components/HomePage/Services'
import Featured from '../components/HomePage/Featured'

export default function HomePage() {
  return (
    <>
      <Hero title="Nahaba group" max="true">
        <Link to="/products"
        className="main-link"
        style={{margin:"2rem"}}
        >products</Link>
      </Hero>
      <Services/>
      <Featured/>
    </>
  )
}
