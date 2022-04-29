import { useState, useEffect } from "react"
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

function BoardgameCategory({ player, setPlayer }) {
    const [openPlayers, setOpenPlayers] = useState(false);
    const [openCategory, setOpenCategory] = useState(false);

    const changeHandler = (checked, id) => {
      if (checked) {
        setPlayer([...player, id]);
      } else {
        setPlayer(player.filter((el) => el !== id));
      }
    };
  
    return (
      <>
        <List
            sx={{ width: '100%', maxWidth: '260px', bgcolor: '#e2e2e2', py:'0' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
        >
          <ListItemButton onClick={() => { setOpenPlayers(!openPlayers) }}>
            <ListItemText primary="Players" />
            {/* {open ? <ExpandLess /> : <ExpandMore />} */}
          </ListItemButton>
          <Collapse in={openPlayers} timeout="auto" unmountOnExit>
            <List component="div" disablePadding sx={{ bgcolor: 'background.paper' }}>
              <ListItemButton sx={{ height: '40px' }}>
                <input 
                  id='2'
                  type="checkbox" 
                  onChange={(e)=>{
                    changeHandler(e.currentTarget.checked, '2')
                  }}
                  checked={player.includes('2') ? true : false}
                />
                <ListItemText primary="2" />
              </ListItemButton>
              <ListItemButton sx={{ height: '40px' }}>
                <input 
                  id='3'
                  type="checkbox" 
                  onChange={(e)=>{
                    changeHandler(e.currentTarget.checked, '3')
                  }}
                  checked={player.includes('3') ? true : false}
                />
                <ListItemText primary="3" />
              </ListItemButton>
              <ListItemButton sx={{ height: '40px' }}>
                <input 
                  id='4'
                  type="checkbox" 
                  onChange={(e)=>{
                    changeHandler(e.currentTarget.checked, '4')
                  }}
                  checked={player.includes('4') ? true : false}
                />
                <ListItemText primary="4" />
              </ListItemButton>
              <ListItemButton sx={{ height: '40px' }}>
                <input 
                  id='5'
                  type="checkbox" 
                  onChange={(e)=>{
                    changeHandler(e.currentTarget.checked, '5')
                  }}
                  checked={player.includes('5') ? true : false}
                />
                <ListItemText primary="5" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>

        <List
          sx={{ width: '100%', maxWidth: '260px', bgcolor: '#e2e2e2', py:'0' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton onClick={() => { setOpenCategory(!openCategory) }}>
          <ListItemText primary="Category" />
          {/* {open ? <ExpandLess /> : <ExpandMore />} */}
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
        </List>
        </>
    )
}

export default BoardgameCategory