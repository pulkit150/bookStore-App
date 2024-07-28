import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import { useForm } from "react-hook-form"


function Contact() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
    
  return (
    <>
        <div className='flex h-screen items-center justify-center dark:text-black '>
                <div className="w-[600px] ">
                    
                    <div className="modal-box">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to='/' className="btn btn-sm btn-circle btn-ghost text-xl absolute right-2 top-2">✕</Link>
                       
                        <h3 className="font-bold text-2xl">Contact Us</h3>
                        <div className='mt-4 space-y-2'>
                            <span >Name</span>
                            <br />
                            <input 
                            type="text" 
                            placeholder='Enter your Fullname' 
                            className='w-full h-8 px-3 border-[2px] rounded-md outline-none '
                            {...register("name", { required: true })} />
                            <br/>
                            {errors.name && (<span className='text-sm text-red-600'>This field is required</span>)}
                        </div>
                        <div className='mt-4 space-y-2'>
                            <span >Email</span>
                            <br />
                            <input 
                            type="email" 
                            placeholder='Enter your email'
                            className='w-full h-8 px-3 border-[2px] rounded-md outline-none ' 
                            {...register("email", { required: true })}/>
                            <br/>
                            {errors.email && (<span className='text-sm text-red-600'>This field is required</span>)}
                        </div>
                        {/* password */}
                        <div className='mt-4 space-y-2 '>
                            <span >Message</span>
                            <br />
                            <input 
                            type="text" 
                            placeholder='Type your message' 
                            className='w-full h-16 px-3 border-[2px] rounded-md outline-none '
                            {...register("text", { required: true })} />
                            <br/>
                            {errors.text && (<span className='text-sm text-red-600'>This field is required</span>)}
                        </div>
                        {/* Button */}
                        <div className='flex text-center items-center justify-around mt-4'>
                            <button className='bg-blue-600 rounded-md text-white px-5 py-2 hover:bg-blue-800 duration-200'>Submit</button>
                            
                        </div>
                        </form>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Contact
