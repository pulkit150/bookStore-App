import React from 'react'
import Navbar from '../components/Navbar'
import Course from '../components/Course'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

function Courses() {
    return (
        <>
            <Navbar />
            <div className='min-h-screen'>
                <Contact/>
            </div>
            <Footer />

        </>
    )
}

export default Courses