import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//* 컨트롤러가 받은 요청에 맞게 DB에서 데이터를 꺼내와 돌려줌
//* 유저 생성
const createUser = async (name: string, email: string, age: number) => {
  const data = await prisma.user.create({
    data: {
      // 필드명만 맞추면 됨. 순서 상관 X
      userName: name, // 수동으로 넣기...
      email,
      age
    },
  });

  return data;
};

//* 유저 전체 조회
const getAllUser = async () => {
  const data = await prisma.user.findMany();
  return data;
};

//* 유저 정보 업데이트
const updateUser = async (userId: number, name: string) => {
  const data = await prisma.user.update( {
    // update는 where 사용해서 필터 걸어줌
    where: {
      id: userId
    },
    data: {
      userName: name
    }
  })
};

//* 유저 삭제
const deleteUser = async (userId: number) => {

  // response 없이 함
  await prisma.user.delete({
    where: {
      id: userId,
    }
  })
};

//* userId로 유저 조회
const getUserById = async (userId: number) => {
  // findUnique -> where라는 쿼리를 사용해 조건(필터)을 걸어서 사용
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  return user;
};

const userService = {
  createUser,
  getAllUser,
  updateUser,
  deleteUser,
  getUserById,
};

export default userService;
