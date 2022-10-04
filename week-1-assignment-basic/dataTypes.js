// 원시 타입
// ES6부터 지원하는 Template literal ``
let myName = "정빈";
console.log(`${myName} 입니다.`);

// Symbol: 고유함, 변경 불가능한 원시 값
const sym1 = Symbol();
const sym2 = Symbol();
const sym3 = Symbol('foo');
const sym4 = Symbol('foo');

console.log(sym1 === sym1);  // true

console.log(sym1 === sym2);  // false => 고유하기 떄문...
console.log(sym3 === sym4);  // false => 고유하기 떄문...

// 객체 타입
// Object
const user = {
    email: "devmadilyn@gmail.com",
    name: "Jungbin Jung", 
    favorite: ["파스타", "회", "햄버거"],
    introduce: function() {
        console.log(`${this.name}입니다. ${this.favorite} 좋아`);
    },
    getFavoriteFoods: function() {
        this.favorite.forEach((food) => {
            console.log(`${food} 마싯서`);
        });
    },
};

// Array
const arr1 = ["Hi", 10, true];
const arr2 = Array(1, null, "우왕", false, { sopt: "Server" });

arr1.map((item) => console.log("item 1: ", item));
arr2.map((item) => console.log("item 2: ", item));