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
import Carousel from './components/Carousel';
import highlightData from './data/highlightdata';
import { Typography } from "@mui/material";

function App() {

  return (
    <>
      <NavBar />

      <section id="top">
        <div className="highlights">
          <Box sx={{ width: { xs: "90%", md: "55%" }, margin: "0 auto", }}>
            <Typography variant="h3" sx={{ color: 'white', marginTop: '1rem', marginBottom: "2rem" }}>
              Hi, I'm Priscilla!
            </Typography>
            <Typography variant="h5" sx={{ marginBottom: "1rem" }}>
              I'm a game programmer and designer that enjoys looking at game systems and understanding how and why they work.
            </Typography>
            <Typography variant="h5" sx={{ marginBottom: "2rem" }}>
              Here you can see the projects I've worked on!
            </Typography>
          </Box>

          <Box
            sx={{
              width: { xs: "85%", md: "70%", lg: "63%", xl: "55%" },
              margin: "0 auto",
              display: "flex"
            }}
          >
            <Carousel images={highlightData} />
          </Box>
        </div>
      </section>
      <section id="spacer"></section>

      <section id="experience">
        <Container maxWidth="xl">
          <Box sx={{ width: { xs: "90%", md: "70%" }, margin: "0 auto", display: 'flex' }}>
            <Grid container spacing={1} sx={{ justifyContent: "space-between", alignItems: "flex-start", padding: "0" }}>
              <Grid size={{ md: 12, lg: 6 }}>
                <Experience />
              </Grid>
              <Grid size={{ md: 12, lg: 6 }}>
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
        <Typography variant="h5" sx={{ marginBottom: "1rem" }}>
          Thanks for looking through my portfolio!
        </Typography>
        <Typography variant="h6">
          Get in touch with me at:
        </Typography>
        <Typography variant="body1" >
          priscillathung11@gmail.com
        </Typography>
        <Stack direction="row" spacing={1} sx={{ justifyContent: "center", alignItems: "center", marginBottom: "1rem" }}>
          <IconButton color="primary" href="https://linkedin.com/in/priscilla-thung">
            <LinkedInIcon />
          </IconButton>
          <IconButton color="primary" href="https://github.com/PrisT-11">
            <GitHubIcon />
          </IconButton>
        </Stack>
        <Typography variant="body2" >
          © 2026 by Priscilla Thung
        </Typography>
      </section>
    </>
  )
}

export default App