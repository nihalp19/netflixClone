import React from 'react'
import './SingupScreen.css'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { auth } from '../../firebase'
function SignupScreen() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const register = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            console.log("successFully register");
            setEmail('')
        }catch(err)
        {
            console.log(err);
        }

    }


    return (
        <div className='signupScreen'>
            <form>
                <h1>Sign Up</h1>
                <input type="email" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                <input type="password" value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                <button type='submit' onClick={register}>Sign Up</button>
                <p ><span className='signupScreen__gray'>New to Netflix ?</span><span className='signupScreen__link' onClick={register}>Sign in now</span></p>
            </form>
        </div>
    )


}

export default SignupScreen