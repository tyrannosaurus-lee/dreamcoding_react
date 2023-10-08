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
            <span className='number'>{count}</span>
            <button
                className='button'
                onClick={()=> {
                    setCount((prev)=> {
                        return prev + 1
                    });
                    setCount((prev)=> prev + 1);
                    setCount((prev)=> prev + 1);
                    setCount((prev)=> prev + 1);
                    setCount((prev)=> prev + 1);
                }}
                // 함수가 전달될때 스냅샷됐을때
                // 내부에서 외부에 참조하고 있는게 아무것도 없음.
                // 그래서 setCount호출될때 이전상태값(prev)을 콜백인자로 전달받는데 리액트가 전달해줌
                // 결론 : 리액트에서 상태를 사용할때는 그냥 일반변수를 쓰면 안되고
                // 리액트에서 제공하는 useState를 써야함
                // 그래서 useState초기값을 설정해주고 useState를 호출하면 배열이 전달되는데
                // 배열의 첫번째는 값을 가리키고 있는 변수
                // 두번째는 이것을 업데이트 할 수 있는 변수이다.
                // 업데이트 하는 함수는 바로 우리가 값을 설정해서 setCount는 0, 1..이렇게 지정해도 되고
                // 여러번 지정해야하거나 이전 상태값을 토대로 더하거나 빼거나 이전 상태값을 업데이트하는 경우에는
                // 기존의 스냅샷된 외부값에 의존하기 보다는
                // 콜백함수 형태로 set하는것이 더 안전하다.
            >
                Add +
            </button>
        </div>
    );
}