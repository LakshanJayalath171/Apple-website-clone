import {heroVideo,title} from "../constants"

const Hero = () => {
  return (
    <section id="hero" className="pt-6">
        <div>
            <h1>Macbook Pro</h1>
            <img src={title} alt="title" />
            <video src={heroVideo} autoPlay muted playsInline></video>
            <button>Buy</button>
            <p>From $1,999 or $166.62/mo. for 12 mo.*</p>
        </div>
    </section>
  )
}

export default Hero