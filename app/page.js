
import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";

const destinations = [
  {
    number: "01",
    name: "Hundred Islands",
    location: "Alaminos City",
    type: "Island adventure",
    description: "Explore a remarkable cluster of islands, clear coastal waters, and scenic viewpoints.",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1000&q=75",
    alt: "Blue ocean waves and a tropical coastline"
  },
  {
    number: "02",
    name: "Bolinao Lighthouse",
    location: "Bolinao",
    type: "Coastal landmark",
    description: "Visit a historic lighthouse overlooking dramatic cliffs and the West Philippine Sea.",
    image: "https://images.unsplash.com/photo-1498623116890-37e912163d5d?auto=format&fit=crop&w=1000&q=75",
    alt: "A lighthouse standing near the sea"
  },
  {
    number: "03",
    name: "Balungao Hot Spring",
    location: "Balungao",
    type: "Nature & wellness",
    description: "Take a relaxing break and discover a different side of Pangasinan's natural landscape.",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1000&q=75",
    alt: "A peaceful natural water landscape"
  }
];

function HeritageCard({ destination }) {
  return (
    <article className="heritage-card">
      <div className="card-image-wrap">
        <img src={destination.image} alt={destination.alt} loading="lazy" />
        <span className="card-number">{destination.number}</span>
      </div>
      <div className="card-copy">
        <p className="eyebrow">{destination.type}</p>
        <h3>{destination.name}</h3>
        <p className="location">⌖ {destination.location}, Pangasinan</p>
        <p className="description">{destination.description}</p>
        <a className="text-link" href="#plan">
          Plan a visit <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main>
      <Header />

      <section className="hero" id="home">
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow">
            <span></span> THE HEART OF THE NORTH
          </p>
          <h1>Find your<br /><em>kind of</em> wonder.</h1>
          <p className="hero-intro">
            From island horizons to historic coastlines, discover the stories and natural beauty that make Pangasinan unforgettable.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#discover">
              Explore destinations <span aria-hidden="true">↓</span>
            </a>
            <a className="button button-quiet" href="#about">
              Get to know Pangasinan
            </a>
          </div>
          <div className="hero-note">
            <span className="note-line"></span>
            <span>LOCAL STORIES. LASTING MEMORIES.</span>
          </div>
        </div>
        <div className="hero-art" role="img" aria-label="Illustration of ocean waves, islands, and a rising sun">
          <div className="sun"></div>
          <div className="island island-back"></div>
          <div className="island island-front"></div>
          <div className="wave wave-one"></div>
          <div className="wave wave-two"></div>
          <div className="art-label">
            <span>16°09′ N</span>
            <span>PROVINCE OF PANGASINAN</span>
          </div>
        </div>
        <div className="hero-bottom">
          <span>01 / 03</span>
          <span>SCROLL TO EXPLORE</span>
          <span>PHILIPPINES · REGION I</span>
        </div>
      </section>

      <section className="intro-section" id="about">
        <div className="section-kicker">A PLACE WITH A STORY</div>
        <div className="intro-grid">
          <h2>More than a destination.<br /><em>A living heritage.</em></h2>
          <p>
            Pangasinan brings together coastal wonders, local traditions, and welcoming communities. This digital showcase makes it easier to explore iconic places and plan meaningful visits—on any screen and even with a slower connection.
          </p>
        </div>
      </section>

      <section className="destinations-section" id="discover">
        <div className="section-heading">
          <div>
            <p className="section-kicker">YOUR NEXT CHAPTER</p>
            <h2>Discover Pangasinan</h2>
          </div>
          <p className="section-side-copy">
            Three places to start exploring.<br />
            A province full of stories to uncover.
          </p>
        </div>
        <div className="heritage-grid">
          {destinations.map((destination) => (
            <HeritageCard key={destination.number} destination={destination} />
          ))}
        </div>
      </section>

      <section className="visit-banner" id="plan">
        <div>
          <p className="section-kicker">MAKE IT YOURS</p>
          <h2>Your journey<br /><em>starts here.</em></h2>
        </div>
        <div className="visit-copy">
          <p>
            Before you go, check local advisories, weather conditions, opening schedules, and responsible-tourism guidelines. Help protect the places and communities that make every visit special.
          </p>
          <a className="button button-light" href="#discover">
            Choose a destination <span aria-hidden="true">↗</span>
          </a>
        </div>
        <span className="banner-sun" aria-hidden="true"></span>
      </section>

      <Footer />
    </main>
  );
}

