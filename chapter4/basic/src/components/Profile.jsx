import React from 'react';

export default function Profile() {
    return (
        <div className='profile'>
            <img
                className='photo'
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-"
                alt="avatar"
            />
            <h1>James Kim</h1>
            <p>프론트엔드 개발자</p>
        </div>
    )
}