import express, { Request, Response, Router } from "express";
import Member, { members } from "./member";
// express 모듈에서 express, (request, response, router)-> 타입 정의를 위해 불러옴!
const router: Router = express.Router();

interface Blog {
  user: Member[];
  url: string;
}

const blogs: Blog[] = [
  {
    user: members,
    url: "https://zdkfajsldf.com"
  },
  {
    user: members,
    url: "https://maver.com"
  },
];

router.get("/", (req: Request, res: Response) => {
  return res.status(200).json({
    status: 200,
    message: "유저 조회 성공",
    data: blogs
  });
});

module.exports = router;