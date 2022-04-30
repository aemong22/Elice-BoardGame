import { useState } from "react";
import { useParams } from "react-router-dom";
import * as Api from "../../api";

function PwLink() {
  const { rtoken } = useParams();
  const [pw, setPw] = useState("");
  console.log(rtoken);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const reset = await Api.post(`user/reset_password`, {
        resetToken: rtoken,
        password: pw,
      });
      alert("비밀번호 변경 성공");
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
