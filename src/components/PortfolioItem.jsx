import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const noPadding = {
    padding: "0px",
    '@media (min-width: 600px)': {
          padding: "0px"
        }
};

export default function PortfolioItem({ title, year, image  }) {
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
                <img
                    src={image}
                    alt={title}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
            </Box>
        </Container>
    );
}