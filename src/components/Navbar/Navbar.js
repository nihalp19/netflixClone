import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    const [show, handleShow] = useState(false)

    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            handleShow(true)
        }
        else {
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar);
        return () => window.addEventListener("scroll", transitionNavbar);
    }, [])

    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className="nav__contents">
                <Link to='/'>
                    <img className='nav__logo' src={require("./netflix-logo.png")} alt="" />
                </Link>
                <Link to='/profile'><img className='nav__avatar'
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkNKkHkvunLiA1LMhR-GIbh4wZCO-9jUMQPg&s" alt="" />
                </Link>
            </div>

        </div>
    )
}

export default Navbar