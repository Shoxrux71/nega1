"use client";
import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/router';
import { IoMdCopy } from "react-icons/io";
// import Navbar from '@/components/navbar';
// import Footer from '@/components/footer.jsx';

const Translator = () => {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [geminiTranslatedText, setGeminiTranslatedText] = useState('');
  const [language, setLanguage] = useState('ja'); // default to Japanese
  const [generateSentences, setGenerateSentences] = useState(false); // track switch status

  const genAI = new GoogleGenerativeAI('AIzaSyAITWAe39JGoxYtJ8E_SjPTFwDgsy78eTM');

  const translateText = async () => {
    const options = {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'Authorization': `Bearer ${'a_UYpB80Ku1U8WcJhdLbga9KKWIDf7GlQMCa7tM2hGvwWnZTjSj9aSTwp6QHcNc6og1WVVunOVilEYrAtL'}`
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

  const copyToTranslatedText = () => {
    const copytext = document.getElementById('translatedTextId').textContent
    navigator.clipboard.writeText(copytext)

    alert('nusxa olindi:  ' + copytext)
  }

  const copyToGemini = () => {
    const copygemini = document.getElementById('fromgeminitocopy').textContent
    navigator.clipboard.writeText(copygemini)

    alert('nusxa olindi: ' + copygemini)
  }

  return (
    <div className="">
      {/* <Navbar/> */}
      <div className="min-h-screen flex flex-col items-center pt-5 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="m-5 w-full max-w-md bg-white shadow-md rounded-lg p-6">
          <div className='flex justify-between mb-4'>
            <Link href={"./"}>
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">
                <img className='w-[30px] mr-2' src='jpn.png' alt='Japan flag' />
                <ChevronLeft className="h-4 w-4" />
              </button>
            </Link>
            <div className="flex items-center space-x-3">
              <input 
                type="checkbox" 
                id="gemini-switch" 
                checked={generateSentences} 
                onChange={() => setGenerateSentences(!generateSentences)} 
                className="toggle-checkbox" 
              />
              <label htmlFor="gemini-switch" className="text-green-500">Gemini bilan...</label>
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
              <div className='flex justify-between items-center'>
                <p id='translatedTextId'>{translatedText}</p>
                <button 
                  onClick={copyToTranslatedText} 
                  className='px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300'>
              <IoMdCopy />
                </button>
              </div>
            </div>
          )}
          {generateSentences && geminiTranslatedText && (
            <div className="mt-4 p-3 border border-gray-300 rounded bg-gray-50">
              <h2 className="text-xl font-semibold mb-2">Gemini Tarjima:</h2>
              <div className="flex justify-between items-center">
                <p id='fromgeminitocopy'>{geminiTranslatedText}</p>
                <button 
                  onClick={copyToGemini} 
                  className='px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300'>
                  <IoMdCopy />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default Translator;
