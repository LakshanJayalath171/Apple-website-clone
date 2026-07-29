import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
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
    </>
  )
}

export default App