import React from 'react'
import list from '../../public/list.json'
import Cards from './Cards'
import {Link} from 'react-router-dom'

function Course() {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <div className='mt-[68px] items-center justify-center text-center'>
                    <h1 className='text-2xl md:text-4xl '>We're delighted to have you <span className='text-pink-500 font-semibold'>Here! :)</span></h1>
                    <p className='mt-12'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit recusandae eius cum accusantium magnam. Libero, ullam voluptas placeat tempore officiis, saepe repellendus corporis corrupti incidunt suscipit odio deleniti possimus quis!</p>
                    <Link to="/">
                    <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6'>Back</button>
                    </Link>
                </div>
                <div className='mt-12 grid grid-cols-1 md:grid-cols-4 '>
                    {
                        list.map((item)=>(
                            <Cards key={item.id} item ={item}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Course
