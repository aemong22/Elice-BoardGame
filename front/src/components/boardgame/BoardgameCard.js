import React from 'react';
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';

function BoardgameCard({ id, name, min_player, max_player, domains, image }) {
  const navigate = useNavigate();
  
  const maxLength = 13;
  const boardgameName = name.length > maxLength ? name.substr(0, maxLength) + '...' : name;
  const domainList = (domains === '' ? ['nothing'] : domains.split(','));
  
  return (
    <Card sx={{ width: 250, maxWidth: 270, my: 10 }}>
      <CardActionArea onClick={() => navigate(`/boardgame/detail/:${id}`)}>
        <CardMedia
          component="img"
          height="240"
          image={image}
          alt={name}
          sx={{ background: 'gray'}}
        />
        <CardContent>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography gutterBottom variant="h6" component="span">
              { boardgameName }
            </Typography>
            <CardActions disableSpacing sx={{ margin: 'auto 0 auto auto' }}>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
            </CardActions>
          </div>
          <div style={{ height: 100, alignItems: 'start' }}>
            <Button variant="outlined" disabled sx={{ fontSize: '0.5rem', borderRadius: '100px', m: '2px' }}>
              { min_player === max_player ? 
                <span>{max_player}인용</span> : <span>{min_player}~{max_player}인용</span>
              }
            </Button>
            {domainList[0] === '' ? null 
              : domainList.map((domain) => (
                <Button key={domain} variant="outlined" disabled sx={{ fontSize: '0.5rem', borderRadius: '100px', m: '2px' }}>
                  {domain}
                </Button>
            ))}
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default BoardgameCard