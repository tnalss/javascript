"use strict";
// 숫자(Number)
let myName= "홍길동";
let yourName=new String("김길동");   //생성자
console.log(myName,yourName)

console.log(typeof myName, typeof yourName)

//문자열(Strings)
let myScore = 100;
let yourScore= new Number(70);
console.log(myScore,yourScore);
console.log(typeof myScore, typeof yourScore)

//배열(Arrays)
let myArr=[10,20,30];           //리터럴: []
let yourArr=new Array(10,20,300);
console.log(myArr,yourArr);
console.log(typeof myArr, typeof yourArr)

//객체
let myObj={                            //리터럴 : {} curly brace
    name: "최수민",
    gender: "남",
    liveIn:"서구"
}

let yourObj = new Object({ //생성자
    name: "홍길동",
    gender: "남성",
    born:"장성"
})

console.log(myObj.name, myObj['gender']);
console.log(yourObj.name, yourObj['born']);

let isOk=true;
let isNo=Boolean("false");

function myFunc(){ //메소드: 클래스(객체) 내부에 생성한 함수
    console.log('hello world');
}

