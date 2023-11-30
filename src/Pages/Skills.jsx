import React from 'react'
import data from '../data/skills'
const Skills = () => {
  return (
    <div name='skills' className='w-full text-[#ccd6f6] h-fit bg-[#0a192f]'>
      {/* container */}
      <div className='max-w-[1000px] mx-auto  p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-2 border-pink-300'>Skills</p>
          <p className='py-4'>These are the technologies I've worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          {data.map((e, key) => {
            return (
              <div key={key} className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-40 mx-auto' src={e.img} alt="html icon" />
                <p className='my-4'>{e.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Skills
