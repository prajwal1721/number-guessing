import  React from 'react';
export const History =({arr})=>(
    <div>
        {arr.length?arr.map((n)=>`${n} `):'Start'}
    </div>
);


