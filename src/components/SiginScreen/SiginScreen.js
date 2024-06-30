import React, { useState } from 'react'
import './SigninScreen.css'
import { auth } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import SignupScreen from '../SignupScreen/SignupScreen'

function SiginScreen() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [signUp, setSignUp] = useState(false)


    const signIn = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("successFully SignIn");
            setPassword('')
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='signinScreen'>
            {!signUp ? (<form>
                <h1>Sign In</h1>
                <input type="email" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                <input type="password" value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                <button type='submit' onClick={signIn}>Sign In</button>
                <p><span className='signupScreen__gray'>New to Netflix ?</span><span className='signupScreen__link' onClick={() => setSignUp(true)}>SignUp Now</span></p>
            </form>) : (<SignupScreen />)}
        </div>
    )
}

export default SiginScreen