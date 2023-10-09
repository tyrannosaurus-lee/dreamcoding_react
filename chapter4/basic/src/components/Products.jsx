import React, { useEffect, useState } from 'react';

export default function Products(){
    const [count, setCount] = useState(0);
    const [products, setProducts] = useState([]);

    {/*
    fetch('data/products.json')
        .then((res) => res.json())
        .then((data) => {
            console.log('뜨끈한 데이터를 네트워크에서 받아옴');
            setProducts(data);
        });
    */}

    // 컴포넌트가 표시될때 딱 한번만 호출되어야 하는 경우에는
    // useEffect의 첫번째 인자는 콜백함수를 전달하면 되고
    // 두번째 인자에는 defendency를 전달해야 함

    useEffect(() => {
        fetch('data/products.json')
            .then((res) => res.json())
            .then((data) => {
                console.log('뜨끈한 데이터를 네트워크에서 받아옴');
                setProducts(data);
            });
            // useEffect에서 함수를 호출했는데 컴포넌트가 없어질때 무언가 정리를 해야한다면
            // (메모리를 정리해야한다든지, Socket 네트워크 통신을 닫아야 한다든지)
            // 그럴땐 useEffect의 return함수를 전달해주면 됨
        return ()=>{
            console.log('💨 깨끗하게 청소하는 일들을 합니다.')
        }
    }, []);

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
