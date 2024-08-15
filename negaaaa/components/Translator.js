'use client'
import React, { useState } from 'react'
import { IoMdCopy } from 'react-icons/io'
import { GoogleGenerativeAI } from "@google/generative-ai";
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
const Translator = () => {
  const [text, setText] = useState('')
  const [translatedText, setTranslatedText] = useState('')

  const translateText = async () => {
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization: `Bearer ${'a_UYpB80Ku1U8WcJhdLbga9KKWIDf7GlQMCa7tM2hGvwWnZTjSj9aSTwp6QHcNc6og1WVVunOVilEYrAtL'}`
      },
      body: JSON.stringify({
        from: 'ja', // Japanese
        to: 'uz_UZ', // Uzbek
        data: text,
        platform: 'api'
      })
    }

    try {
      const response = await fetch(
        'https://api-b2b.backenster.com/b1/api/v3/translate',
        options
      )

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      setTranslatedText(data.result)
    } catch (error) {
      console.error('Failed to fetch translation:', error)
    }
  }

  const copyToClipboard = () => {
    const textToCopy = document.getElementById('translatedTextId').textContent
    navigator.clipboard.writeText(textToCopy)

    alert('nusxa olindi:  ' + textToCopy)
  }

  return (
    <div className='min-h-screen flex flex-col items-center p-0 bg-gray-100'>
      <div className='w-full max-w-md bg-white shadow-md rounded-lg p-6 mt-5'>
      <Link href={"./gemini"}>
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">
                {/* <image src='jpn.png' className='w-[30px]'/> */}
                <ChevronRight className="h-4 w-4" />
              </button>
            </Link>
        <h1 className='text-2xl font-semibold mb-4 text-center'>
          Yapon tilida so`z yoki gap kiriting...
          <span className='text-blue-500 tracking-wider text-sm'>
            {' '}
            imloviy xatolarsiz{' '}
          </span>
        </h1>
        <div className='flex justify-center mb-5'>
          <img className='w-[280px] h-[140px]' src='jpntouzb.png' />
        </div>
        <textarea
          className='w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Yapon tilida so`z kiriting..."
        />
        <button
          className='w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300'
          onClick={translateText}
        >
          Tarjima qilish
        </button>
        {translatedText && (
          <div className='mt-4 p-4 border border-blue-300 rounded-lg bg-blue-50'>
            <h2 className='text-2xl font-bold mb-3 text-blue-800'>Tarjima:</h2>
            <div className='flex justify-between content-center'>
              <p
                id='translatedTextId'
                className='text-lg text-gray-700 leading-relaxed'
              >
                {translatedText}
              </p>
              <button
                onClick={copyToClipboard}
                className='px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300'
              >
                <IoMdCopy />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Translator
