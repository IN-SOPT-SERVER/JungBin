let numbers: number[] = [1, 2, 3];

const strings: Array<string> = ["hi", "hello", "bye"];

// Object: 자바스크립트 객체와 완전히 동일
const objArray1: Object[] = [
    { item1: "oh" },
    { item2: "wow" }
];
const foo2 = (something: Object): void => {
    console.log(something);
}

// object: ts에서 추가된 객체 타입, 원시 타입이 아닌 타입(number, string, boolean, bigint, symbol, null, 또는 undefined 가 아닌 나머지)
const objArray2: object[] = [
    { item1: "oh" },
    { item2: "wow" }
];
const foo1 = (something: object): void => {
    console.log(something); // error
};

