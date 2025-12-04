
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
                <img key={i} className="film-frame" src={src} alt={i} />
              ))}
            </div>
            <div className="film-track">
              {RUNNERS.map((src, i) => (
                <img key={"dup-" + i} className="film-frame" src={src} alt={"dup-" + i} />
              ))}
            </div>
          </div>
        </section>
    )
}

export default Gallery;