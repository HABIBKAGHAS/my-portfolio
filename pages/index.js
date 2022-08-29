import Head from "next/head";
import Image from "next/image";
import Script from "next/script";

export default function Home() {
  return (
    <div>
      <Script src="/template/js/jquery.min.js"></Script>
      <Script src="/template/js/jquery.validate.js"></Script>
      <Script src="/template/js/jquery.magnific-popup.js"></Script>
      <Script src="/template/js/imagesloaded.pkgd.js"></Script>
      <Script src="/template/js/isotope.pkgd.js"></Script>
      <Script src="/template/js/jquery.slimscroll.js"></Script>
      <Script src="/template/js/owl.carousel.js"></Script>
      <Script src="/template/js/typed.js"></Script>
      <Script src="https://use.fontawesome.com/8da76d029b.js"></Script>

      <Script src="/template/js/scripts.js"></Script>
      <Head>
        <title>Habib Kaghas - Portfolio</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="page new-skin">
        <div className="preloader">
          <div className="centrize full-width">
            <div className="vertical-center">
              <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="background gradient">
          <ul className="bg-bubbles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

        <div
          className="container opened"
          data-animation-in="fadeInLeft"
          data-animation-out="fadeOutLeft"
        >
          <header className="header">
            <div className="profile">
              <div className="image">
                <a href="#">
                  <Image
                    src="/Habib.jpg"
                    width={50}
                    height={50}
                    alt="Ryan Adlard"
                  />
                </a>
              </div>
              <div className="title">Ryan Adlard</div>
              <div className="subtitle subtitle-typed">
                <div className="typing-title">
                  <p>Web Designer</p>
                  <p>Developer</p>
                  <p>Freelancer</p>
                </div>
              </div>
            </div>

            <a href="#" className="menu-btn">
              <span></span>
            </a>

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
                    <span className="icon ion-paintbrush"></span>
                    <span className="link">Works</span>
                  </a>
                </li>
                <li>
                  <a href="#blog-card">
                    <span className="icon ion-chatbox-working"></span>
                    <span className="link">Blog</span>
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
        </div>
      </div>
    </div>
  );
}
