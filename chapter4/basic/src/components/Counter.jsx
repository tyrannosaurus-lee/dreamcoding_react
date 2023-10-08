import React, { useState } from 'react';

export default function Counter() {
    // let num = 0;
    // useState를 호출할때 원하는 초기값(0)을 지정하면 배열이 리턴되는데
    // 첫번째 인자는 상태값을 접근할 수 있는 변수(number)와
    // 그걸 업데이트 할 수 있는 함수(setNumber)
    // 2개가 전달됨
    const [count, setCount] = useState(0);
    // 함수가 계속 호출이 되어도 count가 0으로 초기화 되지 않는 이유는
    // useState라는 리액트에서 제공해주는 useState hook은
    // 해당 컴포넌트 내에서 아무리 다시 호출되어도 값을 기억하고 있기 때문에
    // 여러번 호출이 되어도 증가된 count값을 기억할 수 있음
    return (
        <div className='counter'>
            {/* <span className='number'>0</span> */}
            <span className='number'>{count}</span>
            <button className='button' onClick={()=> {
                setCount(count + 1);
                // 리액트에서는 ui와 밀접하게 관련있는 데이터는 state에 보관해줘야 함
                console.log(count);
            }}>Add +</button>
        </div>
    );
}