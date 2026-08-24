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
          <h1>Priscilla Thung</h1>
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