import { database } from "../firebase";

// 데이터 관련 로직

// 리스트(페이징)
export const getList = (lc, ct, current_page) => {
  return database.ref("data/" + lc + "/" + ct)
  .startAt(current_page)
  .limitToLast(5)
  .once("value").then((sn) => {
    return sn.val();
  });  
};

// 상세
export function getDetail(lc, ct, cd) {
  database.ref("data/" + lc + "/" + ct + "/" + cd).once("value", (sn) => {
    return sn.val();
  });  
}