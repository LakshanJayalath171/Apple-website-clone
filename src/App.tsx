import Hero from "./Components/Hero"
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
    </>
  )
}

export default App