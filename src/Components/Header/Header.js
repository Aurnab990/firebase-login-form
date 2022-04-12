import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/firebase';
import './Header.css';

const Header = () => {
    const {user} = useFirebase();
    
    return (
        <div className='header'>
            <nav>
                <Link to="/">Home</Link> 
                <Link to="/register">Register</Link>
                
                <span>{user?.displayName && user.displayName}</span>
                {
                 user.uid?
                 <button>signout</button>
                 :
                <Link to="/login">Login</Link>
                }
            </nav>

        </div>
    );
};

export default Header;