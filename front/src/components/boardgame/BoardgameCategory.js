import { useState } from "react"
import "./BoardgameCategory.css"

function BoardgameCategory() {
    const [openMenu, setOpenMenu] = useState(false)

    const toggleMenu = () => {
        setOpenMenu(openMenu => !openMenu)
    }
  
    return(
        <div className='boardgame-category-container'>
            <div className='boardgame-category-title'>
                <li onClick={ toggleMenu }>인원수</li>         
            </div>
            <div className={ openMenu ? 'show-menu' : 'hide-menu' }> 
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </div>
        </div>
    )
}

export default BoardgameCategory