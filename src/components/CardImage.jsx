import { Card, CardMedia } from "@mui/material";

export default function CardImage({ image }) {
    return (

        <Card
            sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
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
                        backgroundColor: "#000",
                    }}
                /> :
                <CardMedia
                    component="iframe"
                    src={image.img}
                    alt={image.title}
                    frameBorder="0"
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