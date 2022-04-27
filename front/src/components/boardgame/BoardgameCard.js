import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';

// @mui/icons-material 설치
function BoardgameCard({ name, min_player, max_player, domains, image }) {

  const maxLength = 13;
  const boardgameName = name.length > maxLength ? name.substr(0, maxLength) + '...' : name;
  const domainList = domains.split(',');
  
  return (
    <Card sx={{ width: 250, maxWidth: 270, my: 10 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={image}
          alt={name}
          sx={{ background: 'gray'}}
        />
        <CardContent sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <Typography gutterBottom variant="h6" component="span" sx={{ m: 'auto 0' }}>
            { boardgameName }
          </Typography>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
          </CardActions>
          <Typography component="div" sx={{ width: 100, height: 0 }}></Typography>
          <div>
            <Button variant="outlined" disabled sx={{ fontSize: '0.5rem', borderRadius: '100px', m: '2px' }}>
              {min_player}~{max_player}인용
            </Button>
            {domainList.map((domain) => (
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