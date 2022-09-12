import Image from "next/image";
export default function Header() {
  return (
    <header className="header">
      <div className="profile">
        <div className="image">
          <a href="#">
            <Image
              src="/back.jpeg"
              width={150}
              height={150}
              alt="Ryan Adlard"
            />
          </a>
        </div>
        <div className="title w-50 block">Habib Kaghas</div>
        <div className="subtitle subtitle-typed">
          <div className="typing-title">
            <p>Full Stack Developer</p>
            <p>Blockchain</p>
            <p>NodeJS</p>
          </div>
        </div>
      </div>

      <div className="top-menu">
        <ul>
          <li className="active">
            <a href="#about-card">
              <span className="icon ion-person"></span>
              <span className="link">About</span>
            </a>
          </li>
          <li>
            <a href="#resume-card">
              <span className="icon ion-android-list"></span>
              <span className="link">Resume</span>
            </a>
          </li>
          <li>
            <a href="#works-card">
              <span className="icon ion-laptop"></span>
              <span className="link">Works</span>
            </a>
          </li>
          <li>
            <a href="#contacts-card">
              <span className="icon ion-at"></span>
              <span className="link">Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
