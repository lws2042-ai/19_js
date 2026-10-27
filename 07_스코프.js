// let a = 1;

// function foo() {
//   console.log(a);
// }

// function bar() {
//   console.loga);
// }

// foo();
// bar();
// console.log(a);

// function foo() {
//   console.log("foo");
// }

// function bar() {
//   foo();
//   console.log("bar");
// }

// bar();

// function foo() {
//   console.log("foo");

//   function bar() {
//     console.log("bar");
//   }
//   bar();
// }

// foo();
// if (true) {
//   function foo() {
//     console.log("foo");
//   }
// }

// foo();

for (let i = 1; i < 10; i++) {
  function bar() {
    console.log("bar");
  }
}
bar();
