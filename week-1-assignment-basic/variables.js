// var 를 사용해보자! => 권장 안 해~!
var myName = "정빈 정";
console.log(`${myName} is wrong name`);

myName = "정정빈";
console.log(`My name is ${myName}`);

// let 을 사용해보자! => 권장해~!
let part = "Server";
part = "Serverrrrrrrrrrrrrrr!"; // 재할당 가능

console.log(`Let's go ${part}`);

// const를 사용해 보자! => 권장해~!
const school = "SOPT";
school = "STOP"; // error, 재할당 불가능
console.log(`school ${part}`);