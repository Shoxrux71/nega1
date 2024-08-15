'use client'
import Navbar from '@/components/navbar'
import React from 'react'
import { FaArrowRightLong, FaFilePdf } from "react-icons/fa6";
import Footer from '@/components/Footer';

const features = [
  { name: 'Asosiy qismi', description: 'Asosiy qismda Surat va Tug`ilgan yilingiz haqida yozasiz. 1,2' },
  {
    name: 'Detallar',
    description:
      'O`zingidagi qo`shimcha konikma va bilimlarni shu yerga yozasiz. 3,4,5'
  }
];

export default function Example () {
  return (
    <div className='bg-white min-h-screen flex flex-col'>
      <Navbar />
      <div className='container mx-auto px-4 py-8 sm:px-6 lg:px-8 flex-grow'>
        <div className='flex flex-col lg:flex-row lg:gap-8'>
          {/* Left Section */}
          <div className='flex-1'>
          <div className='flex justify-between'>
          <h2 className='text-cyan-400 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight flex items-center gap-2 mb-4'>
              Resumeni yuklash 
              <FaArrowRightLong className="text-cyan-400" />
            </h2>
            <button className="bg-cyan-400 text-white px-4 py-2 rounded-lg hover:bg-cyan-500 transition-colors duration-200">
              <a className='flex items-center gap-2' href='resume.pdf' download='resume.pdf'>
                YUKLASH <FaFilePdf />
              </a>
            </button>
          </div>
            <p className='mt-4 text-gray-500 font-sans border p-4 border-cyan-400 rounded-lg'>
              Yaponiyaga talaba bo'lib kelsangiz siz albatta <span className='text-cyan-400 hover:underline'><a href='https://studyinjapan.go.jp/en/work-in-japan/part-time-jobs/'>アルバイト</a></span> qilishni boshlaysiz. Bilingki Yaponiya qonunida 留学生 lar 1haftada 28 soat ishlash huquqiga ega. Sizni intervyuga chaqirishganda albatta 履歴書 so'rashadi. Siz uni shu yerdan yuklab olib <span className='text-cyan-400 hover:underline'><a href='https://www.baitoru.com/tokai/'>コンビニ</a></span> da 20円 ga print qilib olsangiz bo'ladi.
            </p>

            <dl className='mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6'>
              {features.map(feature => (
                <div key={feature.name} className='border-t border-gray-300 pt-4'>
                  <dt className='font-medium text-gray-900'>{feature.name}</dt>
                  <dd className='mt-2 text-sm text-gray-500'>{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          
          {/* Right Section */}
          <div className='mt-8 lg:mt-0 lg:w-1/2'>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
              <img
                alt='Resume image 1'
                src='resume01.png'
                className='rounded-lg bg-gray-100 w-full h-auto object-cover'
              />
              <img
                alt='Resume image 2'
                src='resume02.png'
                className='rounded-lg bg-gray-100 w-full h-auto object-cover'
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
