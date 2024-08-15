import React from 'react'
import Navbar from '@/components/navbar.jsx';
import Translator from '../components/Translator.js';

const page = () => {
  return (
    <div>
      <Navbar/>
      {/* <a href="./gemini">gemini</a> */}
      <Translator/>
    </div>
  )
}

export default page