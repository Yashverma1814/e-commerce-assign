
import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export const ProductCard = (props) => {
  const setId = props.item.id;
  const link = '/product/:'+setId;
 
  return (
    <div >
      <Card sx={{ maxWidth: 345 }} >
      <CardMedia
        component="img"
        height="140"
        image={props.item.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.item.title}
        </Typography>
        
        <Typography>
          price : {props.item.price}
        </Typography>
        <Typography>
          Rating : {props.item.rating}/5
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">ADD TO CART</Button>
        <Link to={link}>
          <Button size="small">VIEW</Button>
        </Link>
      </CardActions>
    </Card>
    </div>
  )
}
