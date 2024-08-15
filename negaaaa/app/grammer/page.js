'use client'
import Navbar from "@/components/navbar";
import React, { useState } from "react";
import Footer from "@/components/Footer";

function AccordionItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-3 text-blue-600 hover:text-blue-800 transition-colors duration-200 focus:outline-none"
      >
        {title}
      </button>
      {isOpen && (
        <div className="py-2 text-gray-700">
          {content}
        </div>
      )}
    </div>
  );
}

export function AccordionDemo() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow p-8 grid gap-8 grid-cols-1 md:grid-cols-2">
        <div className="border border-gray-300 bg-white text-gray-900 p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">
            <span className="text-blue-600">"自動詞" (jidōshi)</span>
          </h1>
          <p className="text-gray-700 mb-4">
            <span className="text-blue-600">"自動詞" (jidōshi)</span> o'z-o'zidan harakat qiluvchi fe'llarni anglatadi, masalan, "ochilmoq" yoki "qaytmoq".
          </p>
          <div className="space-y-2">
            <AccordionItem title="ドアが開く (Doa ga aku)" content="Eshik ochiladi." />
            <AccordionItem title="電気が消える (Denki ga kieru)" content="Chiroq o'chadi." />
            <AccordionItem title="花が咲く (Hana ga saku)" content="Gullar ochiladi." />
            <AccordionItem title="車が止まる (Kuruma ga tomaru)" content="Mashina to'xtaydi." />
            <AccordionItem title="時計が動く (Tokei ga ugoku)" content="Soat ishlaydi." />
            <AccordionItem title="水が凍る (Mizu ga kooru)" content="Suv muzlaydi." />
            <AccordionItem title="音が聞こえる (Oto ga kikoeru)" content="Ovoz eshitiladi." />
            <AccordionItem title="雨が降る (Ame ga furu)" content="Yomg'ir yog'adi." />
            <AccordionItem title="電車が出る (Densha ga deru)" content="Poyezd chiqadi." />
            <AccordionItem title="火が消える (Hi ga kieru)" content="Olov o'chadi." />
          </div>
        </div>

        <div className="border border-gray-300 bg-white text-gray-900 p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">
            <span className="text-blue-600">"他動詞" (tadōshi)</span>
          </h1>
          <p className="text-gray-700 mb-4">
            <span className="text-blue-600">"他動詞" (tadōshi)</span> esa boshqalarni harakatga keltiruvchi fe'llarni anglatadi, masalan, "ochmoq" yoki "qaytarish".
          </p>
          <div className="space-y-2">
            <AccordionItem title="ドアを開ける (Doa o akeru)" content="Eshikni ochmoq." />
            <AccordionItem title="電気を消す (Denki o kesu)" content="Chiroqni o'chirmoq." />
            <AccordionItem title="花を植える (Hana o ueru)" content="Gul ekmoq." />
            <AccordionItem title="車を止める (Kuruma o tomeru)" content="Mashinani to'xtatmoq." />
            <AccordionItem title="時計を直す (Tokei o naosu)" content="Soatni tuzatmoq." />
            <AccordionItem title="水を凍らせる (Mizu o kooraseru)" content="Suvni muzlatmoq." />
            <AccordionItem title="音を聞く (Oto o kiku)" content="Ovozni eshitmoq." />
            <AccordionItem title="雨を降らせる (Ame o furaseru)" content="Yomg'ir yog'dirmoq." />
            <AccordionItem title="電車を出す (Densha o dasu)" content="Poyezdni chiqarish." />
            <AccordionItem title="火を消す (Hi o kesu)" content="Olovni o'chirmoq." />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AccordionDemo;
