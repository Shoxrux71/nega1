import Navbar from "@/components/navbar";
import React from "react";
import Footer from '@/components/footer.jsx';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow p-8 grid gap-8 grid-cols-1 md:grid-cols-2">
        <div className="border border-gray-300 bg-white text-gray-900 p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">
            <span className="text-blue-500">"自動詞" (jidōshi)</span>
          </h1>
          <p className="text-gray-600 mb-4">
            <span className="text-blue-500">"自動詞" (jidōshi)</span> o'z-o'zidan harakat qiluvchi fe'llarni anglatadi, masalan, "ochilmoq" yoki "qaytmoq"
          </p>
          <Accordion type="single" collapsible className="space-y-2">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-blue-500 hover:underline">
                ドアが開く (Doa ga aku)
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Eshik ochiladi.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-blue-500 hover:underline">
                電気が消える (Denki ga kieru)
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Chiroq o'chadi.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-blue-500 hover:underline">
                花が咲く (Hana ga saku)
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Gullar ochiladi.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-blue-500 hover:underline">
                車が止まる (Kuruma ga tomaru)
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Mashina to'xtaydi.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-blue-500 hover:underline">
                時計が動く (Tokei ga ugoku)
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Soat ishlaydi.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-blue-500 hover:underline">
                水が凍る (Mizu ga kooru)
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Suv muzlaydi.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger className="text-blue-500 hover:underline">
                音が聞こえる (Oto ga kikoeru)
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Ovoz eshitiladi.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger className="text-blue-500 hover:underline">
                雨が降る (Ame ga furu)
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Yomg'ir yog'adi.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9">
              <AccordionTrigger className="text-blue-500 hover:underline">
                電車が出る (Densha ga deru)
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Poyezd chiqadi.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-10">
              <AccordionTrigger className="text-blue-500 hover:underline">
                火が消える (Hi ga kieru)
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Olov o'chadi.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
        <div className="border border-gray-300 bg-white text-gray-900 p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">
            <span className="text-blue-500">"他動詞" (tadōshi)</span>
          </h1>
          <p className="text-gray-600 mb-4">
            <span className="text-blue-500">"他動詞" (tadōshi)</span> esa boshqalarni harakatga keltiruvchi fe'llarni anglatadi, masalan, "ochmoq" yoki "qaytarish"
          </p>
          <Accordion type="single" collapsible className="space-y-2">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-blue-500 hover:underline">
                ドアを開ける (Doa o akeru)
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Eshikni ochmoq.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-blue-500 hover:underline">
                電気を消す (Denki o kesu)
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Chiroqni o'chirmoq.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-blue-500 hover:underline">
                花を植える (Hana o ueru)
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Gul ekmoq.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-blue-500 hover:underline">
                車を止める (Kuruma o tomeru)
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Mashinani to'xtatmoq.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-blue-500 hover:underline">
                時計を直す (Tokei o naosu)
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Soatni tuzatmoq.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-blue-500 hover:underline">
                水を凍らせる (Mizu o kooraseru)
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Suvni muzlatmoq.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger className="text-blue-500 hover:underline">
                音を聞く (Oto o kiku)
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Ovozni eshitmoq.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger className="text-blue-500 hover:underline">
                雨を降らせる (Ame o furaseru)
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Yomg'ir yog'dirmoq.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9">
              <AccordionTrigger className="text-blue-500 hover:underline">
                電車を出す (Densha o dasu)
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Poyezdni chiqarish.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-10">
              <AccordionTrigger className="text-blue-500 hover:underline">
                火を消す (Hi o kesu)
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Olovni o'chirmoq.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AccordionDemo;
