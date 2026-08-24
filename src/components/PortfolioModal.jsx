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

export default function PortfolioModal({ handleClose, open, item }) {

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
            <DialogTitle id="scroll-dialog-title">{item.title}</DialogTitle>
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
                    <Grid size={{md:12, lg: 8}}>
                        <Carousel images={item.carousel} />
                    </Grid>

                    <Grid size={{md:12, lg: 4}} >
                        <Stack
                            direction="column"
                            sx={{
                                justifyContent: "center",
                                alignItems: "flex-start",
                            }}
                        >
                            <Typography id="transition-modal-title" variant="h6" component="h2">
                                Platform:
                            </Typography>
                            <Typography id="transition-modal-title" variant="body1" component="h2">
                                {item.plaform}
                            </Typography>
                            <br />
                            <Typography id="transition-modal-title" variant="h6" component="h2" style={{ marginTop: "1rem" }}>
                                Duration:
                            </Typography>
                            <Typography id="transition-modal-title" variant="body1" component="h2">
                                {item.duration}
                            </Typography>
                            <Typography id="transition-modal-title" variant="h6" component="h2" style={{ marginTop: "1rem" }}>
                                Team size:
                            </Typography>
                            <Typography id="transition-modal-title" variant="body1" component="h2">
                                {item.teamSize}
                            </Typography>
                            <Typography id="transition-modal-title" variant="h6" component="h2" style={{ marginTop: "1rem" }}>
                                Roles:
                            </Typography>
                            <Typography id="transition-modal-title" variant="body1" component="h2">
                                {item.roles}
                            </Typography>
                            <Typography id="transition-modal-title" variant="h6" component="h2" style={{ marginTop: "1rem" }}>
                                Tools used:
                            </Typography>
                            <Typography id="transition-modal-title" variant="body1" component="h2">
                                {item.toolsUsed}
                            </Typography>
                            <Typography id="transition-modal-title" variant="h6" component="h2" style={{ marginTop: "1rem" }}>
                                Overview:
                            </Typography>
                            <Typography id="transition-modal-title" variant="body1" component="h2">
                                {item.overview}
                            </Typography>
                        </Stack>
                    </Grid>

                    <Grid size={12}>
                        <Typography id="transition-modal-title" variant="h4" component="h2">
                            Description:
                        </Typography>
                        <Typography id="transition-modal-title" variant="body1" component="h2" style={{ whiteSpace: "pre-line" }}>
                            {item.desc}
                        </Typography>
                        <Typography id="transition-modal-title" variant="h4" component="h2" style={{ marginTop: "1rem" }}>
                            Contributions:
                        </Typography>
                        <Typography id="transition-modal-title" variant="body1" component="h2" >
                            <ul>
                                {item.contributions?.map((contribution, index) => (
                                    <li key={index}>
                                        {contribution}
                                    </li>
                                ))}
                            </ul>
                        </Typography>
                    </Grid>
                </Grid>

            </DialogContent>
        </Dialog>
    );
}