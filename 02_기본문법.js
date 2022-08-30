//1. 변수와 자료형

// 전역 변수 선언
x = "전역변수";

// 함수 외부에 선언한 변수는 var 키워드가 붙어도 전역변수
var x2 = "전역변수2 근데 이제 var를 붙인"; // 함수 안 쪽에 있는게 아니므로 여전히 전역변수 '전역변수 '

 
// 함수 이름 없이 익명 함수 만들 수 있음.
// 앞으로는 준비 되었을 때 동작하게 만들기 위해서 == 함수 안에다가 
// **** 페이지가 모두 로드되면 ,실행되는 함수 *****(윗 줄 주석은 설명 내가 적음)
// 함수 내부에서, var 키워드로 변수 선언 시 지역변수.
window.onload = function(){
    var x = '지역변수x';
    var y = '지역변수y';
    var z;

    console.log(x);
    console.log(window.x); // 전역변수로 출력하고 싶으면 > window.~
    console.log(window.x2);
    console.log(x2); // 지역 전역 중복되지 않으면 window 안 써도 잘 출력 됨.
    console.log(y);
    console.log(z);

    console.log(typeof(z)); // undefined 타입으로 콘솔창에 잘 출력 됨 >> typeof이용하면 콘솔창에서 타입이 뭔지 알려줌

    console.log('-----------------------------------------------');

    // var[= (자스에서 젤 어렵)], let [= 우리가 일반적으로 생각하는 변수] , const [= final과 같은 역할]
    /* 정리
        var   : 재선언O  재할당O
        let   : 재선언X  재할당O 
        const : 재선언X  재할당X <- 가장권장!
    */

    // 1) 중복 선언
    // var temp = 10;
    // console.log(temp);

    // var temp = 20;
    // console.log(temp);

    // let temp =10;
    // console.log(temp);

    // let temp =10;
    // console.log(temp);

    // const temp = 10;
    // console.log(temp);

    // const temp = 10;
    // console.log(temp);

    // 2) 재할당

    //var temp = 10;
    // let temp = 10;
    // const temp = 10;
    // temp = 20;
    // console.log(temp);

    // 3) 스코프 (= 유효한 범위)

    // 함수 안에서 var로 선언된 변수는, "함수 유효 범위" 를 가짐.
    if(true){
        var s = 10;
        console.log(s);
    }

    console.log(s);


    console.log('------------------------------------------------------');

    // 함수 안에서 let const 로 선언된 변수는 "블록 유효 범위"
    if(true){
        const s2 = 10;
        console.log(s2);
    }

    console.log(s2);


}//onload
