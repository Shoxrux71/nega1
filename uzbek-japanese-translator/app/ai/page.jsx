"use client"
// import React, { useState } from "react";
import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
// import "./index.css";
// import "./App.css";
import React, { useRef } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
// import PrintComponent from "@/components/PrintComponent";
// import PrintComponent from './PrintComponent';




const Ai = () => {
  const componentRef = useRef();

  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const [text, setText] = useState('');
  const [showButton, setShowButton] = useState(true);

  const genAI = new GoogleGenerativeAI('AIzaSyAITWAe39JGoxYtJ8E_SjPTFwDgsy78eTM');
  const handleButtonClick = () => {
    setText('');
    setShowButton(false);
  };
  const translateText = async () => {
    try {
      // Translate from Uzbek to English
      let response = await genAI
        .getGenerativeModel({ model: "gemini-1.5-flash" })
        .generateContent(`Translate this to English: ${inputText}`);
      let englishText = response.response.text();

      // Translate from English to Japanese
      response = await genAI
        .getGenerativeModel({ model: "gemini-1.5-flash" })
        .generateContent(`Translate this to Japanese: ${englishText}`);
      let japaneseText = response.response.text();

      setTranslatedText(japaneseText);
    } catch (error) {
      console.error("Error during translation:", error);
      setTranslatedText("Translation failed.");
    }
  };

  const copyToClipboard = () => {
    // Create a textarea element to copy text to clipboard
    const textarea = document.createElement("textarea");
    textarea.value = translatedText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("Matndan nusxa olindi!");
  };
  const downloadPDF = () => {
    const input = componentRef.current;
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 0, 0);
        pdf.save('download.pdf');
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container">
      <div className="center-box">
        <h1 className="title">Uzbek va Yapon tarjimoni</h1>
        <div className="inputBtn">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter text in Uzbek"
            className="inputText"
          />
          <button onClick={translateText} className="enterBtn">
            Tarjima qilish
          </button>
        </div>
        <div style={{ marginTop: "20px" }}>
          <h2>Translated Text:</h2>
          <p className="answer-container">{translatedText}</p>
          {translatedText && (
            <button onClick={copyToClipboard} className="copyBtn">
              Copy to Clipboard
            </button>
          )}
        </div>
        <textarea
        className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="O'zbek tilida so'z kiriting..."
      />
      {showButton && (
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={handleButtonClick}
        >
          Matnni O'chirish
        </button>
      )}
      </div>
      <br></br>
      {/* <Button onClick={downloadPDF}>Download as PDF</Button> */}
      <div ref={componentRef}>
        {/* <PrintComponent /> */}
      </div>
    </div>
  );
}
// こんにちは (Konnichiwa)  明日学校に行けません。病気です。 (Ashita gakkō ni ikenai desu. Byōki desu.) 
// 一番近い銀行はどこですか？ (Ichiban chikai ginkō wa doko desu ka?) 


export default Ai;
