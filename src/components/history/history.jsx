import React from 'react';
import './history.scss';
export const History = ({ arr }) => (
    <div className='historycss'>
        <div className='divText'>
        Your inputs
        </div>
        <div  className='his'>
            {arr.length ? arr.map((n) => `${n} <- \n`) : ''}
        </div>
    </div>
);


