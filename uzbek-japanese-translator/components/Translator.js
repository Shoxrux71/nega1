'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { IoMdCopy } from 'react-icons/io'
import { FaAngleRight } from "react-icons/fa6";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { useRouter } from 'next/router'

const Translator = () => {
  const [hiraganaText, setHiraganaText] = useState('')
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
    <div className='min-h-screen flex flex-col items-center pt-5 px-4 sm:px-6 lg:px-8 bg-gray-100'>
      <div className='w-full max-w-md bg-white shadow-md rounded-lg p-6 mt-5'>
      {/* <Link href={"./gemini"}><Button className="flex justify-between" variant="outline"><FaAngleRight  className="h-4 w-4" /><img className='w-[30px]'src='uzb.png'/></Button></Link> */}
        <h1 className='text-2xl font-semibold mb-4 text-center'>
          Yapon tilida so'z yoki gap kiriting...
          <span className='text-blue-500 tracking-wider text-sm'>
            {' '}
            imloviy xatolarsiz{' '}
          </span>
        </h1>
       <div className='flex justify-center mb-5'> <img className='w-[280px] h-[140px]' src='jpntouzb.png'/></div>
        <Textarea
          className='w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Yapon tilida so'z kiriting..."
        />
        <Button
          className='w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300'
          onClick={translateText}
        >
          Tarjima qilish
        </Button>
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
              <Button
                onClick={copyToClipboard}
                className='px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600'
              >
                <IoMdCopy />
              </Button>
            </div>
          </div>
        )}
      </div>
      <fotter/>
    </div>
  )
}

export default Translator
