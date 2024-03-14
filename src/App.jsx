import {Navbar, Hero, Facilities, Classes, About, Trainers, Athletes, Footer, Contact } from "./components";

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
        <Contact></Contact>
        <Footer></Footer>
      </main>
    </>
  )
}

export default App