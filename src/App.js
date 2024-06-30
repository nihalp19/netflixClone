import './App.css'
import Login from "./components/Login/Login";
import Links from './components/Routers/Links';
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { BrowserRouter } from "react-router-dom";


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, userAuth => {
      if (userAuth) {
        console.log(userAuth);
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      }
      else {
        dispatch(logout())
      }
    })
    return unsubscribe;
  },[dispatch])

  return (
    <div className="App">
      {
        !user ? (<Login />) : (
          <BrowserRouter>
            <Links/>
          </BrowserRouter>
        )
      }
    </div>
  );
}

export default App;
