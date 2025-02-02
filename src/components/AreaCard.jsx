import { useTheme } from "@emotion/react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { useContext } from "react";
import ThemeContext from "../ThemeContext";
import { useId } from 'react';

const AreaCard = ({ title, description, image, c }) => {

    const id = useId()
    const { theme } = useContext(ThemeContext);

    const cardStyles = {
        light: {
            backgroundColor: '#003E74',
            // border: '1px solid #007BFF',
            color: '#000',
            borderRadius: '0px',
            // boxShadow: '5px 5px 5px 0px #007BFF',
        },
        dark: {
            backgroundColor: '#000',
            // border: '1px solid #007BFF',
            color: '#98C7FA',
            borderRadius: '0px',
            // boxShadow: '5px 0px 5px 0px #007BFF',
        }
    };

    return (
        <Card key={ id } style={cardStyles[theme]} >

            <CardMedia
                component="img"
                image={image}
                alt={title}
                style={{
                    minWidth: '280px',
                    width: '95%',
                    margin: 'auto',
                    marginTop: '10px',
                    objectFit: 'cover',
                    // borderRadius: '10px',
                }}
            />
            <CardContent>
                <Typography style={{
                    color: '#98C7FA',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    lineHeight: '24px',
                    paddingBottom: '10px',
                }}>
                    {title}
                </Typography>

                <Typography style={{
                    color: '#fff',
                    fontSize: '16px',
                    fontWeight: 'unset',
                    lineHeight: '20px',
                    paddingBottom: '10px',
                }}>
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