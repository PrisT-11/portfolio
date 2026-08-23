import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Carousel from './Carousel';
import VRGame from '../assets/videos/Priscilla_VrGame.mp4'

export default function PortfolioModal({ handleClose, open }) {

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    return (
        <Dialog
            maxWidth="xl"
            fullWidth="true"
            open={open}
            onClose={handleClose}
            scroll="paper"
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
            sx={{
                '& .MuiPaper-root': {
                    background: '#3d3d3d'
                },
            }}>
            <DialogTitle id="scroll-dialog-title">Game/Project Title</DialogTitle>
            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={(theme) => ({
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: 'white',
                })}
            >
                <CloseIcon />
            </IconButton>
            <DialogContent dividers>
                <Grid container spacing={3}>
                    <Grid size={8}>
                        <Carousel images={itemData} />
                    </Grid>

                    <Grid size={4} >
                        <Stack
                            direction="column"
                            spacing={2}
                            sx={{
                                justifyContent: "center",
                                alignItems: "flex-start",
                            }}
                        >
                            <Typography id="transition-modal-title" variant="body1" component="h2">
                                Platform:
                            </Typography>
                            <Typography id="transition-modal-title" variant="body1" component="h2">
                                Duration:
                            </Typography>
                            <Typography id="transition-modal-title" variant="body1" component="h2">
                                Team size:
                            </Typography>
                            <Typography id="transition-modal-title" variant="body1" component="h2">
                                Roles:
                            </Typography>
                            <Typography id="transition-modal-title" variant="body1" component="h2">
                                Tools used:
                            </Typography>
                            <Typography id="transition-modal-title" variant="body1" component="h2">
                                Description:
                            </Typography>

                        </Stack>
                    </Grid>

                    <Grid size={12}>
                        <Typography id="transition-modal-title" variant="h4" component="h2">
                            Contributions:
                        </Typography>
                        <Typography id="transition-modal-title" variant="body1" component="h2">
                            PLACEHOLDER
                        </Typography>
                        <Typography id="transition-modal-title" variant="body1" component="h2">
                            PLACEHOLDER
                        </Typography>
                        <Typography id="transition-modal-title" variant="body1" component="h2">
                            PLACEHOLDER
                        </Typography>
                        <Typography id="transition-modal-title" variant="body1" component="h2">
                            PLACEHOLDER
                        </Typography>
                        <Typography id="transition-modal-title" variant="body1" component="h2">
                            PLACEHOLDER
                        </Typography>
                        <Typography id="transition-modal-title" variant="body1" component="h2">
                            PLACEHOLDER
                        </Typography>
                        <Typography id="transition-modal-title" variant="body1" component="h2">
                            PLACEHOLDER
                        </Typography>
                        <Typography id="transition-modal-title" variant="body1" component="h2">
                            PLACEHOLDER
                        </Typography>
                        <Typography id="transition-modal-title" variant="body1" component="h2">
                            PLACEHOLDER
                        </Typography>
                        <Typography id="transition-modal-title" variant="body1" component="h2">
                            PLACEHOLDER
                        </Typography>
                        <Typography id="transition-modal-title" variant="body1" component="h2">
                            PLACEHOLDER
                        </Typography>
                        <Typography id="transition-modal-title" variant="body1" component="h2">
                            PLACEHOLDER
                        </Typography>
                    </Grid>
                </Grid>

            </DialogContent>
        </Dialog>
    );
}


const itemData = [
    {
        img: VRGame,
        title: 'VR game',
        isImg: false
    },
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        isImg: true
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
        isImg: true
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
        isImg: true
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        isImg: true
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
        isImg: true
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
        isImg: true
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
        isImg: true
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
        isImg: true
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
        isImg: true
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
        isImg: true
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
        isImg: true
    },
];