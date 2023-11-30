import React from 'react'
import data from '../data/edu'

const Education = () => {
  return (
    <div name='education' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Education
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 my-5'>
            {
              data.map((e, key)=>{
                return (
                  <a key={key} className="flex flex-col cursor-pointer items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{e.board}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{e.sc}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{e.year}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
              </div>
            </a>
                )
              })
            }

          </div>
        </div>
      </div>
    </div>
  )
}

export default Education