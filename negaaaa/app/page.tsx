import React from 'react'
import Navbar from '@/components/navbar.jsx';
import Translator from '../components/Translator.js';
import Footer from '@/components/Footer.jsx';

const page = () => {
  return (
    <div>
      <Navbar/>
      {/* <a href="./gemini">gemini</a> */}
      <Translator/>
      <Footer/>
    </div>
  )
}

export default page