// let date = new Date();
// console.log(date);

// let jan01_1970 = new Date(0);
// console.log(jan01_1970);

// let jan02_1970 = new Date(24 * 60 * 60 * 1000);
// console.log(jan02_1970);

// let jan02_1970 = new Date(24 * 60 * 60 * 1000);
// console.log(jan02_1970.getTime());
// console.log(24 * 60 * 60 * 1000);

// let date = new Date();
// console.log(date.getTime());

// let date1 = new Date("2000-10-10/00:00:00");
// let date2 = new Date("2000.10.10/00:00:00");

// console.log(date1);
// console.log(date2);

// let date1 = new Date(2000, 13 - 1, 10, 0, 0, 0, 0);
// console.log(date1);

// let date = new Date(2000, 8 + 1, 10);
// let timeStamp = date.getTime();
// let dateClone = new Date(timeStamp);
// console.log(dateClone);

// let date = new Date(2000, 9, 10, 2);
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMilliseconds());

let date = new Date(2000, 9, 10);
date.setFullYear(2021);
date.setMonth(10);
date.setDate(11);
console.log(date);
