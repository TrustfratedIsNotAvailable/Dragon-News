import React from 'react';
import { NavLink } from 'react-router';
import user from "../../assets/user.png";

const Navbar = () => {
    return (
        <div className='flex items-center justify-between'>
            <div className=''></div>
            <div className='flex gap-3 text-accent'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/career'}>Career</NavLink>
            </div>
            <div className='flex gap-2'>
                <img src={user} alt="" />
                <button className='btn w-[100px] btn-primary'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;