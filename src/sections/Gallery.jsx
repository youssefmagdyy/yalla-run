
const Gallery = () => {
  const RUNNERS = [
    "/runner1.jpg",
    "/runner2.jpg",
    "/runner1.jpg",
    "/runner2.jpg",
    "/runner1.jpg",
    "/runner2.jpg",
  ];
  
    return (
        <section className="gallery-section">
        <p className="section-title red">
           Our Gallery
          </p>
          <div  className="film-strip">
            <div className="film-track">
              {RUNNERS.map((src, i) => (
                <div
                key={i}
                className="film-frame"
                style={{ backgroundImage: `url(${src})` }}
              ></div>
              ))}
            </div>
            <div className="film-track">
              {RUNNERS.map((src, i) => (
                <div
                key={"dup-" + i}
                className="film-frame"
                style={{ backgroundImage: `url(${src})` }}
              ></div>
              ))}
            </div>
          </div>
        </section>
    )
}

export default Gallery;