import React, { useEffect, useState } from 'react';

export default function Products(){
    // const [count, setCount] = useState(0);
    const [products, setProducts] = useState([]);
    // 체크가 되어있는지 안되어 있는지(처음에는 체크가 되어있지 않은 상태로)
    const [checked, setChecked] = useState(false);
    // 함수를 호출하면 setChecked(이전값)를 반대로 토글링
    const handleChange = ()=> setChecked((prev) => !prev);

    useEffect(() => {
        fetch(`ata/${checked ? 'sale_' : ''}products.json`)
            .then((res) => res.json())
            .then((data) => {
                console.log('뜨끈한 데이터를 네트워크에서 받아옴');
                setProducts(data);
            });
        return ()=>{
            console.log('💨 깨끗하게 청소하는 일들을 합니다.')
        };
    }, [checked]);  // 체크가 변경될때마다 다시 실행되어야 한다.

    return (
        <>
            <input id='checkbox' type="checkbox" value={checked} onChange={handleChange} />
            <label htmlFor='checkbox'>Show Only 🔥 Sale</label>
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
        </>
    )
}
