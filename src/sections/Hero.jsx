import { JackInTheBox } from "react-awesome-reveal";

const Hero = () => {
    return ( 
      <section className="hero">
        <div className="hero-inner">
          <JackInTheBox triggerOnce>
          <h1 className="hero-title">YALLA?</h1>
          </JackInTheBox>
          {/* <p className="hero-sub">Adventure and connection</p> */}
        </div>
      </section>
    )
}

export default Hero;