import React, { useState } from 'react';

export default function Counter({total, onClick}) {
    // 개별적으로 필요한 state가 있다면 내부 컴포넌트내에서 사용할 수 있다.
    const [count, setCount] = useState(0);
    return (
        <div className='counter'>
            <p className='number'>
                {count} <span className='total'>/{total}</span>
            </p>
            <button
                className='button'
                onClick={()=> {
                    setCount((prev)=> {
                        return prev + 1
                    });
                    onClick();
                }}
            >
                Add +
            </button>
        </div>
    );
}