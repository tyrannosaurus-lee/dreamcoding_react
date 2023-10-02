import React from 'react';

// props : 외부로부터 주어진 props를 이용해서 텍스트를 보여줌
export default function Profile({image, name, title}) {
    return (
        <div className='profile'>
            <img className='photo' src={image} alt='avatar' />
            <h1>{name}</h1>
            <p>{title}</p>
        </div>
    );
}