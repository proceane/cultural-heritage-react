import { database } from "../firebase";

// 데이터 관련 로직

// 리스트(페이징)
export function getList(lc, ct) {
  database.ref("data/" + lc + "/" + ct).once("value", (sn) => {
    console.log(sn.val());
    return sn.val();
  });  
};

// 상세
export function getDetail(lc, ct, cd) {
  database.ref("data/" + lc + "/" + ct + "/" + cd).once("value", (sn) => {
    return sn.val();
  });  
}