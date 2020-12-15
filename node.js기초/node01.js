
// 기본 객체 선언 테스트 
'user strict'

const obj ={
    title: 'node.js 시작'
}
//1 . 기본적인 조건문을 사용한 로직 
function isEmptyObj () {
    if (obj.title){
        console.log(obj.title);
        return true;
    }else {
        return false 
    }
}
isEmptyObj();

// 2. 삼항연산자를 사용한 로직 리팩토링 
const isEmptyObj  = () => obj.title ? true : false


// # I/O 와 프로그래밍 패러다임 
/* 
    1.I/O , 비동기 동기 , Non-blocking vs blocking 
      왜 node.JS를 만들었는가?? 
      일반적인 웹 어플리 케이션 서버  아파치 /톰캣 
      blocking 네트워크 요청이 이루어지는 과정에서 
      해당하는 요청이 완료되기 전까지 다음 단계로 가지를 못한다. 
      (쓰레드 문제, 동시성 이슈 )
    
    2. 동기와 비동기란?? 
        동기화란? 요청한 컴퓨터와 요청을 처리하는 컴퓨터 두 사이의 과정이 동일할 때까지
        기다려야한다.   
        Nodejs는 비동기

    3. blocking vs Non-blocking
        쓰레드 방식으로 응답이 완료될 때 까지 기다리여야 하거나 
        이벤트 방식인 자바스크립트로 응답이 완료되지 않아도 된다. 
    
    */

