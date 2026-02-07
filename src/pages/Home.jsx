import { useEffect, useMemo, useState } from "react";
import passionImg from "../assets/passion.jpg";

export default function Home() {
  const [fade, setFade] = useState(0); // 0..1
  const fadeDistance = 520; // px to fully fade hero

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      const t = Math.min(1, Math.max(0, y / fadeDistance));
      setFade(t);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const heroStyle = useMemo(
    () => ({
      opacity: 1 - fade,
      transform: `translateY(${fade * -18}px)`,
    }),
    [fade]
  );

  return (
    <main className="home">
      {/* HERO */}
      <section className="hero">
        <video className="hero__video" autoPlay muted loop playsInline>
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        <div className="hero__scrim" />

        <div className="hero__overlay" style={heroStyle}>
          <h1 className="hero__title gradientText">Comet Aerobotics</h1>
          <p className="hero__subtitle">
            Brought together by passion. Built for exploration.
          </p>

          <div className="hero__hint">Scroll ↓</div>
        </div>
      </section>

      {/* CONTENT AFTER HERO */}
      <section className="section">
        <div className="twoCol">
          <div className="twoCol__left">
            <img
                src={passionImg}
                alt="Comet Aerobotics team at work"
                className="twoCol__image"
             />
        </div>
          <div className="twoCol__right card">
            <h3 className="h3">Our Mission</h3>
            <p className="p">
              Comet Aerobotics is a multidisciplinary engineering team dedicated 
              to designing, building, and testing autonomous systems for extraterrestrial 
              excavation and surface operations. Our work focuses on developing a competitive 
              lunar mining rover capable of efficiently excavating, transporting, and depositing 
              regolith under real-world constraints, translating classroom theory into functional 
              hardware and software. Driven by a passion for exploration and innovation, we aim to bridge 
              the gap between academic learning and industry practice by equipping our members with hands-on 
              technical experience, systems-level thinking, and leadership skills. Our goal is to prepare the next generation 
              of engineers to solve complex challenges and shape the future of aerospace.
            </p>
          </div>
        </div>
      </section>
      <div style={{ height: 200 }} />

    </main>
  );
}