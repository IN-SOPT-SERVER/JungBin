// 여러 프로퍼티를 갖는 새로운 타입 정의, 변수/함수/클래스 모두 사용 가능
interface SOPT {
    name: string;
    age: number;
    isSOPT?: boolean; // 선택적 프로퍼티 (?)
};

const jungbinInfo: SOPT = {
    name: "정정빈",
    age: 20,
    isSOPT: true
};

const infos: SOPT[] = [
    {
        name: "정정빈",
        age: 20,
    },
    {
        name: "냠냠냠",
        age: 20,
        isSOPT: false
    },
    {
        name: "ㅎㅇㅎㅇ",
        age: 20,
        isSOPT: true
    }
];