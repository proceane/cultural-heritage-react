import { database } from "../firebase";

// 데이터 관련 로직

// 리스트(페이징)
// export const getList = (lc, ct, current_page) => {
//   return database.ref("data/" + lc + "/" + ct)
//   .startAt(current_page)
//   .limitToLast(5)
//   .once("value").then((sn) => {
//     return sn.val();
//   });  
// };

export async function getList(lc, ct) {
  const sn = await database.ref("data/" + lc + "/" + ct)
  .limitToFirst(10)
  .once("value");
  return sn.val();
};

// 상세
export async function getDetail(lc, ct, cd) {
  const sn = await database.ref("data/" + lc + "/" + ct + "/" + cd).once("value");
  return sn.val();
}

export async function getDetailName(lc, ct, cd) {
  const sn = await database.ref("data/" + lc + "/" + ct + "/" + cd + "/ccbamnm1").once("value");
  return sn.val();
}

// 댓글 등록
export function setComment(lc, ct, cd, email, comment) {
  
  // const sn = database.ref("data/comment/" + lc + "/" + ct + "/" + cd).once('value');

  const len = 1;

  const commentData = {
    "email": email,
    "comment": comment,
    "date": new Date().toLocaleString(),
  };
  database.ref("data/comment/" + lc + "/" + ct + "/" + cd + "/" + len).set(commentData);
  
}

// 댓글 조회
export async function getDetailComment(lc, ct, cd) {
  const sn = await database.ref("data/comment/" + lc + "/" + ct + "/" + cd).once("value");
  return sn.val();
}