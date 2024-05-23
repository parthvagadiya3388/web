import React from 'react'
import Welcome1 from './welcome-first'
import Welcome2 from './welcome-sec'
import Navbar from './navbar'
import Footer from './footer'

export default function Welcome() {
  return (
    <>
      <Navbar />
      <Welcome1/>
      <Welcome2/>
      <Footer />
    </>
  )
}
