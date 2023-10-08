import React, {useState} from 'react';
import './App.css';
import Counter from './components/Counter';

export default function AppCounter(){
    // 컴포넌트들끼리 공통적으로 필요한 데이터는 제일 근접한 부모에 둔다.
    const [count, setCount] = useState(0);
    const handleClick = () => setCount(prev => prev + 1);
    return (
        <div className="container">
            <div className="banner">
                Total Count: {count} {count > 10 ? '🔥' : '❄'}
            </div>
            <div className="counters">
                <Counter total={count} onClick={handleClick} />
                <Counter total={count} onClick={handleClick} />
            </div>
        </div>
    );
}