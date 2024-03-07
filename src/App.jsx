import React, { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageHome from './pages/home/page-home'
import PageUser from './pages/userpage/page-user'
import Navbar from './components/Navbar'

function App() {
    const [currentForm, setCurrentForm] = useState('login')
    return (
        <div className='App'>
            {
                currentForm === "login" ? <Login /> : <Register />
            }
        </div>
        
        <>
            <Navbar />
            <BrowserRouter basename="">

                <Routes>
                    < Route path="" element={<PageHome />} />
                    < Route path="/user" element={<PageUser />} />
                </Routes>

            </BrowserRouter>
        </>
    )
}

export default App
