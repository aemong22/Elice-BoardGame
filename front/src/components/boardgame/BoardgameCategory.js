import { useState, useEffect } from "react"
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

function BoardgameCategory({ open, setOpen, condition, setCondition }) {
    const [openPlayer, setOpenPlayer] = useState(false);
    const [openComplexity, setOpenComplexity] = useState(false);

    const playerChangeHandler = (checked, value) => {
      if (checked) {
        setCondition({ 
          "player": value,
          "age": "",
          "theme": "",
          "time": "",
          "complexity": "",
          "type": ""
        });
    }};

    const complexityChangeHandler = (checked, value) => {
      if (checked) {
        setCondition({ 
          "player": "",
          "age": "",
          "theme": "",
          "time": "",
          "complexity": value,
          "type": ""
        });
    }};
  
    return (
      <>
        <div className='theme-modal-container'>
            <section className='filters-panel'>
              <div className='filters-panel-button-close' onClick={()=> setOpen(!open) } style={{ display: 'flex', margin: '15px' }}>
                <CloseOutlinedIcon sx={{ marginLeft: 'auto' }} />
              </div>
              <div className='filters-panel-wrapper'>
                  <List sx={{ width: '100%', maxWidth: '260px', bgcolor: '#e2e2e2', py:'0' }}
                        component="nav"
                        aria-labelledby="nested-list-subheader">
                    {/* 인원수 */}
                    <ListItemButton onClick={() => { setOpenPlayer(!openPlayer) }}>
                      <ListItemText primary="인원수" />
                      {openPlayer ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openPlayer} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding sx={{ bgcolor: 'background.paper' }}>
                        {/* 2인 */}
                        <ListItemButton sx={{ height: '40px' }}>
                          <input type="checkbox" 
                            onChange={(e)=> playerChangeHandler(e.currentTarget.checked, '2')}
                            checked={condition?.player === '2' ? true : false} />
                          <ListItemText primary="2인" />
                        </ListItemButton>
                        {/* 3인 */}
                        <ListItemButton sx={{ height: '40px' }}>
                          <input type="checkbox" 
                            onChange={(e)=> playerChangeHandler(e.currentTarget.checked, '3')}
                            checked={condition?.player === '3' ? true : false} />
                          <ListItemText primary="3인" />
                        </ListItemButton>
                        {/* 4인 */}
                        <ListItemButton sx={{ height: '40px' }}>
                          <input type="checkbox" 
                            onChange={(e)=> playerChangeHandler(e.currentTarget.checked, '4')}
                            checked={condition?.player === '4' ? true : false} />
                          <ListItemText primary="4인" />
                        </ListItemButton>
                        {/* 5인 이상*/}
                        <ListItemButton sx={{ height: '40px' }}>
                          <input type="checkbox" 
                            onChange={(e)=> playerChangeHandler(e.currentTarget.checked, '5')}
                            checked={condition?.player === '5' ? true : false} />
                          <ListItemText primary="5인 이상" />
                        </ListItemButton>
                      </List>
                    </Collapse>

                    {/* 난이도 */}
                    <ListItemButton onClick={() => { setOpenComplexity(!openComplexity) }}>
                      <ListItemText primary="난이도" />
                      {openComplexity ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openComplexity} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding sx={{ bgcolor: 'background.paper' }}>
                        {/* 1 */}
                        <ListItemButton sx={{ height: '40px' }}>
                          <input type="checkbox" 
                            onChange={(e)=> complexityChangeHandler(e.currentTarget.checked, '1')}
                            checked={condition?.complexity === '1' ? true : false} />
                          <ListItemText primary="하" />
                        </ListItemButton>
                        {/* 2 */}
                        <ListItemButton sx={{ height: '40px' }}>
                          <input type="checkbox" 
                            onChange={(e)=> complexityChangeHandler(e.currentTarget.checked, '2')}
                            checked={condition?.complexity === '2' ? true : false} />
                          <ListItemText primary="중" />
                        </ListItemButton>
                        {/* 3 */}
                        <ListItemButton sx={{ height: '40px' }}>
                          <input type="checkbox" 
                            onChange={(e)=> complexityChangeHandler(e.currentTarget.checked, '3')}
                            checked={condition?.complexity === '3' ? true : false} />
                          <ListItemText primary="상" />
                        </ListItemButton>
                        {/* 4 */}
                        <ListItemButton sx={{ height: '40px' }}>
                          <input type="checkbox" 
                            onChange={(e)=> complexityChangeHandler(e.currentTarget.checked, '4')}
                            checked={condition?.complexity === '4' ? true : false} />
                          <ListItemText primary="최상" />
                        </ListItemButton>
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