import React from 'react';
import swimming from '../../assets/swimming.png';
import classroom from '../../assets/class.png';
import playground from '../../assets/playground.png';

const Qzone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <p className="text-primary font-semibold mb-4">Q-Zone</p>
            <img src={swimming} alt="" className='mb-2'/>
            <img src={classroom} alt="" className='mb-2'/>
            <img src={playground} alt="" className='mb-2'/>
        </div>
    );
};

export default Qzone;