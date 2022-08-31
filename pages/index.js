import Head from "next/head";
import Script from "next/script";
import Background from "./background";
import Header from "./header";
import StartedCard from "./startedCard";
import AboutCard from "./aboutCard";
import ResumeCard from "./resumeCard";
import WorksCard from "./worksCard";
import ContactCard from "./contactCard";
import SideBar from "./sidebar";
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
      <Background />

      <div
        className="container opened"
        data-animation-in="fadeInLeft"
        data-animation-out="fadeOutLeft"
      >
        <Header />
        <StartedCard />
        <AboutCard />
        <ResumeCard />
        <WorksCard />
        <ContactCard />
      </div>
    </div>
  );
}
