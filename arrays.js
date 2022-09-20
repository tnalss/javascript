// 배열 연산자 : Array

// 변수 vs 배열 : 값을 1개만 저장 vs 여러개의 값을 저장

// 변수
let k = 10; //변수
const j  = 100; //상수
console.log(k);

k=50; //재할당
console.log(k);

//j는 재할당이 불가능!


// 배열 선언 : 리터럴, 생성자
// 배열[인덱스] : 0부터 배열길이값 n-1 까지의 배열 인덱스(= 주소,번지)를 갖는다
// 배열에 포함되는 데이터 타입 : all 모든 타입
let arr1 = [1, 10, '100' , '광주',null];
console.log(arr1);
arr1[2]='백';
console.log(arr1);


const arr2 = new Array('1',null,100,50,'A');
console.log(arr2);
arr2[2]=10;
console.log(arr2);

//const로 선언한 배열의 원소값은 변경이 가능하다!!


//배열명. 메소드나 프로퍼티명이 자동추천 됨
// pop(), push('원소') 배열의 마지막 원소를 제거 , 마지막 위치에 원소를 추가
// shift(), unshift('원소') 배열의 처음 원소를 제거, 추가
// length() : 배열의 길이 반환
// sort(), reverse() :  정렬, 역정렬

console.log("arr2의 길이 : " +arr2.length);
const arr3=['가' , '나',' 다']
console.log(arr2.concat('/'));
console.log(arr2.concat(arr3));
console.log(arr2);


console.log(arr2.join(' / '));

console.log(arr2.pop()); // 마지막원소 날림
console.log(arr2);
console.log(arr2.push('g'));
console.log(arr2);

console.log(arr2.shift()); //첫번째원소 pop
console.log(arr2);

console.log(arr2.unshift('홍'));
console.log(arr2);


let myStr='가나다라마바사아자차카타파하';
console.log(myStr[0]);
console.log(myStr.charAt(3));
