import './App.css';
import NavBar from './components/NavBar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Experience from './components/Experience';
import Skills from './components/Skills';
import PortfolioList from './components/PortfolioList';
import ImageSlider from './components/ImageSlider';

function App() {

  return (
    <>
      <NavBar />

      <section id="top">
        <div className="highlights">
          <h1>Priscilla Thung</h1>
          <ImageSlider images={itemData}/>
        </div>
      </section>
      <section id="spacer"></section>

      <section id="experience">
        <Container maxWidth="xl">
          <Box sx={{ width: "70%", margin: "0 auto", display: { xs: 'none', md: 'flex' } }}>
            <Grid container spacing={1} sx={{ justifyContent: "space-between", alignItems: "flex-start", padding: "0" }}>
              <Grid size={{ md: 12, lg: 6 }}>
                <Experience />
              </Grid>
              <Grid size={{ md: 12, lg: 6 }}>
                <Skills />
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ width: "90%", margin: "0 auto", display: { xs: 'flex', md: 'none' } }}>
            <Grid container spacing={1} sx={{ justifyContent: "space-between", alignItems: "flex-start", padding: "0" }}>
              <Grid size={12}>
                <Experience />
              </Grid>
              <Grid size={12}>
                <Skills />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </section>
      <section id="spacer"></section>

      <section id="portfolio">
        <PortfolioList />
      </section>
      <section id="spacer"></section>

      <section id="footer">
        <Stack direction="row" spacing={1} sx={{ justifyContent: "center", alignItems: "center", marginBottom: "10px" }}>
          <IconButton color="primary" href="https://linkedin.com/in/priscilla-thung">
            <LinkedInIcon />
          </IconButton>
          <IconButton color="primary" href="https://github.com/PrisT-11">
            <GitHubIcon />
          </IconButton>
        </Stack>
        <p>© 2026 by Priscilla Thung</p>
      </section>
    </>
  )
}

export default App


const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];