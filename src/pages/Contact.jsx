import utdLogo from "../assets/affiliations/utd.png";
import aiaaLogo from "../assets/affiliations/aiaa.png";
import sponsorHome from "../assets/sponsors/Home.png";
import sponsorLime from "../assets/sponsors/limelogo.svg";
import sponsorink from "../assets/sponsors/inkbirdLogo.png";
// Put sponsor logos in src/assets/sponsors/ and import them here.
// Example:
// import sponsor1 from "../assets/sponsors/sponsor-1.png";
const sponsors = [
  {
    name: "Home Depot",
    logo: sponsorHome,
    link: "https://www.homedepot.com", // update if you want
  },
  {
    name: "Lime Light",
    logo: sponsorLime,
    link: "https://limelightvision.io/",
  },
  {
    name: "Ink Bird",
    logo: sponsorink,
    link: "https://inkbird.com",
  },
];


export default function Contact() {
  return (
    <main className="page">
      <section className="section">
        <h1 className="h1">Contact Us</h1>
        <p className="p muted">
          Want to collaborate, sponsor, or join the team? Reach out anytime.
        </p>
      </section>

      <section className="section">
        <div className="contactGrid">
          {/* LEFT: CONTACT METHODS */}
          <div className="card contactCard">
            <h2 className="h2">Get in touch</h2>

            <div className="contactLinks">
              <a
                className="contactLink"
                href="https://instagram.com/cometaerobotics_utd"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contactLink__label">Instagram</span>
                <span className="contactLink__value">@cometaerobotics_utd</span>
              </a>

              <a className="contactLink" href="mailto:cometaerobotics@utdallas.edu">
                <span className="contactLink__label">Email</span>
                <span className="contactLink__value">cometaerobotics@utdallas.edu</span>
              </a>
            </div>
          </div>

          {/* RIGHT: AFFILIATIONS */}
          <div className="card contactCard">
            <h2 className="h2">Affiliated with</h2>

            <div className="affiliations">
              <Affiliation
                name="The University of Texas at Dallas (UTD)"
                logo={utdLogo}
              />
              <Affiliation name="AIAA" logo={aiaaLogo} />
            </div>

            <p className="p muted" style={{ marginTop: 10 }}>
              Our team operates through strong campus and professional connections that
              support member development and real engineering practice.
            </p>
          </div>
        </div>
      </section>

      {/* SPONSORS */}
      <section className="section">
        <h2 className="h2">Our Sponsors</h2>
        <p className="p muted" style={{ marginTop: 8 }}>
          Sponsors make our builds possible. Thank you for supporting student innovation!
        </p>

        <div className="sponsorGrid">
          {sponsors.length === 0 ? (
            <div className="card sponsorEmpty">
              <div className="muted">
                Add sponsor logos in <code>src/assets/sponsors/</code> and import them in{" "}
                <code>Contact.jsx</code>.
              </div>
            </div>
          ) : (
            sponsors.map((s) => (
              <a
                key={s.name}
                className="sponsorCard"
                href={s.link || "#"}
                target={s.link ? "_blank" : undefined}
                rel={s.link ? "noreferrer" : undefined}
              >
                <img className="sponsorLogo" src={s.logo} alt={s.name} />
                <div className="sponsorName">{s.name}</div>
              </a>
            ))
          )}
        </div>
      </section>
    </main>
  );
}

function Affiliation({ name, logo }) {
  return (
    <div className="affiliation">
      <div className="affiliation__logoWrap">
        <img className="affiliation__logo" src={logo} alt={name} />
      </div>
      <div className="affiliation__name">{name}</div>
    </div>
  );
}
