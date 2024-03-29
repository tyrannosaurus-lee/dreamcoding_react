import './App.css';
import Avatar from './components/Avatar';
import Profile from './components/Profile';

function AppProfile() {
    const handleClick = (event) => {
        console.log(event);
        alert("버튼이 클릭됨!");
    }
    return (
        <>
            <button onClick={handleClick}>버튼</button>
            <form onSubmit="">
                <input type="text" />
            </form>
            <Avatar
                image='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-'
                isNew={true}
            />
            <Profile
                image='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-'
                name='James Kim'
                title='프론트엔드 개발자'
                isNew={true}
            />
            <Profile
                image='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80'
                name='Anna Young'
                title='백엔드 개발자'
            />
            <Profile
                image='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'
                name='Bob Yu'
                title='프론트엔드 개발자'
            />
        </>
    );
}

// 항상 function을 만들면 react에서 사용할 수 있도록 export해줘야함
export default AppProfile;