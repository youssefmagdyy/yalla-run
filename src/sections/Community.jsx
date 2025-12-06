import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { FaWhatsapp, FaInstagram, FaStrava } from "react-icons/fa";

const Community = () => {
  const [selectedActivity, setSelectedActivity] = useState("");

    return (
      <section id="community" className="community-section">
        <div className="community-inner">
          {/* <h2 className="section-title red">Community</h2> */}
          <p className="body-text-bolder">
           Yalla pick your sport!
          </p>
          <div className="sports-row">
            <span
              onClick={() => setSelectedActivity("Run")}
              className={`sports ${selectedActivity === "Run" ? "sports-active" : ""}`}
            >
              Running
            </span>
            <div className="sports soon">
              <span>Hiking</span>
              <span className="soon-text">Coming soon</span>
              </div>
              <div className="sports soon">
              <span>Football</span>
              <span className="soon-text">Coming soon</span>
              </div>
              <div className="sports soon">
              <span>Climbing</span>
              <span className="soon-text">Coming soon</span>
              </div>
              <div className="sports soon">
              <span>Cycling</span>
              <span className="soon-text">Coming soon</span>
              </div>
              <div className="sports soon">
              <span>Padel</span>
              <span className="soon-text">Coming soon</span>
              </div>
          </div>
          <p className="body-text-bold">
           STEP 2. Connect with us
          </p>
          <div className="social-row">
            <a 
              href="https://chat.whatsapp.com/GBkoXP74vx73PNGCyxR5sV"
              target="_blank"
              rel="noopener noreferrer"
              className="social-tile whatsapp"
            >
              <div className="social-icon"><FaWhatsapp /></div>
              <div className="social-text">
                <span className="social-title">WhatsApp</span>
                <span className="social-sub">Group chat</span>
              </div>
            </a>

            <a 
              href="https://www.instagram.com/yalla.adeef?igsh=MXJpajRyandwNnNjZg=="
              target="_blank"
              rel="noopener noreferrer"
              className="social-tile instagram"
            >
              <div className="social-icon"><FaInstagram /></div>
              <div className="social-text">
                <span className="social-title">Instagram</span>
                <span className="social-sub">Latest updates</span>
              </div>
            </a>

            <a 
              href="https://www.strava.com/clubs/1833378"
              target="_blank"
              rel="noopener noreferrer"
              className="social-tile strava"
            >
              <div className="social-icon"><FaStrava /></div>
              <div className="social-text">
                <span className="social-title">Strava</span>
                <span className="social-sub">Track activities</span>
              </div>
            </a>
          </div>
        </div>
        {selectedActivity === "Run" && 
        <Fade triggerOnce>
        <div className="activity-block">
        <h2 className="subsection-title-sub red">Weekly Run</h2>
        <p className="subtitle">Ready? Steady.. Yalla!</p>
      <div className="activity-grid">
        <div className="activity-grid-item big">Saturdays</div>
        <div className="activity-grid-item">10:30 AM</div>
        <a
          href="https://www.google.com/maps/search/?api=1&query=Flâneur+Coffee+Club+Paris"
          target="_blank"
          rel="noopener noreferrer"
          className="activity-grid-item map-link"
        >
          @FCC
        </a>
        <div className="activity-grid-item">4 km loop</div>
        <div className="activity-grid-item">All levels welcome</div>
      </div>
      </div>
      </Fade>}
      </section>
    )
}

export default Community;