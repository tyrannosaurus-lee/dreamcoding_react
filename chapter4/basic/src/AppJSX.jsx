// import logo from './logo.svg';
import './App.css';

// 함수이름은 무조건 대문자
function AppJSX() {
  const name = 'tyranno';
  const list = ['우유', '딸기', '바나나'];
  return (
    <> {/*꼭 하나의 태그를 반환해야함 */}
    {/* javascript 문법을 사용할때는 항상 중괄호를 사용해야 한다. */}
      <h1 className='orange'>{`Hello! ${name}`}</h1>
      <h2>Hello!</h2>
      <p>name</p>
      <p>{ name }</p> {/* 태그상에서 name 변수를 접근하려면 꼭 {}를 사용해야한다. */}
      <ul>
        {/*
        <li>우유</li>
        <li>딸기</li>
        <li>바나나</li>
         */}
        {/*
          list.map((item) => {
            // 중괄호를 쓰면 return을 명시해 준다.
            return <li>{item}</li>;
          })
        */}
        {/*
          list.map(function(item){
            return <li>{item}</li>
          })
        */ }
        {
          list.map((item) => (
            return <li>{item}</li>;
          ))
        }

      </ul>
      <img
        style={{ width:'300px', height: '500px'}} // javascript 에서도 object 문법을 이용해서 객체의 값을 작성함
        src='https://plus.unsplash.com/premium_photo-1672986896021-cf725eba8ba3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
        alt='macarons'
      />
    </>
    /*
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    */
  );
}

export default AppJSX;
