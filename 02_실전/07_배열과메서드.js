// let food = ["짜장면", "피자", "치킨"];
// const newLength = food.push("탕수육"); // returns new length of the array

// console.log(food);
// console.log(`새로운 배열의 길이: ${newLength}`);

// let a = 1;
// console.log(console.log(a));

// let food = ["짜장면", "피자", "치킨"];
// food.push("탕수육", "라자냐");
// let newLength = food.length;

// console.log(...food);
// console.log(`새로운 배열의 길이는 ${newLength} 입니다.`);

// let food = ["짜장면", "피자", "치킨"];

// const removedItem = food.pop();

// console.log(food);
// console.log(removedItem);

// let food = ["짜장면", "피자", "치킨"];
// const removedItem = food.shift();
// console.log(removedItem);
// console.log(food);

// let food = ["짜장면", "피자", "치킨"];
// const newLength = food.unshift("갈비찜");

// console.log(food);
// console.log(newLength);

//slice
//Array.slice(start, end);
// let arr = [1, 2, 3];
// let sliced = arr.slice(0, 2);

// console.log(sliced);

// let arr = [1, 2, 3];
// console.log(arr.slice(0, 0));
// console.log(arr.slice(0, 1));
// console.log(arr.slice(0, 2));

// let arrA = [1, 2];
// let arrB = [3, 4];
// let arrC = arrA.concat(arrB);

// console.log(arrC);

// let arrA = [1, 2];
// let arrB = { a: 1, b: 2 };
// let arrC = arrA.concat(arrB);
// console.log(...arrC);

// 순회메서드
// function cb(item, index, array) {
//   //요소에 무언가를 할 수 있습니다.
// }

// arr.forEach(cb);

// function cb(item, idx) {
//   console.log(`${idx}번째 요소: ${item}`);
// }

// const arr = [1, 2, 3];
// arr.forEach(cb);
// arr.indexOf(item, fromIndex);

// let arr = [1, 3, 5, 7, 1];

// console.log(arr.indexOf(1));
// console.log(arr.indexOf(1, -1));
// console.log(arr.indexOf(7, 9));
// console.log(arr.indexOf("3"));

// let arr = [1, 3, 5, 7, 1];

// console.log(arr.includes(3, 0));
// console.log(arr.includes("생선"));

// function datemine(item, idx, arr) {
//   console.log(item);
//   console.log(idx);
//   console.log(arr);
//   //   if (item % 2 === 0) {
//   //     return true;
//   //   } else {
//   //     return false;
//   //   }
// }

// let arr = [1, 3, 5, 6, 8];
// let index = arr.findIndex(datemine);

// console.log(index);

// let arr = [1, 3, 5, 6, 8];

// let index = arr.findIndex((item) => (item % 2 == 0 ? true : false));

// console.log(index);

// let arr = [
//   { name: "이종원" },
//   { name: "이정환" },
//   { name: "신다민" },
//   { name: "김효빈" },
// ];

// arr.findIndex((item) => {
//   console.log(item.name);
//   return item.name === "이정환";
// });

/////////////////////////////////   find   ///////////////////////////////
// let arr = [
//   { name: "이종원" },
//   { name: "이정환" },
//   { name: "신다민" },
//   { name: "김효빈" },
// ];

// let element = arr.find((item) => item.name === "이정환");
// console.log(element);
///////////////////////////////////////////////////////////////////////

////////////////////////////   filter   //////////////////////////////////
// let arr = [
//   { name: "이정환", hobby: "축구" },
//   { name: "신다민", hobby: "영화" },
//   { name: "김효빈", hobby: "축구" },
//   { name: "이종원", hobby: "노래" },
// ];

// let filtered = arr.filter((item) => item.hobby === "축구");
// console.log(filtered);
///////////////////////////////////////////////////////////////////////

// let arr = [1, 2, 3, 4];
// let newArr = arr.map((item) => item * 3);
// console.log(newArr);

// let arr = ["b", "a", "c"];
// arr.sort();
// console.log(arr);

//join
// let arr = ["안녕", "나는", "이정환"];
// console.log(arr.join());
// console.log(arr.join(" "));
// console.log(arr.join("-"));

//reduce
let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((acc, item) => acc + item, 0);
