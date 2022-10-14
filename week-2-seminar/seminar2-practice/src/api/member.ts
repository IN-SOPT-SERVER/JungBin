import express, { Request, Response, Router } from "express";

// express 모듈에서 express, (request, response, router)-> 타입 정의를 위해 불러옴!
const router: Router = express.Router();

export default interface Member {
  name: string;
  group: string;
  menu: string;
}

export const members: Member[] = [
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
];

router.get("/", (req: Request, res: Response) => {
  return res.status(200).json({
    status: 200,
    message: "멤버 조회 성공",
    data: members,
  });
});

module.exports = router;
