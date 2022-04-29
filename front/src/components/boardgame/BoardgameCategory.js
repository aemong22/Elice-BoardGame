import { useState, useEffect } from "react"
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

function BoardgameCategory({ condition, setCondition }) {
    const [openPlayers, setOpenPlayers] = useState(false);

    const changeHandler = (checked, id) => {
      if (checked) {
        setCondition({ 
          "player": id,
          "age": "",
          "theme": "",
          "time": "",
          "complexity": "",
          "type": ""
        });
      } 
    };
  
    return (
      <>
        <div className='theme-modal-container'>
            <section className='filters-panel'>
              <button className='filters-panel-button-close'>X</button>
              <div className='filters-panel-wrapper'>
                  <List sx={{ width: '100%', maxWidth: '260px', bgcolor: '#e2e2e2', py:'0' }}
                        component="nav"
                        aria-labelledby="nested-list-subheader">
                    {/* 인원수 */}
                    <ListItemButton onClick={() => { setOpenPlayers(!openPlayers) }}>
                      <ListItemText primary="인원수" />
                    </ListItemButton>
                    <Collapse in={openPlayers} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding sx={{ bgcolor: 'background.paper' }}>
                        {/* 2인 */}
                        <ListItemButton sx={{ height: '40px' }}>
                          <input id='2' type="checkbox" 
                            onChange={(e)=> changeHandler(e.currentTarget.checked, '2')}
                            checked={condition?.player === '2' ? true : false} />
                          <ListItemText primary="2인" />
                        </ListItemButton>
                        {/* 3인 */}
                        <ListItemButton sx={{ height: '40px' }}>
                          <input id='3' type="checkbox" 
                            onChange={(e)=> changeHandler(e.currentTarget.checked, '3')}
                            checked={condition?.player === '3' ? true : false} />
                          <ListItemText primary="3인" />
                        </ListItemButton>
                        {/* 4인 */}
                        <ListItemButton sx={{ height: '40px' }}>
                          <input id='4' type="checkbox" 
                            onChange={(e)=> changeHandler(e.currentTarget.checked, '4')}
                            checked={condition?.player === '4' ? true : false} />
                          <ListItemText primary="4인" />
                        </ListItemButton>
                        {/* 5인 이상*/}
                        <ListItemButton sx={{ height: '40px' }}>
                          <input id='5' type="checkbox" 
                            onChange={(e)=> changeHandler(e.currentTarget.checked, '5')}
                            checked={condition?.player === '5' ? true : false} />
                          <ListItemText primary="5인 이상" />
                        </ListItemButton>
                      </List>
                    </Collapse>
                  </List>
              </div>
            </section>
        </div>





        {/* 

        <List
          sx={{ width: '100%', maxWidth: '260px', bgcolor: '#e2e2e2', py:'0' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton onClick={() => { setOpenCategory(!openCategory) }}>
          <ListItemText primary="Category" />
          </ListItemButton>
          <Collapse in={openCategory} timeout="auto" unmountOnExit>
            <List component="div" disablePadding sx={{ bgcolor: 'background.paper' }}>
              <ListItemButton sx={{ height: '40px' }}>
                <input 
                  id='Economic'
                  type="checkbox" 
                  onChange={(e)=>{
                    changeHandler(e.currentTarget.checked, 'Economic')
                  }}
                  checked={player.includes('Economic') ? true : false}
                />
                <ListItemText primary='Economic' />
              </ListItemButton>
              <ListItemButton sx={{ height: '40px' }}>
                <input 
                  id='Negotiation'
                  type="checkbox" 
                  onChange={(e)=>{
                    changeHandler(e.currentTarget.checked, 'Negotiation')
                  }}
                  checked={player.includes('Negotiation') ? true : false}
                />
                <ListItemText primary='Negotiation' />
              </ListItemButton>
              <ListItemButton sx={{ height: '40px' }}>
                <input 
                  id='Card Game'
                  type="checkbox" 
                  onChange={(e)=>{
                    changeHandler(e.currentTarget.checked, 'Card Game')
                  }}
                  checked={player.includes('Card Game') ? true : false}
                />
                <ListItemText primary='Card Game' />
              </ListItemButton>
            </List>
          </Collapse>
        </List> */}
        </>
    )
}

export default BoardgameCategory