import React from 'react';

const Loading = () => {
    return (
        <div className='text-center'>
            <span className="loading loading-infinity loading-xl text-accent"></span>
            <span className="loading loading-infinity loading-xl text-info"></span>
            <span className="loading loading-infinity loading-xl text-warning"></span>
        </div>
    );
};

export default Loading;