import React from 'react'
import Footer from '../components/Footer'
import Form from '../components/Form'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'

const Contact = () => {
  return (
    <>
     <Navbar />
     <HeroImage heading='Contact' text='contact with us' />
     <Form />
     <Footer />
    </>
  )
}

export default Contact