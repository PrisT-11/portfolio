
import { Card, CardMedia } from "@mui/material";
import "./image-slider.css"

export default function CardImage({ image, index }) {


  return (
      <div
      >
         <Card key={image.img} sx={{width: "100%",  backgroundColor: "black", display: "flex", justifyContent: "center", alignItems: "center"}}>
          <CardMedia
            component="img"
            image={image.img}
            alt={image.title}
            sx={{ objectFit: "contain"}}
          />
        </Card>
      </div>


  )
}
