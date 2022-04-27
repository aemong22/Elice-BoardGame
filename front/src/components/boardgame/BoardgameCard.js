import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

// @mui/icons-material 설치
function BoardgameCard({ name, domains, description }) {
  return (
    <Card sx={{ width: 250, maxWidth: 270, my: 10 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          maxHeight="140"
          image=""
          alt="-"
          sx={{ background: 'gray'}}
        />
        <CardContent sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <Typography gutterBottom variant="h5" component="span" sx={{ m: 'auto 0' }}>
            {name}
          </Typography>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
                <FavoriteIcon />
            </IconButton>
          </CardActions>
          <Typography component="div" sx={{ width: 100, height: 0 }}></Typography>
          <Typography variant="body2" color="text.secondary" sx={{ width: '90%' }}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      

    </Card>
  );
}

export default BoardgameCard