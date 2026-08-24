import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import PortfolioItem from './PortfolioItem';
import PortfolioData from '../data/PortfolioData';

export default function PortfolioList() {
  return (
    <div>
    <Container maxWidth="xl">
      <Box sx={{ width: { xs: '90%', md: '70%' }, margin: "0 auto", display: 'table' }}>
        <Grid container spacing={1} sx={{ alignItems: "flex-start"}}>
            {PortfolioData.map((item) => (
            <Grid size={4} key={item.title}>
                <PortfolioItem item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
    </div>
  );
}