import React, { useState } from 'react'
import SiginScreen from '../SiginScreen/SiginScreen'
import './Login.css'
function Login() {

    const [sigin, setSignIn] = useState(false)
    const [email,setEmail] = useState("")

    return (
        <div className='loginScreen'>
            <div className="loginScreen__background">
                <img className='loginScreen__logo' src={require('./netflix-logo.png')} alt="" />
                <button className='loginScreen__button' onClick={() => setSignIn(true)}>Sign in</button>
            </div>
            <div className="loginScreen__gradient" />
            <div className="loginScreen__body">
                {sigin ? (
                    <SiginScreen/>
                ) : (
                    <>
                        <h1>Unlimted films, TV programmes and more.</h1>
                        <h2>Watch anywhere. Cancel at anytime</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership</h3>

                        <div className="loginScreen__input">
                            <form >
                                <input type="email"  onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Email
                            Address'/>
                                <button onClick={() => setSignIn(true)} className='loginScreen__getStarted'>GET STARTED</button>
                            </form>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Login