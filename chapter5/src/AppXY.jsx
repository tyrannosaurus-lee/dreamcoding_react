import React, { useState } from 'react';
import './AppXY.css';

export default function AppXY() {
    // const [x, setX] = useState(0);
    // const [y, setY] = useState(0);
    // 연관있는 데이터라면 서로 밀접하게 연관있고 업데이트가 동시에 한번 일어나야 한다면
    // 객체로 묶어서 관리해주는것이 더 효율적
    const [position, setPosition] = useState({x:0, y:0});
    return (
        <div
            className='container'
            onPointerMove={(e)=>{
                // console.log(e.clientX, e.clientY);
                // setX(e.clientX);
                // setY(e.clientY);
                // setPosition({x: e.clientX, y:e.clientY});

                // Challenge) 수평만 가능한 버전?
                // 이전 좌표값을 받아서 객체를 리턴해줄때는 소괄호()로 묶어줘서 바로 반환할 수 있도록
                // 왜냐하면 객체를 나타내는 중괄호{}를 쓰면 이것이 코드블럭인지 객체를 나타내는건지 모르기때문
                // setPosition(prev => ({x: e.clientX, y: prev.y}));
                // 일일이 작성하기 번거로울땐 스프레드 연산자 이용하기
                // 스프레드를 이용하여 prev에 있는 키와 연산자를 다 그대로 복사해 올건데 그 중 x만 우리가 원하는 값으로 덮어 씌울것임
                setPosition(prev => ({...prev, x: e.clientX}));
            }}
        >
            <div
                className='pointer'
                // style={{transform: `translate(${x}px, ${y}px)`}}
                style={{transform: `translate(${position.x}px, ${position.y}px)`}}
            />
        </div>
    )
}