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
  let [likes,updateLike] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [number, setNumber] = useState(0);
  let count = 1;
  // function upLike(){
  //   console.log(1)
  // } // onclick 하려면 함수를 만들어서 넣어야 함 

  // array/object 데이터 다룰 때 원본은 보존하는게 좋음
  return ( 
    <div className="App"> 
      <div className='black-nav'>
        <h4 style = {{color : 'blue'}}>블로그</h4>
      </div>
      {/* <div className = 'list'>
        <h4>{title[0]} <span onClick={()=>{
          updateLike(likes+1)
          
        }}>👍</span> {likes} <span onClick={()=>{
          let copy = [...title];
          copy[0] = '여자 코트 추천'
          updateTitle(copy);
        }}>change</span> <span onClick = {()=>{
          let copy = [...title];
          copy = copy.sort((a, b) => a.toLowerCase() < b.toLowerCase() ? -1 : 1);
          updateTitle(copy);
        }}>가나다순 정렬</span></h4>
        <p>2월 17일 발행</p>
      </div>
      <div className = 'list'>
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className = 'list'>
        <h4 onClick = {()=>{
          {
            count % 2 == 1 ? setModal(true) : setModal(false)
          }
          count += 1;
        }}>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {
        title.map(function(a, i){
          return(
            <div className = 'list' key = {i}>
              <h4 onClick = {()=>{
                {
                  count % 2 == 1 ? setModal(true) : setModal(false)
                }
                count += 1;
                setNumber(i);
              }}>{ title[i] }  <span onClick={()=>{
                let copy = [...likes];
                copy[i] += 1;
                updateLike(copy)
              }}>👍</span> {likes[i]} </h4>
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }
      
      {
        modal == true ? <Modal numberProp = {number} color = {'yellow'} titleProp={title}></Modal> : null //삼항연산자
      }
      
    </div>
  );
}

function Modal(props){
  return(
      <div className = "modal" style = {{background : props.color}}>
        <h4>{props.titleProp[props.numberProp]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button>글수정</button>
      </div>
  )
}

export default App;

// html 많아서 더러우면 모달컴포넌트로 줄일 수 있음
// 컴포넌트 만드는 법 작명은 대문자로 시작 국룰 
// 1. function만들고
// 2. return() 안에 html 담기
// 3. <함수명></함수명> 쓰기 
// 그럼 컴포넌트 왜 쓰는가?
// 반복적인 html 축약할 때 / 큰 페이지들 / 자주변경되는 것들
// 컴포넌트 단점 : state 가져다쓸 때 문제 생김


// 동적인 UI만드는 step
// 1. html css 로 미리 디자인 완성
// 2. UI의 현재 상태를 state로 저장
// 3. state에 따라 UI가 어떻게 보일지 작성

// 많은 div를 반복문으로 줄이려면 map 함수 사용
// [1,2,3].map(function(){})
