import React from 'react'
import Welcome1 from './Welcome1'
import Welcome2 from './Welcome2'
import Navbar from './Navbar'
import Footer from './Footer'

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
