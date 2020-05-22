import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo} from '../../assets/crown.svg'
export default function Header() {
    return (
        <div class='header'>
            <Link to='/' className='logo-container'><Logo className='logo'></Logo> </Link>
            <div className="options">
                <Link className='option' to='/shop' > shop</Link>
                <Link className='option' to='/contact' > contact</Link>
            </div>
        </div>
    )
}
