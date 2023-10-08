import React, { useState } from 'react';

export default function Products(){
    const [count, setCount] = useState(0);
    const [products, setProducts] = useState([]);

    // 1. Products함수가 실행되면서 State를 초기화한 다음에 네트워크를 받아와서(fetch) 데이터를 받아오면
    // 2. setProducts를 이용해서 상태를 업데이트 함(useState)
    // 3. 상태가 변경된 컴포넌트의 함수(Products)를
    // 4. 리액트가 다시 호출한다. (import React, { useState } from 'react';)
    // 호출해서 useState는 리액트 자체적으로 값을 기억(useState(0))하고 있으니
    // 그대로 쓴다고 하더라도 함수가 다시 호출되니 fetch도 다시 호출되니까 데이터를 다시 받아와서 ....
    // 무한루프에 빠짐
    // 무한루프에 빠지지 않으려면 컴포넌트가 보여질때 딱 첫번째만 네트워크 통신을 통해서 데이터를 받아옴
    // 그 뒤로는 다시는 네트워크를 요청하지 않게 만들어야 함.
    fetch('data/products.json')
        .then((res) => res.json())
        .then((data) => {
            console.log('뜨끈한 데이터를 네트워크에서 받아옴');
            setProducts(data);
        });

    return (
        <>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <article>
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                        </article>
                    </li>
                ))}
            </ul>
            <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
        </>
    )
}
