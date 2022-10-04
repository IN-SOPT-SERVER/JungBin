// 함수 선언식 (호이스팅의 영향 O), 정의되기 전에 호출 가능
function sum(a, b) {
    return a + b;
}

// 함수 표현식(호이스팅의 영향 X), 해당 함수까지 실행되어야 호출 가능
const sum = (a, b) => {
    return a + b;
};

// 로직 한 줄인 경우 return 생략 가능
// 파라미터 하나인 경우 소괄호 생략 가능
const add = (a, b) => a + b;
const hello = name => console.log(`${name}, hello!`);
const info = (name, age) => ({name, age});