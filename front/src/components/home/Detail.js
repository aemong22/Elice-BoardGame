import "./Detail.css";

const Detail = () => {
  return (
    <>
      <div id="detail_wrapper_top">
        <div className="detail_title">원하는 인원수로</div>
        <img
          alt="친구끼리 보드게임"
          src="/image/detail_visual.png"
          style={{ width: "30%" }}
        />
      </div>
      <div id="detail_wrapper_middle">
        <img
          alt="보드게임 선택"
          src="/image/detail_visual2.png"
          style={{ width: "40%" }}
        />
        <div className="detail_title">400여종의 보드게임</div>
      </div>
    </>
  );
};

export default Detail;
