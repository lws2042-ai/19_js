// let numA = 1;
// let numB;
// let numC;

// numB = numC = numA;
// console.log(numA, numB, numC);

// console.log(1 + 2 * 10);

// let number = 10;

// number += 10;
// console.log(number);

// number -= 10;
// console.log(number);

// number /= 10;
// console.log(number);

// number *= 10;
// console.log(number);

// number %= 10;
// console.log(number);

// 증감연산자
// let a = 1;
// console.log(a++);
// console.log(++a);

// let b = 1;
// console.log(b--);
// console.log(--b);

// 논리연산자
// let boolA = true;
// let boolB = false;

// console.log(boolA || boolB);
// console.log(boolA && boolB);

// 비교연산자
// let numberA = 2;
// let numberB = 2;
// let numberC = "2";

// console.log(numberA === numberB);
// console.log(numberB === numberC);

// console.log(numberA > numberB);
// console.log(numberA >= numberB);

// null 병합 연산자
// let varA = 10;
// let varB = 20;
// let varC;

// console.log(varA ?? varB); // varA가 true이면 varA, false 이면 varB
// console.log(varC ?? varB);
// for i in Range(1, 100):
// print("Fizz" * 1 % 2 == 0 * "Buzz" * i % 3 == 0 or i)

//삼항 조건 연산자
// const varA = "안녕하세요";
// // 조건식 ? 참일 때 명령 수행 : 거짓일때 명령 수행
// typeof varA === "number"
//   ? console.log("문자자료형")
//   : console.log("문자 자료형이 아님");

let num = 1;
let result = num % 2 === 0 ? "짝수" : "홀수";

console.log(result);
