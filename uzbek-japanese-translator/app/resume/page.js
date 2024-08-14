'use client'
import Navbar from '@/components/navbar'
import { Button } from '@/components/ui/button'
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaFilePdf } from "react-icons/fa6";
import Footer from '@/components/footer.jsx';


const features = [
  { name: 'Asosiy qismi', description: 'Asosiy qismda Surat va Tug`ilgan yilingiz haqida yozasiz. 1,2' },
  {
    name: 'Detallar',
    description:
      'O`zingidagi qo`shimcha konikma va bilimlarni shu yerga yozasiz. 3,4,5'
  }
]

export default function Example () {
  return (
    <div className='bg-white'>
      <Navbar />
      <div className='container mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 p-5'>
        <div className='flex flex-col lg:flex-row lg:gap-8'>
          <div className='flex-1'>
            <h2 className='text-cyan-400 p-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight flex items-center gap-2'>
              Resumeni yuklash <FaArrowRightLong />
              <Button className="bg-cyan-400">
                <a className='flex items-center' href='resume.pdf' download='resume.pdf'>
                  YUKLASH <FaFilePdf />
                </a>
              </Button>
            </h2>
            <p className='mt-4 text-gray-500 font-sans border p-2 border-cyan-400 m-2'>
              Yaponiyaga talaba bo'lib kelsangiz siz albatta <span className='text-cyan-400'><a href='https://studyinjapan.go.jp/en/work-in-japan/part-time-jobs/'>アルバイト</a></span> qilishni boshlaysiz. Bilingki Yaponiya qonunida 留学生 lar 1haftada 28 soat ishlash huquqiga ega. Sizni intervyu ga chaqirishganda albatta 履歴書 so'rashadi. Siz uni shu yerdan yuklab olib <span className='text-cyan-400'><a href='https://www.baitoru.com/tokai/'>コンビニ</a></span> da 20円 ga print qilib olsangiz bo'ladi.
            </p>

            <dl className='mt-8 sm:mt-12 lg:mt-16 p-3 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:gap-x-8'>
              {features.map(feature => (
                <div key={feature.name} className='border-t border-gray-200 pt-4'>
                  <dt className='font-medium text-gray-900'>{feature.name}</dt>
                  <dd className='mt-2 text-sm text-gray-500'>
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className='mt-8 lg:mt-0 lg:w-1/2 p-3'>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6'>
              <img
                alt='Walnut card tray with white powder coated steel divider and 3 punchout holes.'
                src='resume01.png'
                className='rounded-lg bg-gray-100 w-full h-auto object-cover'
              />
              <img
                alt='Top down view of walnut card tray with embedded magnets and card groove.'
                src='resume02.png'
                className='rounded-lg bg-gray-100 w-full h-auto object-cover'
              />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
