import { useState } from "react";
import { Fade } from "react-awesome-reveal";
const Community = () => {
  const [selectedActivity, setSelectedActivity] = useState("");

    return (
      <section id="community" className="community-section">
        <div className="community-inner">
          {/* <h2 className="section-title red">Community</h2> */}
          <p className="body-text-bolder">
           Yalla pick your sport!
          </p>
          <div className="chip-row">
            <span
              onClick={() => setSelectedActivity("Run")}
              className={`chip ${selectedActivity === "Run" ? "chip-active" : ""}`}
            >
              Running
            </span>
            <span className="chip soon">Hiking</span>
            <span className="chip soon">Football</span>
            <span className="chip soon">Climbing</span>
            <span className="chip soon">Cycling</span>
            <span className="chip soon">Padel</span>
          </div>
          <p className="body-text-bold">
           STEP 2. Connect with us
          </p>
          <div className="join-row">
            <a href="https://chat.whatsapp.com/GBkoXP74vx73PNGCyxR5sV" className="join secondary">WhatsApp</a>
            <a href="https://www.instagram.com/yalla.adeef?igsh=MXJpajRyandwNnNjZg==" className="join secondary">Instagram</a>
            <a href="https://www.strava.com/clubs/1833378" className="join secondary">Strava</a>
          </div>
        </div>
        {selectedActivity === "Run" && 
        <Fade triggerOnce>
        <div className="activity-block">
        <h2 className="section-title-sub red">Weekly Run</h2>
        <p className="subtitle">Ready? Steady.. Yalla!</p>
      <div className="activity-grid">
        <div className="activity-grid-item big">Saturdays</div>
        <div className="activity-grid-item">10:00 AM</div>
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