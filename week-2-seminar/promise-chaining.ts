// const me = (callback: () => void, time: number) => {
//   setTimeout(callback, time);
// };

// // 기상
// const wakeUp = (): Promise<string> => {
//   // 함수에 타입 지정함
//   return new Promise((resolve, reject) => {
//     me(() => {
//       console.log("[현재] 일어남");
//       resolve("일어남");
//     }, 1000);
//   });
// };

// // 화장실 감
// const goBathRoom = (now: string): Promise<string> => {
//   return new Promise((resolve, reject) => {
//     me(() => {
//       console.log("[현재] 화장실로 이동함");
//       resolve(`${now} -> 화장실로 이동함`);
//     }, 1000);
//   });
// };

// // 칫솔, 치약 준비
// const ready = (now: string): Promise<string> => {
//   return new Promise((resolve, reject) => {
//     me(() => {
//       console.log("[현재] 칫솔과 치약을 준비함");
//       resolve(`${now} -> 칫솔과 치약을 준비함`);
//     }, 1000);
//   });
// };

// // 양치
// const startChikaChika = (now: string): Promise<string> => {
//   return new Promise((resolve, reject) => {
//     me(() => {
//       console.log("[현재] 양치함");
//       resolve(`${now} -> 양치함`);
//     }, 1000);
//   });
// };

// // 나 자신에게 칭찬
// const goodJob = (now: string): Promise<string> => {
//   return new Promise((resolve, reject) => {
//     me(() => {
//       console.log("[현재] 나 자신에게 칭찬중");
//       resolve(`${now} -> 칭찬중`);
//     }, 1000);
//   });
// };

// wakeUp() // resolved된 데이터들이 그 다음 프로미스로 넘어감~!
//   .then((now) => goBathRoom(now))
//   .then((now) => ready(now))
//   .then((now) => startChikaChika(now))
//   .then((now) => goodJob(now))
//   .then((now) => console.log(`\n${now}`));
