import React from 'react';
import { Link } from 'react-router-dom';

export const OtherPage = () => {
    return (
        <div>
            Hello Fibonacci!{" "}
            <Link to='/'>Main</Link>
        </div>
    );
}

export default OtherPage;
