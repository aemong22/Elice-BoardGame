import { useState } from "react"
import { categoryData, categoryName, categoryValue } from "./BoardgameCategoryData"
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CheckIcon from '@mui/icons-material/Check';
import ToggleButton from '@mui/material/ToggleButton';

function BoardgameCategory({ condition, initializeCondition, changeCondition, changeOpen }) {
  const [openPlayer, setOpenPlayer] = useState(false);
  const [openAge, setOpenAge] = useState(false);
  const [openComplexity, setOpenComplexity] = useState(false);
  const [openDomain, setOpenDomain] = useState(false);
  const [openPlaytime, setOpenPlaytime] = useState(false);

  const openCategoryHandler = (category) => {
    switch (category) {
      case "player" : return setOpenPlayer(!openPlayer);
      case "age" : return setOpenAge(!openAge);
      case "complexity" : return setOpenComplexity(!openComplexity);
      case "theme" : return setOpenDomain(!openDomain);
      case "time" : return setOpenPlaytime(!openPlaytime);
    }
  }

  const getCategoryStateHandler = (category) => {
    switch (category) {
      case "player" : return openPlayer;
      case "age" : return openAge;
      case "complexity" : return openComplexity;
      case "theme" : return openDomain;
      case "time" : return openPlaytime;
    }
  }

  return (
    <>
      <div className='theme-modal-container'>
        <section className='filters-panel'>
          <div className='filters-panel-button-close' onClick={changeOpen} style={{ display: 'flex', margin: '15px' }}>
            <CloseOutlinedIcon sx={{ marginLeft: 'auto' }} />
          </div>
          <div className='filters-panel-wrapper'>
            <List 
              sx={{ width: '100%', maxWidth: '260px', bgcolor: '#e2e2e2', py:'0', flex: 'display', flexDirection: 'column' }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <ListItemButton onClick={()=> initializeCondition()}>
                <ListItemText primary="최신 보드게임 보기" />
              </ListItemButton>
              {
                Object.keys(categoryData).map((category) => (
                  <div>
                  <ListItemButton onClick={() => openCategoryHandler(category)}>
                    <ListItemText primary={categoryName(category)} />
                    {getCategoryStateHandler(category) ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={getCategoryStateHandler(category)} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding sx={{ bgcolor: 'background.paper' }}>
                      {
                        Object.keys(categoryData[category]).map((data) => (
                          <ListItemButton sx={{ height: '40px' }}>
                            <ToggleButton
                              sx={{ width: "25px", height: "25px", borderRadius: "50px", marginRight: "10px" }}
                              value="check"
                              selected={condition?.category === category && condition?.val1 === data}
                              onChange={() => {
                                changeCondition("category", category)
                                changeCondition("val1", data)}}
                            >
                              <CheckIcon sx={{ width: '10px', height: '10px' }}/>
                            </ToggleButton>
                            <ListItemText primary={categoryValue(category, data)} />
                          </ListItemButton>
                        ))
                      }
                    </List>
                  </Collapse>
                  </div>
                ))
              }
            </List>
          </div>
        </section>
      </div>
    </>
  )
}

export default BoardgameCategory