import React from 'react';
import { useParams } from 'react-router';

function User() {
        const {userid} = useParams()
    return (
        <div className='text-center bg-gray-400 text-white text-3xl p-2'>User : {userid}</div>
    );
}

export default User;