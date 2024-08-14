'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
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

const TransCopy = () => {
  const [text, setText] = useState('')
  const [translatedText, setTranslatedText] = useState('')
  const [language, seetLanguage] = useState('ja')
  const [redirect, setRedirect] = useState(false)

  const translateText = async () => {
    const options = {
      methods: 'POST',
      headers: {
        accept: 'applicaion/json',
        'content-type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_LINGVANEX_API_KEY}`
      },
      body: JSON.stringify({
        from: 'uz_UZ',
        to: language,
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
      console.error('failed to fetch translation', error)
    }
  }

  const handleSwitchChange = () => {
    setRedirect(true)
  }

  return (
    <div className='min-h-screen flex flex-coll items-center justify-center bg-gray-100 p-0'>
      <div className='w-full max-w-md bg-white shadow-md rounded-Lg p-6'>
        <div className='flex justify-between mb-2'>
          <Link href={"/gemini"}>
            <Button variant="outline">
              Gemini
            </Button>
          </Link>
        </div>
        <h1 className='text-2xl font-semibold mb-4 text-center'>
        O'zbek tilida so'z yoki gap kiriting...
          <span className="text-blue-500 tracking-wider text-sm"> imloviy xatolarsiz </span>
        </h1>
        <Textarea  className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500" 
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder= "enter text"
       />
       <div className="mb-4">
        <Select onValueChange={(value) => setLanguage(value)}>
            <SelectTrigger className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
              <SelectValue placeholder="Tilni tanlash:" value={language} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Kiritilgan Tillar:</SelectLabel>
                <SelectItem value="ja">Japanese</SelectItem>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="ru">Russian</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Button
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          onClick={translateText}
        >
          Tarjima qilish
        </Button>
        {translatedText && (
  <div className="mt-4 p-4 border border-blue-300 rounded-lg bg-blue-50">
    <h2 className="text-2xl font-bold mb-3 text-blue-800">Tarjima:</h2>
    <p className="text-lg text-gray-700 leading-relaxed">{translatedText}</p>
  </div>
)}
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default TransCopy
