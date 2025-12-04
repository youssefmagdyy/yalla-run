import { Fade } from "react-awesome-reveal"

const Partners = () => {
    return (
    <section id="partners" className="partners-section">
          <h2 className="section-title red">Shoutout</h2>
          <div className="partners-list">
            <Fade cascade damping={0.5} triggerOnce>
              <div className="partner">
                <img className="partner-img" src="/fcc.jpg" alt="FCC"/>
                <div className="partner-info">
                  <h3 className="partner-name">Flâneur Coffee Club</h3>
                  <a href="https://www.instagram.com/fcc.paris/" className="partner-link">Instagram</a>
                </div>
              </div>
              </Fade>
          </div>
    </section>
    )
}

export default Partners