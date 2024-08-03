import React from 'react'
import Home from './home/Home'
import Courses from './courses/Courses'
import Signup from './components/Signup'
import Contact from './components/Contact'
import Contacts from './contact/Contacts'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'

const App = () => {
  const [authUser, setAuthUser] = useAuth()
  console.log(authUser)

  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={authUser?<Courses/>:<Navigate to="/signup"/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/contact" element={<Contacts/>}/>
    </Routes>
    <Toaster/>
    </div>
    </>
  )
}

export default App
