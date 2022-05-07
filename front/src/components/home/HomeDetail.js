import "./HomeDetail.css";

function HomeDetail() {
    return (
        <>
            <div id="detail_wrapper_top">
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <div className="detail_title">보드게임 메이트 찾기</div>
                    <div className="detail_subtitle">
                        Boardmon에서 보드게임 메이트를 구해보세요.
                    </div>
                </div>
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
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <div className="detail_title">500여종의 보드게임</div>
                    <div className="detail_subtitle">
                        최신게임부터 띵작까지 원하는 테마별로
                    </div>
                </div>
            </div>
            <div id="detail_wrapper_bottom">
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <div className="detail_title">원하는 인원 수로</div>
                    <div className="detail_subtitle">
                        다양한 카테고리를 보고 싶다면 아래를 눌러보세요!
                    </div>
                </div>
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
