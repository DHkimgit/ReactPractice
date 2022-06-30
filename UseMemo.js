import React, {useState, useMemo, useEffect} from 'react'

// 컴포넌트 안에 있는 객체 타입의 변수는 리액트에 의해 컴포넌트가 재 렌더링 될 때마다 새로운 주소가 부여된다.
// 재 랜더링 전과 후가 사실상 다른 객체라는 뜻이다. 따라서 useEffect에 location을 넣어도 number 값이 변경되면
// 컴포넌트가 재 랜러링 되면서 location 변수의 country 객체까지 다시 생성 되므로 useEffect의 콜백함수가 실행된다.
// 이를 방지하기 위해서 useMemo를 사용한다.
// useMemo를 사용해서 객체를 생성하면 객체가 매모리 안에 저장 되므로 컴포넌트가 다시 랜더링 되도 
// useMemo의 DependencyList에 적힌 것의 state가 변하지 않는 이상 객체가 다시 생성 되지 않는다.

const App = () => {
    const [number, setNumber] = useState(0);
    const [iskorea, setIskorea] = useState(true);

    const location = useMemo(() => {
        return {
            country: iskorea ? "한국" : "외국"
        }
    }, [iskorea]);

    useEffect(() => {
        console.log('useEffect 호출')
    }, [location]);

    return (
        <div>
            <input
                value={number}
                type="number"
                onChange={(e) => setNumber(e.target.value)}
            />
            <br />
            <h2>{location.country}</h2>
            <button onClick={setIskorea(!iskorea)}>비행기</button>
        </div>
    )

}
export default App;