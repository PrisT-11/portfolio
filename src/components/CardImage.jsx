import { Card, CardMedia } from "@mui/material";

export default function CardImage({ image }) {
    return (

        <Card
            sx={{
                width: "100%",
                height: "100%",
                backgroundColor: "black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
            }}
        >
            {image.isImg ?
                <CardMedia
                    component="img"
                    image={image.img}
                    alt={image.title}
                    sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                    }}
                /> :
                <CardMedia
                    component="video"
                    image={image.img}
                    alt={image.title}
                    controls
                    sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                    }}
                />
            } 
        </Card>
    );
}