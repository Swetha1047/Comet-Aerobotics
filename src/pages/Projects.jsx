import excavatorImg from "../assets/project pics/Excavator.png";
import depositorImg from "../assets/project pics/depositor.png";
import embeddedImg from "../assets/project pics/Embedded.png";
import electricalImg from "../assets/project pics/Electrical.png";

import outreachImg from "../assets/project pics/Outreach.png";
import businessImg from "../assets/project pics/Business.png";
import marketingImg from "../assets/project pics/Market.png";

export default function Projects() {
  return (
    <main className="page">
      {/* INTRO */}
      <section className="section">
        <h1 className="h1">Our Projects</h1>
        <p className="p muted">
          Each subsystem plays a critical role in building a competitive lunar
          excavation rover. Together, these teams turn ideas into flight-ready
          systems.
        </p>
      </section>

      {/* SPLIT CONTAINER */}
      <section className="section">
        <div className="projectsSplit">
          
          {/* TECHNICAL */}
          <div className="projectsColumn">
            <h2 className="h2">Technical</h2>

            <ProjectStrip
              title="Excavator Mechanical"
              desc="Designing and fabricating the excavation system responsible for efficient regolith collection."
              color="rgba(124, 89, 241, 0.18)"
              img={excavatorImg}
            />

            <ProjectStrip
              title="Depositor Mechanical"
              desc="Developing reliable mechanisms to safely transport and deposit regolith under competition constraints."
              color="rgba(124, 89, 241, 0.22)"
              img={depositorImg}
            />

            <ProjectStrip
              title="Embedded"
              desc="Building low-level firmware and control logic that connects software to hardware."
              color="rgba(124, 89, 241, 0.26)"
              img={embeddedImg}
            />

            <ProjectStrip
              title="Electrical"
              desc="Designing power distribution, wiring, and PCB systems that keep the rover running."
              color="rgba(124, 89, 241, 0.30)"
              img={electricalImg}
            />
          </div>

          {/* ADMINISTRATIVE */}
          <div className="projectsColumn">
            <h2 className="h2">Administrative</h2>

            <ProjectStrip
              title="Outreach"
              desc="Engaging the community through STEM education, demonstrations, and public events."
              color="rgba(255, 140, 105, 0.22)"
              img={outreachImg}
            />

            <ProjectStrip
              title="Business"
              desc="Managing funding, sponsorships, logistics, and long-term sustainability."
              color="rgba(255, 140, 105, 0.26)"
              img={businessImg}
            />

            <ProjectStrip
              title="Marketing"
              desc="Handling branding, media, and communication to represent the team professionally."
              color="rgba(255, 140, 105, 0.30)"
              img={marketingImg}
            />
          </div>

        </div>
      </section>
    </main>
  );
}

/* ---------- COMPONENT ---------- */

function ProjectStrip({ title, desc, color, img }) {
  return (
    <div className="projectStrip" style={{ background: color }}>
      <div className="projectStrip__image">
        <img src={img} alt={title} />
      </div>

      <div className="projectStrip__content">
        <h3 className="projectStrip__title">{title}</h3>
        <p className="projectStrip__desc">{desc}</p>
      </div>
    </div>
  );
}
