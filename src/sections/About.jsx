import { Fade, Slide } from "react-awesome-reveal";

const About = () => {
    return (
      <section id="about" className="about-section">
        <div className="about-inner">
          <div className="about-left">
            <h2 className="section-title red">Who are we</h2>
            <Fade cascade damping={0.3} triggerOnce>
              <p className="body-text">
                Whether you run, hike, climb, or whatever gets you pushing forward:
                Yalla is your community for adventure and connection.
              </p>

              <p className="body-text">
                Born in Paris with Egyptian roots, YALLA brings creatives and athletes
                together for weekly movement, exploration, and shared experiences.
              </p>
            </Fade>
          </div>
          {/* <div className="mosaic">
            <div className="mosaic-col">
              <div className="mosaic-item tall" style={{ backgroundImage: `url(${RUNNERS[1]})` }} />
              <div className="mosaic-item" style={{ backgroundImage: `url(${RUNNERS[2]})` }} />
            </div>

            <div className="mosaic-col">
              <div className="mosaic-item wide" style={{ backgroundImage: `url(${RUNNERS[3]})` }} />
              <div className="mosaic-grid">
                <div className="mosaic-item" style={{ backgroundImage: `url(${RUNNERS[4]})` }} />
                <div className="mosaic-item" style={{ backgroundImage: `url(${RUNNERS[5]})` }} />
              </div>
            </div>
          </div> */}
        </div>
      </section>
    )
}

export default About;