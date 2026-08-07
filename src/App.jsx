import './App.css'
import StandardImageList from './components/StandardImageList';
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

function App() {

  return (
    <>
      <NavBar />

      <section id="top">
        <div className="top-left">
          <h1>Priscilla Thung</h1>
          <p>Software Engineer | Game Developer | Content Developer</p>
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
        <StandardImageList />
      </section>
      {/* 
      <section id="top">
        <div className="top-left">
          <h1>Vite + React</h1>
          <p>Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects.</p>
        </div>
        <div className="top-right">
          <a href="https://vitejs.dev/" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev/" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
      </section>

      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section> */}

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
