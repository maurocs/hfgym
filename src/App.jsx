import {Navbar, Hero, Facilities, Classes, About, Trainers, Athletes } from "./components";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <Hero></Hero>
        <About></About>
        <Classes></Classes>
        <Facilities></Facilities>
        <Trainers></Trainers>
        <Athletes></Athletes>
      </main>
    </>
  )
}

export default App