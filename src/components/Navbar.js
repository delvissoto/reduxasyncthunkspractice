import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <section>
        <nav className='navbar'>
            <ul className='navbarul'>
                <li className='navli'><Link to="/" className='links'>Home</Link></li>
                <li className='navli'><Link className='links'>User</Link></li>
                <li className='navli'><Link to="/post" className='links'>Post</Link></li>
              
            </ul>
        </nav>
    </section>
  )
}

export default Navbar