/* eslint-disable*/
// 워닝 메시지 없애는 코드
import './App.css';
import { useState } from 'react';

// jsx 문법 class 넣을 때 className 으로 넣어줘야 함
// jsx 문법 변수 넣을 땐 {변수명} 으로 넣을 수 있음 -> 데이터바인딩이라고 함
// style 넣을 땐 style = { }

// 잠깐 자료 저장할 땐 변수로
// 중요한건 state
// state 언제 쓰는데?
// 일반변수는 갑자기 변경되면 html 에 자동반영 안됨
// state는 변경되면 자동으로 html이 재렌더링됨
// 그러면 좀 변경자주되는 그런 애들은 state 쓰면 되겄네


function App() {

  let post = '강남 우동 맛집';
  let [title,updateTitle] = useState(['남자 코트 추천','강남 우동맛집','파이썬독학']);
  let [likes,updateLike] = useState(0);

  // function upLike(){
  //   console.log(1)
  // } // onclick 하려면 함수를 만들어서 넣어야 함 

  return ( 
    <div className="App"> 
      <div className='black-nav'>
        <h4 style = {{color : 'blue'}}>블로그</h4>
      </div>
      <div className = 'list'>
        <h4>{title[0]} <span onClick={()=>{
          updateLike(likes+1)
        }}>👍</span> {likes} <span onClick={()=>{
          updateTitle(['여자 코트 추천','강남 우동맛집','파이썬독학'])
        }}>change</span></h4>
        <p>2월 17일 발행</p>
      </div>
      <div className = 'list'>
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className = 'list'>
        <h4>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <h4>{post}</h4>
    </div>
  );
}

export default App;
