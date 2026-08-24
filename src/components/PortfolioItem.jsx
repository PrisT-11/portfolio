import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import React from 'react';
import PortfolioModal from './PortfolioModal';

const noPadding = {
    padding: "0px",
    '@media (min-width: 600px)': {
        padding: "0px"
    }
};

export default function PortfolioItem({item}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Container sx={noPadding}>
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    paddingTop: '100%', // 16:9 aspect ratio (modify as needed)
                    overflow: 'hidden',
                }}
            >
                <Button 
                disableRipple  
                sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                onClick={handleOpen}>
                    <img
                        src={item.src}
                        alt={item.title}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                </Button>
            </Box>
            <PortfolioModal handleClose={handleClose} open={open} item={item}/>
        </Container>
    );
}