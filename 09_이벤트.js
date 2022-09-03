const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');

const d1 = document.querySelector('#d1');
const d2 = document.querySelector('#d2');
const d3 = document.querySelector('#d3');

btn1.onclick = function(){
    alert('고전~~~');
}

btn1.onclick = function(){
    alert('고전~~~22222222');
}

btn1.onclick = null;

// addEventListener 로 하면 여러 개의 이벤트 핸들러 추가 가능!
btn3.addEventListener('click', function(){
    alert('표준@@@@');
});

btn3.addEventListener('click', function(e){
    console.log(e);
    console.log(e.target);
    console.log(e.currentTarget);

});

// 이벤드가 발생한 요소에 접근
// .addEventListener(이벤트 종류, 함수, 이벤트 설정) << 3가지 파라미터 전달 가능
// {capture:true} << 방향이 반대로
d1.addEventListener('click', function(e){
    console.log("d1~~~");
    // console.log(e.target);
    // console.log(e.currentTarget);
    // e.stopPropagation();
}, {capture:true});

d2.addEventListener('click', function(e){
    console.log("d2!!!");
    // console.log(e.target);
    // console.log(e.currentTarget);
    // e.stopPropagation();

});

d3.addEventListener('click', function(e){
    console.log("d3@@@");
    // 콘솔창과 같이 보기 :: target 과 currentTarget 차이 알 수 있음.
    // console.log(e.target); 
    // console.log(e.currentTarget);
    //e.stopPropagation();// 더 이상 전파하지 않음(부모에게 전달하지 않음)
    // e.stopPropagation();

}, {capture:true});

