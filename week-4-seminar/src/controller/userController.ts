import { Request, Response } from "express";
import { emit } from "process";
import { userService } from "../service";

//* 유저 생성(회원가입)
const createUser = async (req: Request, res: Response) => {
  const { userName, email, age } = req.body // 비구조화 할당, request body에 필드가 많은 경우
  
  if (!userName || !email || !age) {
    return res.status(400).json({ status: 400, message: "유저 생성 실패, 필요한 값이 업습니다." });
  }
  //! 비즈니스 로직은 userService에서 작성!
  const data = await userService.createUser(userName, email, age);

  // 데이터가 비어있는지, 잘 왔는지, null인지 체크
  // (!data) => 데이터 없을 때
  if (!data) {
    return res.status(400).json({ status: 400, message: "유저 생성 실패" });
  }

  return res.status(200).json({ status: 200, message: "유저 생성 성공", data });
};

//* 유저 전체 조회
const getAllUser = async (req: Request, res: Response) => {
  const data = await userService.getAllUser();
  return res.status(200).json({ status: 200, message: "유저 전체 조회 성공", data });
};

//* 유저 정보 업데이트
const updateUser = async (req: Request, res: Response) => {
  const { name } = req.body;
  const { userId } = req.params;
  if (!name) return res.status(400).json({ status: 400, message: "유저 업데이트 실패" });

  const updatedUser = await userService.updateUser(+userId, name);
  return res.status(200).json({ status: 200, message: "유저 업데이트 성공", name });
};

//* 유저 삭제
const deleteUser = async (req: Request, res: Response) => {
  const { userId } = req.params;

  await userService.deleteUser(Number(userId));
  return res.status(200).json({ status: 200, message: "유저 삭제 성공", userId });

};

//* 특정 유저 조회
const getUserById = async (req: Request, res: Response) => {
  const { userId } = req.params;

  // +userID => + 연산자가 앞에 붙어있으면 무조건 string으로 들어오는 값을 number로 바꿔줌. Number(userId)와 동일.
  const data = await userService.getUserById(+userId);

  if (!data) {
    return res.status(404).json({ status: 404, message: "해당 유저가 없습니다." });
  }
  return res.status(200).json({ status: 200, message: "유저 조회 성공", data });
};

const userController = {
  createUser,
  getAllUser,
  updateUser,
  deleteUser,
  getUserById
};

export default userController;
