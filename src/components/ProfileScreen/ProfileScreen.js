import React from 'react'
import Navbar from '../Navbar/Navbar'
import './ProfileScreen.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'

function ProfileScreen() {

  const user = useSelector(selectUser)

  const Signout =  async () => {
    try{
        await signOut(auth)
        console.log("successFully signout");
    }catch(err)
    {
        alert(err.message)
    }
  }

  return (
    <div className='profileScreen'>
        <Navbar/>
        <div className='profileScreen__body'>
            <h1>Edit Profile</h1>
            <div className="profile__info">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkNKkHkvunLiA1LMhR-GIbh4wZCO-9jUMQPg&s" alt="" />
                <div className="profileScreen__details">
                    <h2>{user.email}</h2>
                    <div className="profileScreen__plans">
                        <h3>Plans</h3>
                        <button className='profileScreen__signOut' onClick={Signout}>Sign out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen