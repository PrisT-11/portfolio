import { useState } from "react"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { Card, CardMedia } from "@mui/material";
import "./image-slider.css"
import VRGame from '../assets/videos/Priscilla_VrGame.mp4'

export default function ImageSlider({ images }) {
  const [imageIndex, setImageIndex] = useState(0)

  function showNextImage() {
    setImageIndex(index => {
      if (index === images.length - 1) return 0
      return index + 1
    })
  }

  function showPrevImage() {
    setImageIndex(index => {
      if (index === 0) return images.length - 1
      return index - 1
    })
  }

  return (
    <section
      aria-label="Image Slider"
      style={{ width: "68%", height: "100%", position: "relative", margin: "0 auto", }}
    >

      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {/* <Card key={images[0].img} sx={{translate: `${-100 * imageIndex}%`,  backgroundColor: "black", display: "flex", justifyContent: "center", alignItems: "center"}}>
          <CardMedia
            component="img"
            image={images[0].img}
            alt={images[0].title}
            sx={{ objectFit: "contain"}}
          />
        </Card>
        {/* <Card key={images[8].img} sx={{ width: "100%", backgroundColor: "white", margin: "auto"  }}>
          <CardMedia
            component="img"
            image={images[8].img}
            alt={images[8].title}
            sx={{ objectFit: "contain", margin: "0 auto" }}
          />
        </Card> *
        <Card key={VRGame} sx={{ width: "100%", backgroundColor: "white", margin: "auto"  }}>
          <CardMedia
            component="video"
            controls
            image={VRGame}
            alt={images[8].title}
            sx={{ objectFit: "contain", margin: "0 auto" }}
          />
        </Card> */}
        {images.map((image, index) => (
        //  <Card key={image.img} sx={{translate: `${-100 * imageIndex}%`,  backgroundColor: "black", display: "flex", justifyContent: "center", alignItems: "center"}}>
        //   <CardMedia
        //     component="img"
        //     image={image.img}
        //     alt={image.title}
        //     sx={{ objectFit: "contain"}}
        //   />
        // </Card>
          <img
            key={image.img}
            src={image.img}
            alt={image.title}
            aria-hidden={imageIndex !== index}
            className="img-slider-img"
            style={{ translate: `${-100 * imageIndex}%` }}        
          />
        ))}
      </div>
      <button
        type="button"
        onClick={showPrevImage}
        className="img-slider-btn"
        style={{ left: 0 }}
        aria-label="View Previous Image"
      >
        <ArrowBackIosNewIcon aria-hidden />
      </button>
      <button
        type="button"
        onClick={showNextImage}
        className="img-slider-btn"
        style={{ right: 0 }}
        aria-label="View Next Image"
      >
      <ArrowForwardIosIcon aria-hidden />
      </button>
      <div
        style={{
          position: "absolute",
          bottom: ".5rem",
          left: "50%",
          translate: "-50%",
          display: "flex",
          gap: ".25rem",
        }}
      >
        {images.map((_, index) => (
          <button
            type="button"
            key={index}
            className="img-slider-dot-btn"
            aria-label={`View Image ${index + 1}`}
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? (
              <RadioButtonCheckedIcon aria-hidden />
            ) : (
              <RadioButtonUncheckedIcon aria-hidden />
            )}
          </button>
        ))}
      </div>
      <div id="after-image-slider-controls" />
    </section>
  )
}
