if (true) {
    var x = "var";
}
console.log(x); // 정상 출력됨; function scope

if (true) {
    let y = "let"
}
// console.log(y); // not defined, block scope

if (true) {
    const z = "const"
}
// console.log(z); // not defined, block scope

//* var가 function scope를 벗어났을 때
function func() {
    if (true) {
        var test = "var";
        console.log("test: ", test);
    }
    console.log("test: ", test);
}

func();
console.log("test: ", test); // 접근 ㄴㄴ