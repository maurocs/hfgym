import {Navbar, Hero, Facilities, Classes, 
  About, Trainers, Athletes, Footer, Contact, Prices, Closing } from "./components";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <Hero></Hero>
        <About></About>
        <Trainers></Trainers>
        <Facilities></Facilities>
        <Classes></Classes>
        <Athletes></Athletes>
        <Prices></Prices>
        <Contact></Contact>
        <Closing></Closing>
        <Footer></Footer>
      </main>
    </>
  )
}

export default App