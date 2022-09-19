
// var, let, const
//let 변수
//const 상수
"use strict" //modern javascript
let a = 5;  //number
console.log('a의자료형 : '+ typeof a)

let b = 5.0; //number.........Number() : casting Method
console.log("b의자료형 : "+ typeof b)

let c = "test"; //string ... String(): casting method
console.log(`c의자료형 : ${typeof c}`) //template literal 문법

let d = 't';    //문자열은 큰따옴표나 작은따옴표
let e = false;
let f = null;
let g; //Undefined 변수는 선언했지만 값을 대입 할당하지 않은 상태
console.log(`g의자료형 : ${typeof g}`);

let h = [1,2,3]; //Array .......Array() method

let i = {
    name :'seon',
    job:'tutor'
}

let j = function(){ // function
    console.log('hello javascript world!');
}
//일반적인 자바스크립트 타입 --> es2015 (es6) 추가된 Sybo(), class 도 있음 이거 쓰려면 use strict 써야함
k=100;
console.log(typeof k)