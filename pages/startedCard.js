import Image from "next/image";
export default function StartedCard() {
  return (
    <div className="card-started" id="home-card">
      <div className="profile">
        <div className="slide bg-[url('/Background.jpg')]"></div>
        <div className="image">
          <Image src="/Habib.jpg" width={150} height={150} alt="Ryan Adlard" />
        </div>

        <div className="title">Habib Kaghas</div>
        <div className="subtitle subtitle-typed">
          <div className="typing-title">
            <p>Full Stack Developer</p>
            <p>Blockchain</p>
            <p>NodeJS</p>
          </div>
        </div>

        <div className="social">
          <a href="https://twitter.com/habib79243709">
            <span className="fa fa-twitter"></span>
          </a>
          <a href="https://github.com/HABIBKAGHAS">
            <span className="fa fa-github"></span>
          </a>
          <a href="https://www.linkedin.com/in/habib-kaghas/">
            <span className="fa fa-linkedin"></span>
          </a>
        </div>

        <div className="lnks">
          <a href="#" className="lnk">
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
