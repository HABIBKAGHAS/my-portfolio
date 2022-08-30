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

          <div className="card-started" id="home-card">
            <div className="profile">
              <div
                className="slide"
                style="background-image: url(images/bg.jpg);"
              ></div>
              <div className="image">
                <Image
                  src="/Habib.jpg"
                  width={150}
                  height={150}
                  alt="Ryan Adlard"
                />
              </div>

              <div className="title">Habib Kaghas</div>
              <div className="subtitle subtitle-typed">
                <div className="typing-title">
                  <p>Web Designer</p>
                  <p>Developer</p>
                  <p>Freelancer</p>
                </div>
              </div>

              <div className="social">
                <a href="https://dribbble.com/">
                  <span className="fa fa-dribbble"></span>
                </a>
                <a href="https://twitter.com/">
                  <span className="fa fa-twitter"></span>
                </a>
                <a href="https://github.com/">
                  <span className="fa fa-github"></span>
                </a>
                <a href="https://www.spotify.com/">
                  <span className="fa fa-spotify"></span>
                </a>
                <a href="https://stackoverflow.com/">
                  <span className="fa fa-stack-overflow"></span>
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

          			<div class="card-inner animated active" id="about-card">
				<div class="card-wrap">

					<!-- 
						About 
					-->
					<div class="content about">

						<!-- title -->
						<div class="title">About Me</div>

						<!-- content -->
						<div class="row">
							<div class="col col-d-6 col-t-6 col-m-12 border-line-v">
								<div class="text-box">
									<p>
										I am Ryan Adlard, web designer from USA, California. I have rich experience in 
										web site design and building and customization, also I am good at wordpress. 
										I love to talk with you about our unique.
									</p>
								</div>
							</div>
							<div class="col col-d-6 col-t-6 col-m-12 border-line-v">
								<div class="info-list">
									<ul>
										<li><strong>Age . . . . .</strong> 24</li>
										<li><strong>Residence . . . . .</strong> USA</li>
										<li><strong>Freelance . . . . .</strong> Available</li>
										<li><strong>Address . . . . .</strong> California, USA</li>
									</ul>
								</div>
							</div>
							<div class="clear"></div>
						</div>

					</div>

					<!--
						Services
					-->
					<div class="content services">

						<!-- title -->
						<div class="title">My Services</div>

						<!-- content -->
						<div class="row service-items border-line-v">
							<!-- service item -->
							<div class="col col-d-6 col-t-6 col-m-12 border-line-h">
								<div class="service-item">
									<div class="icon">
										<span class="fa fa-code"></span>
									</div>
									<div class="name">
										<span >
										Web Development								</span>
									</div>
									<div class="desc">
										<div >
											<p>Modern and mobile-ready website that will help you reach all of your marketing.</p>
										</div>
									</div>
								</div>
							</div>
							<!-- service item -->
							<div class="col col-d-6 col-t-6 col-m-12 border-line-h">
								<div class="service-item">
									<div class="icon">
										<span class="fa fa-music"></span>
									</div>
									<div class="name">
										<span >
										Music Writing								</span>
									</div>
									<div class="desc">
										<div >
											<p>Music copying, writing, creating, transcription, arranging and composition services.</p>
										</div>
									</div>
								</div>
							</div>
							<!-- service item -->
							<div class="col col-d-6 col-t-6 col-m-12 border-line-h">
								<div class="service-item">
									<div class="icon">
										<span class="fa fa-buysellads"></span>
									</div>
									<div class="name">
										<span >
										Advetising								</span>
									</div>
									<div class="desc">
										<div >
											<p>Advertising services include television, radio, print, mail, and web apps.</p>
										</div>
									</div>
								</div>
							</div>
							<!-- service item -->
							<div class="col col-d-6 col-t-6 col-m-12 border-line-h">
								<div class="service-item">
									<div class="icon">
										<span class="fa fa-gamepad"></span>
									</div>
									<div class="name">
										<span >
										Game Development								</span>
									</div>
									<div class="desc">
										<div >
											<p>Developing memorable and unique mobile android, ios and video games.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="clear"></div>

					</div>

					<!--
						Price Tables
					-->
					<div class="content pricing">

						<!-- title -->
						<div class="title">Pricing</div>

						<!-- content -->
						<div class="row pricing-items">

							<!-- pricing item -->
							<div class="col col-d-6 col-t-6 col-m-12 border-line-v">
								<div class="pricing-item">
									<div class="icon"><i class="fa fa-battery-half"></i></div>
									<div class="name">Basic</div>
									<div class="amount">
										<span class="dollar">$</span>
										<span class="number">22</span>
										<span class="period">hour</span>
									</div>
									<div class="feature-list">
										<ul>
											<li>Web Development</li>
											<li>Advetising</li>
											<li>Game Development</li>
											<li class="disable">Music Writing</li>
											<li class="disable">Photography <strong>new</strong></li>
										</ul>
									</div>
									<div class="lnks">
										<a href="#" class="lnk">
											<span class="text">Buy Basic</span>
										</a>
									</div>
								</div>
							</div>

							<!-- pricing item -->
							<div class="col col-d-6 col-t-6 col-m-12 border-line-v">
								<div class="pricing-item">
									<div class="icon"><i class="fa fa-battery-full"></i></div>
									<div class="name">Pro</div>
									<div class="amount">
										<span class="dollar">$</span>
										<span class="number">48</span>
										<span class="period">hour</span>
									</div>
									<div class="feature-list">
										<ul>
											<li>Web Development</li>
											<li>Advetising</li>
											<li>Game Development</li>
											<li>Music Writing</li>
											<li>Photography <strong>new</strong></li>
										</ul>
									</div>
									<div class="lnks">
										<a href="#" class="lnk">
											<span class="text">Buy Pro</span>
										</a>
									</div>
								</div>
							</div>

							<div class="clear"></div>
						</div>

					</div>

					<!--
						Fun Fact
					-->
					<div class="content fuct">

						<!-- title -->
						<div class="title">Fun Fact</div>

						<!-- content -->
						<div class="row fuct-items">

							<!-- fuct item -->
							<div class="col col-d-3 col-t-3 col-m-6 border-line-v">
								<div class="fuct-item">
									<div class="icon"><span class="fa fa-music"></span></div>
									<div class="name">80 Albumes Listened</div>
								</div>
							</div>

							<!-- fuct item -->
							<div class="col col-d-3 col-t-3 col-m-6 border-line-v">
								<div class="fuct-item">
									<div class="icon"><span class="fa fa-trophy"></span></div>
									<div class="name">15 Awards Won</div>
								</div>
							</div>

							<!-- fuct item -->
							<div class="col col-d-3 col-t-3 col-m-6 border-line-v">
								<div class="fuct-item">
									<div class="icon"><span class="fa fa-coffee"></span></div>
									<div class="name">1 000 Cups of coffee</div>
								</div>
							</div>

							<!-- fuct item -->
							<div class="col col-d-3 col-t-3 col-m-6 border-line-v">
								<div class="fuct-item">
									<div class="icon"><span class="fa fa-flag"></span></div>
									<div class="name">10 Countries Visited</div>
								</div>
							</div>

							<div class="clear"></div>
						</div>

					</div>

					<!--
						Clients
					-->
					<div class="content clients">

						<!-- title -->
						<div class="title">Clients</div>

						<!-- content -->
						<div class="row client-items">

							<!-- client item -->
							<div class="col col-d-3 col-t-3 col-m-6 border-line-v">
								<div class="client-item">
									<div class="image">
										<a target="_blank" href="https://www.google.com">
											<img src="images/clients/client_1.png" alt="" />
										</a>
									</div>
								</div>
							</div>

							<!-- client item -->
							<div class="col col-d-3 col-t-3 col-m-6 border-line-v">
								<div class="client-item">
									<div class="image">
										<a target="_blank" href="https://www.google.com">
											<img src="images/clients/client_2.png" alt="" />
										</a>
									</div>
								</div>
							</div>

							<!-- client item -->
							<div class="col col-d-3 col-t-3 col-m-6 border-line-v">
								<div class="client-item">
									<div class="image">
										<a target="_blank" href="https://www.google.com">
											<img src="images/clients/client_3.png" alt="" />
										</a>
									</div>
								</div>
							</div>

							<!-- client item -->
							<div class="col col-d-3 col-t-3 col-m-6 border-line-v">
								<div class="client-item">
									<div class="image">
										<a target="_blank" href="https://www.google.com">
											<img src="images/clients/client_4.png" alt="" />
										</a>
									</div>
								</div>
							</div>

							<div class="clear"></div>
						</div>

					</div>

					<!-- Quote -->
					<div class="content quote">

						<!-- title -->
						<div class="title">
							<span >Quote</span>
						</div>

						<!-- content -->
						<div class="row">
							<div class="col col-d-12 col-t-12 col-m-12 border-line-v">
								<div class="revs-item">
									<div class="text">
										<div >
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.							
										</div>
									</div>
									<div class="user">
										<div class="img">
											<img src="images/profile.png" alt="Ryan Adlard" />
										</div>
										<div class="info">
											<div class="name">Ryan Adlard</div>
											<div class="company">Web Designer</div>
										</div>
										<div class="clear"></div>
									</div>
								</div>
							</div>
							<div class="clear"></div>
						</div>

					</div>

				</div>
			</div>

        </div>
      </div>
    </div>
  );
}
