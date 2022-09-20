
// 0. 대입연산자 : =
let k=10; //k라는 변수를 생성하고 데이터 10을 저장한다.
console.log("k의 값 : " + k);

// 1. 산술 연산자 : + - * / %
// 1-1. 문자연결 연산자 : +

let n1 = 10;
let n2 = 50;

console.log("덧셈 결과 : " + (n1+n2));
console.log("뺄셈 결과 : " + (n1-n2));
console.log("곱셈 결과 : " + (n1*n2));
console.log("나눗셈 결과 : " + (n1/n2));
console.log("나머지셈 결과 : " + (n1%n2));

// 2. 복합대입연산자 : += -= *=  /* %=

n1 +=100;
console.log("n1+=100의 결과 : " +n1);

n1 -=100;

console.log(`n1-=100의 결과 : ${n1}`)
n1 *=5;

console.log(`n1*=5의 결과 : ${n1}`)
n1 /=3;

console.log(`n1/=3의 결과 : ${n1}`)
n1 %=3;

console.log(`n1%=3의 결과 : ${n1}`)


// 3. 증감 연산자 : ++, --

let a = 10;
let b = 20;


console.log(`a : ${a} , b : ${b}`);
console.log(++a);
console.log(`a : ${a} , b : ${b}`);
console.log(a++);
console.log(`a : ${a} , b : ${b}`);
console.log(a=b++);
console.log(`a : ${a} , b : ${b}`);

// 4. 비교 연산자 : ==(값만 비교) , ===(완전히 같다 자료형비교) , !=
// 연산의 결과가 논리값을 반환

console.log(1=='1');
console.log(1==='1');
console.log(1>10);
console.log(1<1);
console.log(3>=2);
console.log(3<= 2);

// 5. 논리연산자 : and (&&), or(||) , not (!)
// 연산의 결과가 논리값을 반환
let bool1 = true;

let bool2 = false;

console.log(bool1 && bool2);
console.log(bool1 || bool2);
console.log(!bool1);


/// 6. 삼항 조건 연산자 : (조건 ? true : false)
n1>n2 ? console.log('n1이 더크다') : console.log('n2가 더 크다');

// 7. 우선순위 연산자 : ()
let j = 1 + '100';
console.log(j, typeof j);
console.log(Number(j), typeof Number(j));

let h = 1 + 100 * 4 / 2 ;
console.log('h의 결과값 : '+h)
h = (1 + 100) * 4 / 2 ;
console.log('h의 결과값 : '+h)
