import './App.css'
import StandardImageList from './components/StandardImageList';
import NavBar from './components/NavBar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SkillItem from './components/SkillItem';
import UnityLogo from './assets/unity-logo.svg';

function App() {

  return (
    <>
      <NavBar />

      <section id="portfolio">
        <Container maxWidth="xl" sx={{ marginTop: "20px", marginBottom: "20px" }}>
          <Box sx={{ width: "70%", margin: "0 auto" }}>
          <Grid container  spacing={1} sx={{ justifyContent: "space-between", alignItems: "flex-start", padding: "0" }}>
          <Grid size={{ md: 12, lg: 6 }}>
            <Stack direction="column" spacing={1} sx={{ justifyContent: "flex-start", alignItems: "flex-start" }}>
              <Typography variant="h4" component="h1">
                Portfolio:
              </Typography>
              <Typography variant="h4" style={{ textAlign: "left", margin: "0" }}>
                Experience:
              </Typography>
              <Typography variant="h6" style={{ textAlign: "left", margin: "0" }}>
                <b>NCS Group</b> - <i>Software Engineer</i>
              </Typography>
              <Typography variant="body1" style={{ textAlign: "left", margin: "0" }}>
                Oct 2024 - Jun 2026
              </Typography>
              <Typography variant="body2" style={{ textAlign: "left", margin: "0" }}>
                PLACEHOLDER
              </Typography>
              <br />
              <Typography variant="h6" style={{ textAlign: "left", margin: "0" }}>
                <b>NCS Group</b> - <i>Software Engineer Intern</i>
              </Typography>
              <Typography variant="body1" style={{ textAlign: "left", margin: "0" }}>
                Sept 2023 - April 2024
              </Typography>
              <Typography variant="body2" style={{ textAlign: "left", margin: "0" }}>
                Assisted in migrating and developing a website from a .NET framework to Java Spring Boot framework.
              </Typography>
              <br />
              <Typography variant="h6" style={{ textAlign: "left", margin: "0" }}>
                <b>Ngee Ann Polytechnic</b> - <i>Content Developer</i>
              </Typography>
              <Typography variant="body1" style={{ textAlign: "left", margin: "0" }}>
                Nov 2020 - Jul 2021
              </Typography>
              <Typography variant="body2" style={{ textAlign: "left", margin: "0" }}>
                Collaborated with other trainees and the course module lead to design and develop a point-and-click game in Unity for the Landscape Design and Horticulture course, improving student’s learning retention.
              </Typography>
              <br />
              <Typography variant="h6" style={{ textAlign: "left", margin: "0" }}>
                <b>Singapore Polytechnic</b> - <i>Game Developer</i>
              </Typography>
              <Typography variant="body1" style={{ textAlign: "left", margin: "0" }}>
                Dec 2020 - Feb 2021
              </Typography>
              <Typography variant="body2" style={{ textAlign: "left", margin: "0" }}>
                Communicated effectively with the supervisor to develop an arcade game in Unity to raise awareness on scams, the game was launched by the Singapore Police Force at the Delta League in 2022.
              </Typography>
              <br />
              <Typography variant="h6" style={{ textAlign: "left", margin: "0" }}>
                <b>Ministry of Education</b> - <i>Game Developer Intern</i>
              </Typography>
              <Typography variant="body1" style={{ textAlign: "left", margin: "0" }}>
                Mar 2019 - May 2019
              </Typography>
              <Typography variant="body2" style={{ textAlign: "left", margin: "0" }}>
                Developed games to gamify learning of protocols and procedures for customer service staff at MOE, improving staff knowledge retention.
              </Typography>
              <br />
              <Typography variant="h4" style={{ textAlign: "left", margin: "0" }}>
                Education:
              </Typography>
              <Typography variant="h6" style={{ textAlign: "left", margin: "0" }}>
                <b>Singapore Institute of Technology</b>
              </Typography>
              <Typography variant="body1" style={{ textAlign: "left", margin: "0" }}>
                Aug 2021 - Aug 2024
              </Typography>
              <Typography variant="body2" style={{ textAlign: "left", margin: "0" }}>
                Bachelor of Science in Computing Science
              </Typography>
              <br />
              <Typography variant="h6" style={{ textAlign: "left", margin: "0" }}>
                <b>Singapore Polytechnic</b>
              </Typography>
              <Typography variant="body1" style={{ textAlign: "left", margin: "0" }}>
                Apr 2017 - Apr 2020
              </Typography>
              <Typography variant="body2" style={{ textAlign: "left", margin: "0" }}>
                Diploma In Games Design & Development
              </Typography>
            </Stack>


          </Grid>
          <Grid size={{ md: 12, lg: 6 }}>
            <Grid container spacing={3}>
              <Grid size={12}>
              <Typography variant="h4" component="h1">
                Skills:
              </Typography>
            </Grid>
            <Grid size={6}>
              <SkillItem name="Java" image="https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" />
            </Grid>
            <Grid size={6}>
              <SkillItem name="JavaScript" image="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" />
            </Grid>
            <Grid size={6}>
              <SkillItem name="Unity" image={UnityLogo} />
            </Grid>
            <Grid size={6}>
              <SkillItem name="C#" image="https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png" />
            </Grid>
          </Grid> 
          </Grid>
        </Grid>
        </Box>
        </Container>

      </section>
      <section id="image-list">
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
