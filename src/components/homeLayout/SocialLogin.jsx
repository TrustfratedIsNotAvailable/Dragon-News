import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <p className='text-primary font-semibold mb-4'>Login With</p>
            <button className='btn btn-secondary btn-outline w-full mb-2'><FcGoogle size={24}/>Login With Google</button>
            <button className='btn btn-primary btn-outline w-full'><FaGithub size={24}/>Login With Github</button>
        </div>
    );
};

export default SocialLogin;