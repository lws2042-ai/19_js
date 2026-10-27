"use strict";
// 객체 생성과 프로퍼티

// let objA = {}
// let objB = new Object();

// let person = {
//   name: "이정환",
//   age: 25,
//   age: 30,
// };

// console.log(person);

// let person = {
//   name: "이정환",
//   age: 25,
//   "like cat": true,
// };

// const personName = person.name;
// const personAge = person.age;
// const personLikeCat = person["like cat"];

// console.log(personName);
// console.log(personAge);
// console.log(personLikeCat);

// 프로퍼티 추가
// let person = {
//   name: "이정환",
//   age: 25,
//   "like cat": true,
// };
// person.gender = "male";
// person["nickname"] = "winderlood";

// console.log(person);

// // 프로퍼티 수정
// let cat = {
//   name: "치삼이",
//   age: 4,
// };
// console.log(cat.name);
// cat.name = "치삼";
// console.log(cat.name);

// 객체 프로퍼티 삭제
// let cat = {
//   name: "치삼이",
//   age: 4,
// };
// delete cat.name;
// delete cat["age"];
// console.log(cat);

// const obj = {
//   a: 1,
//   b: "text",
// };

// console.log(obj);
// obj.a = 2;
// obj.c = 3;
// console.log(obj);

// in연산자
// let obj = {
//   a: 1,
// };

// let isPropertyExist = obj.b !== undefined;
// console.log(isPropertyExist);

// let person = {
//   age: 10,
// };

// let isNmaeExist = "name" in person;
// console.log(isNmaeExist);

// 메서드
let person = {
  name: "이정환",
  sayHi: function () {
    console.log("안녕"); // () => `안녕`;
  },
};

console.log(person.sayHi());
