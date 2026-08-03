import Features from "./Components/Features"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import Highlight from "./Components/Highlight"
import Navbar from "./Components/Navbar"
import Perfomance from "./Components/Perfomance"
import ProductViewer from "./Components/ProductViewer"
import Showcase from "./Components/Showcase"
import ShowcaseDetails from "./Components/ShowcaseDetails"



const App = () => {
  return (
    <>
     <Navbar />
     <Hero/>
     <ProductViewer/>
     <Showcase/>
     <ShowcaseDetails/>
     <Perfomance/>
     <Features/>
     <Highlight/>
     <Footer/>
    </>
  )
}

export default App