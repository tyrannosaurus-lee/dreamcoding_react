import React from 'react';

// props : 외부로부터 주어진 props를 이용해서 텍스트를 보여줌
export default function Profile(props) {
    return (
        <div className='profile'>
            <img className='photo' src={props.image} alt='avatar' />
            <h1>{props.name}</h1>
            <p>{props.title}</p>
        </div>
    );
}