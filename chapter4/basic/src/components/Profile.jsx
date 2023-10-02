import React from 'react';
import Avatar from './Avatar';

// props : 외부로부터 주어진 props를 이용해서 텍스트를 보여줌
export default function Profile({ image, name, title, isNew }) {
    return (
        <div className='profile'>
            <Avatar image={image} isNew={isNew} />
            <h1>{name}</h1>
            <p>{title}</p>
        </div>
    );
}