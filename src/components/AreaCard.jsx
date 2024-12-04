import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";

const AreaCard = ({ title, description, image, c }) => {
    return (
        <Card sx={{ maxWidth: 500 }} component="div" className="mx-auto">

            <CardMedia
                component="img"
                image={image}
                alt={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {description}
                </Typography>
                <Typography variant="body2" color="text.secondary" className="flex flex-row gap-x-3 pt-2">
                    {c}
                </Typography>
            </CardContent>

        </Card>
    );

}

export default AreaCard;