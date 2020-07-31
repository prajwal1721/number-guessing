import React from 'react';
export const ResponseBack = ({ color, direction, text }) =>
    (<div style={{ backgroundColor: color }}>{`${text} ${direction ? `On the ${direction} side !` : ' '}`}</div>)


