import { useState, useEffect } from "react"
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

function BoardgameCategory({ condition, initializeCondition, changeCondition, changeOpen }) {
    const [openPlayer, setOpenPlayer] = useState(false);
    const [openAge, setOpenAge] = useState(false);
    const [openComplexity, setOpenComplexity] = useState(false);
    const [openDomain, setOpenDomain] = useState(false);
    const [openPlaytime, setOpenPlaytime] = useState(false);

    const player = ["2", "3", "4", "5"];
    const age = ["9", "12", "15", "19"];
    const complexity = ["1", "2", "3", "4"];
    const theme = ["Strategy Games", "Thematic Games", "Wargames", "Family Games", "Customizable Games", "Abstract Games", "Party Games"];
    const time = ["30", "60", "120"];

    return (
      <>
        <div className='theme-modal-container'>
            <section className='filters-panel'>
              <div className='filters-panel-button-close' onClick={changeOpen} style={{ display: 'flex', margin: '15px' }}>
                <CloseOutlinedIcon sx={{ marginLeft: 'auto' }} />
              </div>
              <div className='filters-panel-wrapper'>
                  <List sx={{ width: '100%', maxWidth: '260px', bgcolor: '#e2e2e2', py:'0' }}
                        component="nav"
                        aria-labelledby="nested-list-subheader">

                    <ListItemButton onClick={initializeCondition}>
                      <ListItemText primary="최신 보드게임 보기" />
                    </ListItemButton>
                    <ListItemButton onClick={() => { setOpenPlayer(!openPlayer) }}>
                      <ListItemText primary="게임 인원" />
                      {openPlayer ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openPlayer} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding sx={{ bgcolor: 'background.paper' }}>
                        {
                          player.map((data)=> (
                            <ListItemButton sx={{ height: '40px' }}>
                              <input type="checkbox" 
                                onChange={()=> {
                                  changeCondition("category", "player")
                                  changeCondition("val1", data)}}
                                checked={condition?.category === "player" && condition?.val1 === data} />
                              <ListItemText primary={data} />
                            </ListItemButton>
                          ))
                        }
                      </List>
                    </Collapse>

                    <ListItemButton onClick={() => { setOpenComplexity(!openComplexity) }}>
                      <ListItemText primary="게임 난이도" />
                      {openComplexity ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openComplexity} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding sx={{ bgcolor: 'background.paper' }}>
                        {
                          complexity.map((data)=> (
                            <ListItemButton sx={{ height: '40px' }}>
                              <input type="checkbox" 
                                onChange={()=> {
                                  changeCondition("category", "complexity")
                                  changeCondition("val1", data)}}
                                checked={condition?.category === "complexity" && condition?.val1 === data} />
                              <ListItemText primary={data} />
                            </ListItemButton>
                          ))
                        }
                      </List>
                    </Collapse>

                    <ListItemButton onClick={() => { setOpenAge(!openAge) }}>
                      <ListItemText primary="게임 연령" />
                      {openAge ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openAge} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding sx={{ bgcolor: 'background.paper' }}>
                        {
                          age.map((data)=> (
                            <ListItemButton sx={{ height: '40px' }}>
                              <input type="checkbox" 
                                onChange={()=> {
                                  changeCondition("category", "age")
                                  changeCondition("val1", data)}}
                                checked={condition?.val1 === data} />
                              <ListItemText primary={data} />
                            </ListItemButton>
                          ))
                        }
                      </List>
                    </Collapse>

                    <ListItemButton onClick={() => { setOpenDomain(!openDomain) }}>
                      <ListItemText primary="테마" />
                      {openDomain ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openDomain} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding sx={{ bgcolor: 'background.paper' }}>
                        {
                          theme.map((data)=> (
                            <ListItemButton sx={{ height: '40px' }}>
                              <input type="checkbox" 
                                onChange={()=> {
                                  changeCondition("category", "theme")
                                  changeCondition("val1", data)}}
                                checked={condition?.val1 === data} />
                              <ListItemText primary={data} />
                            </ListItemButton>
                          ))
                        }
                      </List>
                    </Collapse>

                    <ListItemButton onClick={() => { setOpenPlaytime(!openPlaytime) }}>
                      <ListItemText primary="게임 시간" />
                      {openPlaytime ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openPlaytime} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding sx={{ bgcolor: 'background.paper' }}>
                        {
                          time.map((data)=> (
                            <ListItemButton sx={{ height: '40px' }}>
                              <input type="checkbox" 
                                onChange={()=> {
                                  changeCondition("category", "time")
                                  changeCondition("val1", data)}}
                                checked={condition?.val1 === data} />
                              <ListItemText primary={data} />
                            </ListItemButton>
                          ))
                        }
                      </List>
                    </Collapse>

                  </List>
              </div>
            </section>
        </div>
      </>
    )
}

export default BoardgameCategory