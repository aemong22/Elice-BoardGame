import { useState } from "react"
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Checkbox from '@mui/material/Checkbox';

function BoardgameCategory() {
    const [openMenu, setOpenMenu] = useState(false);
    const [openPlayers, setOpenPlayers] = useState(false);
    const [openCategory, setOpenCategory] = useState(false);

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  
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
                <Checkbox {...label} />
                <ListItemText primary="2" />
              </ListItemButton>
              <ListItemButton sx={{ height: '40px' }}>
                <Checkbox {...label} />
                <ListItemText primary="3" />
              </ListItemButton>
              <ListItemButton sx={{ height: '40px' }}>
                <Checkbox {...label} />
                <ListItemText primary="4" />
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
                <Checkbox {...label} />
                <ListItemText primary='Economic' />
              </ListItemButton>
              <ListItemButton sx={{ height: '40px' }}>
                <Checkbox {...label} />
                <ListItemText primary='Negotiation' />
              </ListItemButton>
              <ListItemButton sx={{ height: '40px' }}>
                <Checkbox {...label} />
                <ListItemText primary='Card Game' />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
        </>
    )
}

export default BoardgameCategory