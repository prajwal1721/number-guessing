import React from 'react';
import './info.scss';
export const Info = ({ fact = 1 }) => (
    <div>
        <div className='Head'>Scale</div>
        <div className='info'>
            <div className='part2' style={{ backgroundColor: 'green' }}>
                Correct
            </div>
            <div className='part2' style={{ backgroundColor: 'red' }}>
                Hot
            </div>
            <div className='part2' style={{ backgroundColor: 'yellow' }}>
                Warm
            </div>
            <div className='part2' style={{ backgroundColor: 'cyan' }}>
                Cold
            </div>
        </div>
        <div className='part2'>
            <div  >
               
            </div>
            <div  >
                {1*fact}
            </div>
            <div  >
                {4*fact}
            </div>
            <div  >
                {15*fact}
            </div>
        </div>
        <div className='info-more'>
            <div className='text'>
                {`On the low side it means number to be guessed is higher than current number`}
            </div>
            <div className='text'>
                {`On the higher side it means number to be guessed is lower than current number`}
            </div>
        </div>
    </div>
)