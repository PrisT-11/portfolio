import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import Slide from "@mui/material/Slide";
import Stack from "@mui/material/Stack";
import CardImage from "./CardImage";
import "./image-slider.css";

export default function Carousel({ images }) {
    const [currentPage, setCurrentPage] = useState(0);
    const [slideDirection, setSlideDirection] = useState("left");
    const [maxAspectRatio, setMaxAspectRatio] = useState(1);

    const handleNextPage = () => {
        setSlideDirection("left");

        setCurrentPage((prevPage) => {
            if (prevPage === images.length - 1) return 0;
            return prevPage + 1;
        });
    };

    const handlePrevPage = () => {
        setSlideDirection("right");

        setCurrentPage((prevPage) => {
            if (prevPage === 0) return images.length - 1;
            return prevPage - 1;
        });
    };

    // Find the aspect ratio of the widest/tallest image
    useEffect(() => {
        if (!images || images.length === 0) return;

        const imagePromises = images
        .filter((image) => image.isImg)
        .map((image) => {
                return new Promise((resolve) => {              
                        const img = new Image();
                        img.onload = () => {
                            resolve(img.width / img.height);
                        };

                        img.onerror = () => {
                            resolve(1);
                        };
                        img.src = image.img;

                });
        });

        if (imagePromises.length === 0) return;

        Promise.all(imagePromises).then((ratios) => {
            // Smallest ratio = tallest image
            const tallestImageRatio = Math.min(...ratios);
            setMaxAspectRatio(tallestImageRatio);
        });
    }, [images]);

    return (
        <div>
            <Box
                sx={{
                    width: { xs: "85%", md: "55%" },
                    margin: "0 auto",
                    display: "flex"
                }}
            >
                <section
                    aria-label="Image Slider"
                    style={{
                        width: "100%",
                        aspectRatio: maxAspectRatio,
                        position: "relative",
                        margin: "0 auto",
                        backgroundColor: "black",
                    }}
                >
                    {images.map((image, index) => (
                        <Box
                            key={`card-${index}`}
                            sx={{
                                width: "100%",
                                height: "100%",
                                display:
                                    currentPage === index ? "flex" : "none",
                            }}
                        >
                            <Slide
                                direction={slideDirection}
                                in={currentPage === index}
                            >
                                <Stack
                                    spacing={2}
                                    direction="row"
                                    sx={{
                                        width: "100%",
                                        height: "100%",
                                    }}
                                >
                                    <CardImage image={image} />
                                </Stack>
                            </Slide>
                        </Box>
                    ))}

                    <button
                        type="button"
                        onClick={handlePrevPage}
                        className="img-slider-btn"
                        style={{ left: 0 }}
                        aria-label="View Previous Image"
                    >
                        <ArrowBackIosNewIcon aria-hidden />
                    </button>

                    <button
                        type="button"
                        onClick={handleNextPage}
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
                                onClick={() => {
                                    setCurrentPage(index);
                                    setSlideDirection(
                                        index > currentPage
                                            ? "left"
                                            : "right"
                                    );
                                }}
                            >
                                {index === currentPage ? (
                                    <RadioButtonCheckedIcon aria-hidden />
                                ) : (
                                    <RadioButtonUncheckedIcon aria-hidden />
                                )}
                            </button>
                        ))}
                    </div>
                </section>
            </Box>      
        </div>
    );
}