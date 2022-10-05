import Dinner from "./interfaces/dinner";
import Member from "./interfaces/member";
/* 
도전 과제 조건
1. Member, Dinner interface 만들고 타입 지정하기
2. organize 내부 로직 채우기
*/

const dinner: Dinner = {
  members: [
    {
      name: "권세훈",
      group: "ob",
      menu: "떡볶이",
    },
    {
      name: "정정빈",
      group: "ob",
      menu: "소곱창",
    },
    {
      name: "홍길동",
      group: "yb",
      menu: "파스타",
    },
    {
      name: "장한빛",
      group: "yb",
      menu: "빛나는파인애플샤베트..",
    },
    {
      name: "백혜윤",
      group: "yb",
      menu: "하얀크림파스타",
    },
    {
      name: "이용택",
      group: "yb",
      menu: "용가리치킨",
    },
  ],
  shuffleMember(array) {
    array.sort(() => Math.random() - 0.5);
    return array;
  },
  getRandomMenu(menuArray) {
    menuArray.sort(() => Math.random() - 0.5);
    return menuArray[0];
  },
  organize(array) {
    const dinnerMember: Member[] = this.shuffleMember(array);

    const menuArray: string[] = dinnerMember.slice(0, 2).map(member => member.menu);
    const dinnerMenu: string = this.getRandomMenu(menuArray);

    console.log(`결과: ${dinnerMember[0].name}, ${dinnerMember[1].name} 둘이 오붓하게 먹기~ ^^\n 메뉴는 ${dinnerMenu} 맛있게 드세요 💯`);
  },
};

dinner.organize(dinner.members);