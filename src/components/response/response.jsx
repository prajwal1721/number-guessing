
import React from 'react';
import './response.scss';
export const ResponseBack = ({ color = 'black', direction='START', text="LET'S" }) =>
        <div className={` response`} style={{ backgroundColor: color }}>
            <div className='data' style={{ backgroundColor: color }}>{`${text.toUpperCase()}`}</div>
            <br/>
            <div className='data' style={{ backgroundColor: color }}>
                {`${direction!=='START' ? `On the ${direction} side !` : 'START' }`}
                </div>
        </div>
 


