import BoardgameCategory from "./BoardgameCategory"
import BoardgameCard from "./BoardgameCard"
import "./Boardgame.css"

function Boardgame() {
    return (
        <>
            <div className='boardgame-container'>
                <div className='boardgame-category'>
                    <BoardgameCategory></BoardgameCategory>
                </div>
                <div className='boardgame-wrapper'>
                    <div className='boardgame-sort'>
                        <div className='boardgame-filterd'>인원수</div>
                        <div className='boardgame-sort-items'>
                            <li>랭킹순</li>
                            <li>리뷰순</li>
                            <li>평점순</li>
                        </div>
                    </div>
                    <div className='boardgames'>
                        <BoardgameCard></BoardgameCard>
                        <BoardgameCard></BoardgameCard>
                        <BoardgameCard></BoardgameCard>
                        <BoardgameCard></BoardgameCard>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Boardgame