import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

import Slide from "@mui/material/Slide";
import Stack from "@mui/material/Stack";
import CardImage from "./CardImage";

import "./image-slider.css"

export default function Carousel({ images }) {

    const [cards, setCards] = useState([]);
    // currentPage is the current page of the cards that is currently displayed
    const [currentPage, setCurrentPage] = useState(0);
    // slideDirection is the direction that the cards will slide in
    const [slideDirection, setSlideDirection] = useState({
        left: false,
        right: false,
    });

    // these two functions handle changing the pages
    const handleNextPage = () => {
        setSlideDirection("left");
        setCurrentPage((prevPage) => {
            if (prevPage === images.length - 1) return 0
      return prevPage + 1
        });
    };

    const handlePrevPage = () => {
        setSlideDirection("right");
        setCurrentPage((prevPage) => {
      if (prevPage === 0) return images.length - 1
      return prevPage - 1
    });
    };

    useEffect(() => {
        setCards(
            images.map((image, index) => (
                <CardImage
                    image={image}
                    key={index}>
                </CardImage>))
        );
    }, []);

    return (
        <section
            aria-label="Image Slider"
            style={{ width: "55%", height: "100%", position: "relative", margin: "0 auto", }}
        >
            <Box sx={{ width: "100%", margin: "0 auto", display: 'flex' }}>
                {cards.map((card, index) => (
                    <Box
                        key={`card-${index}`}
                        sx={{
                            width: "100%",
                            height: "100%",
                            display: currentPage === index ? "flex" : "none",
                        }}
                    >
                        {/* this is the slide animation that will be used to slide the cards in and out*/}
                        <Slide direction={slideDirection} in={currentPage === index}>
                            <Stack
                                spacing={2}
                                direction="row"
                                sx={{ width: "100%", height: "100%" }}
                            >
                                {/* this slices the cards array to only display the amount you have previously determined per page*/}
                                {cards.slice(
                                    index * 1,
                                    index * 1 + 1
                                )}
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
                    {cards.map((_, index) => (
                        <button
                            type="button"
                            key={index}
                            className="img-slider-dot-btn"
                            aria-label={`View Image ${index + 1}`}
                            onClick={() => setCurrentPage(index)}
                        >
                            {index === currentPage ? (
                                <RadioButtonCheckedIcon aria-hidden />
                            ) : (
                                <RadioButtonUncheckedIcon aria-hidden />
                            )}
                        </button>
                    ))}
                </div>
            </Box>
        </section>
    );
}
