//1. 함수 선언

//1) 선언적 함수
function f01(){
    alert('f01 called...');
};

//2) 익명 함수

// var x = function(){
//     alert('익명함수 called...');
// } // < 변수에 담아서 이렇게도 쓰기는 하지만...

const btn01 = document.querySelector('#btn01');
btn01.addEventListener('click', function(){
    alert('익명함수 called...');
}); // x 함수를 실행x, 전달o 이므로 x에 () 안 붙임!
// 함수 자체로 전달!!

// 3) 자동실행 함수
(
    function(){
        console.log('자동실행 함 수 ~');;
    }()
);

// 4) 화살표 함수 (arrow function)
// input => logic,
// 입력값을 가지고 중괄호 블럭을 실행해주면 됨
btn01.addEventListener('click', ()=>{
    alert('화살표 함수 called...');
});
