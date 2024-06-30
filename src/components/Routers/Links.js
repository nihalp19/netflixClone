import React from 'react'
import HomeScreen from '../HomeScreen/HomeScreen'
import ProfileScreen from '../ProfileScreen/ProfileScreen'
import SignupScreen from '../SignupScreen/SignupScreen'
import Login from '../Login/Login'
import { Routes,Route } from 'react-router-dom'
function Links() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<ProfileScreen/>} />
                <Route path="/signup" element={<SignupScreen />} />
            </Routes>
        </div>
    )
}

export default Links