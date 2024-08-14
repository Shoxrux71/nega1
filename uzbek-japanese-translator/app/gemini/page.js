"use client";
import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import Link from 'next/link';
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/router';
import { IoMdCopy } from 'react-icons/io'
import Navbar from '@/components/navbar';
import Footer from '@/components/footer.jsx';


const Translator = () => {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [geminiTranslatedText, setGeminiTranslatedText] = useState('');
  // const [jlptSentences, setJlptSentences] = useState({
  //   N5: geminiTranslatedText,
  //   N4: '',
  //   N3: '',
  //   N2: '',
  //   N1: ''
  // });
  const [language, setLanguage] = useState('ja'); // default to Japanese
  const [generateSentences, setGenerateSentences] = useState(false); // track switch status

  const genAI = new GoogleGenerativeAI('AIzaSyAITWAe39JGoxYtJ8E_SjPTFwDgsy78eTM');

  const translateText = async () => {
    const options = {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_LINGVANEX_API_KEY}`
      },
      body: JSON.stringify({
        from: 'uz_UZ', // Uzbek
        to: language,
        data: text,
        platform: 'api'
      })
    };

    try {
      const response = await fetch('https://api-b2b.backenster.com/b1/api/v3/translate', options);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setTranslatedText(data.result);

      if (language === 'ja' && generateSentences) {
        // generateJlptSentences(data.result);
        translateWithGemini(data.result);
      }
    } catch (error) {
      console.error('Failed to fetch translation:', error);
    }
  };

  const translateWithGemini = async (text) => {
    try {
      let response = await genAI
        .getGenerativeModel({ model: "gemini-1.5-flash" })
        .generateContent(`Use this word ${text} to make a sentence in Japanese. No further explanations or comments are needed!`);
      let japaneseText = response.response.text();

      console.log(japaneseText);
      setGeminiTranslatedText(japaneseText);
    } catch (error) {
      console.error("Error during translation:", error);
      setGeminiTranslatedText("Translation failed.");
    }
  };

  // const generateJlptSentences = async (translatedText) => {
  //   const levels = ['N5', 'N4', 'N3', 'N2', 'N1'];
  //   const sentences = {};

  //   for (const level of levels) {
  //     const options = {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${process.env.NEXT_PUBLIC_LINGVANEX_API_KEY}`
  //       },
  //       body: JSON.stringify({
  //         text: `Make me a sentence at JLPT ${level} level using: ${translatedText}`,
  //       })
  //     };

  //     try {
  //       const response = await fetch('https://gemini-api-endpoint.example.com/generate', options);

  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }

  //       const data = await response.json();
  //       sentences[level] = data.sentence;
  //     } catch (error) {
  //       console.error(`Failed to fetch sentence for JLPT ${level}:`, error);
  //     }
  //   }

  //   setJlptSentences(sentences);
  // };

// const copyToTranslatedText = ()=>{
//   const textToCopyTrn = document.getElementById('transatedCopy').textContent
//   navigator.clipboard.writeText(textToCopyTrn)
//   alert('nusxa olindi:  ' + textToCopyTrn)

// }
const copyToTranslatedText = () => {
  const copytext = document.getElementById('translatedTextId').textContent
  navigator.clipboard.writeText(copytext)

  alert('nusxa olindi:  ' + copytext)
}

const copyToGemini =()=>{
  const copygemini = document.getElementById('fromgeminitocopy').textContent
  navigator.clipboard.writeText(copygemini)

  alert('nusxa olindi: ' + copygemini)
}

  return (
    <div className="">
      <Navbar/>
      <div className="min-h-screen flex flex-col items-center pt-5 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className=" m-5 w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <div className='flex justify-between mb-4'>
          <Link href={"./"}><Button variant="outline"><img className='w-[30px]' src='jpn.png'/><ChevronLeft className="h-4 w-4" /></Button></Link>
          <div className="flex items-center space-x-3">
            <Switch id="airplane-mode" onCheckedChange={(checked) => setGenerateSentences(checked)} />
            <Label htmlFor="airplane-mode"><span className='text-green-500'>Gemini bilan...</span></Label>
          </div>
        </div>
        <h1 className="text-2xl font-semibold mb-4 text-center">
        O'zbek tilida so'z yoki gap kiriting...
          <span className="text-blue-500 tracking-wider text-sm"> imloviy xatolarsiz </span>
        </h1>
        <textarea
          className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="O'zbek tilida so'z kiriting..."
        />
        <div className="mb-4">
          <select
            className="cursor-pointer w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="ja">Japanese</option>
            <option value="en">English</option>
            <option value="ru">Russian</option>
            {/* Add more languages as needed */}
          </select>
        </div>
        <button
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          onClick={translateText}
        >
          Translate
        </button>
        {translatedText && (
          <div className="mt-4 p-3 border border-gray-300 rounded bg-gray-50">
            <h2 className="text-xl font-semibold mb-2">Api Tarjima:</h2>
          <div className='flex justify-between content-center'>
          <p id='translatedTextId'>{translatedText}</p>

            <Button onClick={copyToTranslatedText} id="transatedCopy"  className='transatedCopy px-3 py-1 text-sm  text-white rounded hover:bg-blue-600'>
              <IoMdCopy />
            </Button>
          </div>
          </div>
        )}
        {generateSentences && geminiTranslatedText && (
          <div className="mt-4 p-3 border border-gray-300 rounded bg-gray-50">
            <h2 className="text-xl font-semibold mb-2">Gemini Tarjima:</h2>
            <div className="content-center items-center justify-between flex mt-4 p-3 border border-gray-300 rounded bg-gray-50">
            <p id='fromgeminitocopy'>{geminiTranslatedText}</p>
            <Button onClick={copyToGemini}>  <IoMdCopy /></Button>
          </div>
        
          </div>
        )}
      </div>
      </div>
      <Footer/>
    </div>
    
  );
};

export default Translator;