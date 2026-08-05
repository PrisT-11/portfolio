import { useState } from 'react';
import StandardImageList from './components/StandardImageList';
import NavBar from './components/NavBar';
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Box from '@mui/material/Box';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <section id="portfolio">
        <Box>
         <h1>Vite + React</h1>
      </Box>
      </section>
      <section id="image-list">
        <StandardImageList />
      </section>

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
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>

      <section id="footer">
        <p>© 2026 by Priscilla Thung</p>
      </section>
    </>
  )
}

export default App
