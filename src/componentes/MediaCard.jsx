import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

export const MediaCard = () => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia sx={{ height: 200, objectFit: 'cover' }} image="/src/assets/lagarto.jpg" title="green iguana" />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
                    continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
};
