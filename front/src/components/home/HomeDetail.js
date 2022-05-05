import "./HomeDetail.css";

function HomeDetail() {
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
            <div id="detail_wrapper_bottom">
                <div className="detail_title">이젠 뭘 적어야 하나</div>
                <img
                    alt="보드게임 가족끼리"
                    src="/image/detail_visual3.png"
                    style={{ width: "45%" }}
                />
            </div>
        </>
    );
}

export default HomeDetail;
