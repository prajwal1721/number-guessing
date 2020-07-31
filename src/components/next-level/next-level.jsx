import React from 'react';
import { Link } from 'react-router-dom';
export const Next = ({ max }) => (
    <div>
        <Link to={`/game${parseInt(max) + 100}`}>Next Level</Link>
        <Link to={`/`}>End</Link>
    </div>
)


// this is not working