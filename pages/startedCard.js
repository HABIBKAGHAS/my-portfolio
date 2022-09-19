import Image from "next/image";
export default function StartedCard() {
  return (
    <div className="card-started" id="home-card">
      <div className="profile">
        <div className="slide bg-[url('/back.jpeg')]"></div>
        <div className="image">
          <Image src="/Habib.jpg" width={250} height={250} alt="Habib Kaghas" />
        </div>

        <div className="title">Habib Kaghas</div>
        <div className="subtitle subtitle-typed">
          <div className="typing-title">
            <p>Full Stack Developer</p>
            <p>Blockchain</p>
            <p>NodeJS</p>
            <p>AWS</p>
          </div>
        </div>

        <div className="social">
          <a
            href="https://twitter.com/habib79243709"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="fa fa-twitter"></span>
          </a>
          <a
            href="https://github.com/HABIBKAGHAS"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="fa fa-github"></span>
          </a>
          <a
            href="https://www.linkedin.com/in/habib-kaghas/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="fa fa-linkedin"></span>
          </a>
        </div>

        <div className="lnks">
          <a href="/Habib Kaghas Resume.pdf" target="_blank" className="lnk">
            <span className="text">Download CV</span>
          </a>
          <a href="#" className="lnk discover">
            <span className="text">Contact Me</span>
          </a>
        </div>
      </div>
    </div>
  );
}
