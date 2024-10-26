import React from 'react'
import Cards from './Cards'
import list from '../list.json'
import { Link } from 'react-router-dom'
const Course = () => {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4' >
    <div className='mt-28 items-center justify-center text-center' >
        <h1 className='text-2xl md:text-4xl' >We're delighted to have you <span className='text-pink-500' >here!</span> :)</h1>
        <p className='mt-12' >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae omnis maxime ea dolorem unde, animi veniam quidem nisi assumenda obcaecati minus sit ut temporibus, ipsum iste deleniti soluta molestias aspernatur, velit non expedita quam. Fugit eius excepturi corporis nam eligendi!
        </p>
        <Link to="/">
        <button className='bg-pink-500 mt-6 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300' >Back</button>
        </Link>
    </div>
    <div className='mt-12 grid grid-cols-1 md:grid-cols-4' >
      {
        list.map((item)=>(
          <Cards key={item.id} item={item}/>
        ))
      }
    </div>
    </div>
    </>
  )
}

export default Course
