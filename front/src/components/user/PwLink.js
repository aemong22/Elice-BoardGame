import { useState } from "react";
import { useParams } from "react-router-dom";
import * as Api from "../../api";

function PwLink() {
  const { userId } = useParams();
  const [pw, setPw] = useState("");
  console.log(userId);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const reset = await Api.put(`user/${userId}`, {
        password: pw,
      });
      if (reset.data.status === "Success") {
        alert("비밀번호 변경 성공");
        // 로그인 페이지로 이동함.
      } else {
        alert("비밀번호 변경 실패");
      }
    } catch (err) {
      alert("비밀번호 변경 실패");
      console.log("실패이유", err);
    }
  };

  return (
    <>
      <div>비밀번호 찾기 사이트</div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={pw} onChange={(e) => setPw(e.target.value)} />
        <button type="submit">변경</button>
      </form>
    </>
  );
}

export default PwLink;
