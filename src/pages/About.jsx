import officer1 from "../assets/Officers/officer-1.jpg";
import officer2 from "../assets/Officers/officer-2.jpg";
import officer3 from "../assets/Officers/officer-3.jpg";
import officer4 from "../assets/Officers/officer-4.jpg";
import officer5 from "../assets/Officers/officer-5.jpg";
import officer6 from "../assets/Officers/officer-6.jpg";
import officer7 from "../assets/Officers/officer-7.jpg";
import officer8 from "../assets/Officers/officer-8.jpg";
import officer9 from "../assets/Officers/officer-9.jpg";
import officer10 from "../assets/Officers/officer-10.jpg";

const officers = [
  { name: "Shashi Rajesh", role: "Director", img: officer1 },
  { name: "Swetha Prakash", role: "Director Shadow", img: officer2 },
  { name: "Rhoan Egemo", role: "Business Lead", img: officer3 },
  { name: "Pooja Vennamaneni", role: "Outreach Lead", img: officer4 },
  { name: "Abi Jeffery", role: "Marketing Lead", img: officer5 },
  { name: "Ian Meyer", role: "Chief Engineer", img: officer6 },
  { name: "Arihant Bose", role: "Mechanical Lead", img: officer7 },
  { name: "Jonas Marruffo", role: "Mechanical Lead", img: officer8 },
  { name: "Van Tran", role: "Electrical Lead", img: officer9 },
  { name: "Matthew Krzewinski", role: "Embedded Lead", img: officer10 },
];

export default function About() {
    const half = Math.ceil(officers.length / 2);
const topOfficers = officers.slice(0, half);
const bottomOfficers = officers.slice(half);

  return (
    <main className="page">
      {/* INTRO */}
      <section className="section">
        <h1 className="h1">About Us</h1>
        <p className="p muted">
          Comet Aerobotics is built by students. Meet the people
          leading the mission.
        </p>
      </section>
       {/* MEMBERS */}
      <section className="section">
            <h2 className="h2">Our Members</h2>
            <div className="card">
              <p className="p">
                Our members are the heart of Comet Aerobotics. They are builders, coders, designers, and leaders
                who show up ready to learn. We train through hands-on subsystem work, mentorship, workshops, and
                real engineering processes, helping students grow confidence, technical depth, and
                industry-ready teamwork skills.
              </p>
            </div>
      </section> 
      {/* OFFICERS */}
      <section className="section">
        <h2 className="h2">Officers</h2>

        <div className="officersGrid">
  <div className="officersRow">
    {topOfficers.map((o) => (
      <OfficerCard key={o.name} {...o} />
    ))}
  </div>

  <div className="officersRow">
    {bottomOfficers.map((o) => (
      <OfficerCard key={o.name} {...o} />
    ))}
  </div>
</div>

      </section>

      
    </main>
  );
}

function OfficerCard({ name, role, img }) {
  return (
    <div className="officerCard">
      <div className="officerCard__imgWrap">
        <img className="officerCard__img" src={img} alt={name} />
      </div>

      <div className="officerCard__meta">
        <div className="officerCard__name">{name}</div>
        <div className="officerCard__role">{role}</div>
      </div>
    </div>
  );
}
