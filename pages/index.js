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
      <Script
        src="/template/js/jquery.min.js"
        strategy="beforeInteractive"
      ></Script>
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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta
          name="keywords"
          content="Web Developer, Full stack, Web3.0, DevOps, AWS, NodeJS, ReactJS."
        />
        <meta
          name="description"
          content="Experienced Project Lead Developer with a demonstrated history of working in the non-profit organization management industry. Skilled in English as a Second Language (ESL), Computer Science, NodeJS, ReactJS, Mobile Applications, and Java. Have great knowledge in Amazon Web Services (AWS), interestend in Web 3.0, BlockChain, Non-Fungible Tokens (NFTs), and crypto. Strong information technology professional with a Bachelor`s degree focused in Artificial Intelligence from Information Technology University (ITI)."
        />

        <meta property="og:locale" content="en_EN" />
        <meta property="og:site_name" content="Habib Kaghas - Portfolio" />
        <meta
          property="og:description"
          content="Experienced Project Lead Developer with a demonstrated history of working in the non-profit organization management industry. Skilled in English as a Second Language (ESL), Computer Science, NodeJS, ReactJS, Mobile Applications, and Java. Have great knowledge in Amazon Web Services (AWS), interestend in Web 3.0, BlockChain, Non-Fungible Tokens (NFTs), and crypto. Strong information technology professional with a Bachelor`s degree focused in Artificial Intelligence from Information Technology University (ITI)."
        />
        <meta property="og:type" content="portfolio" />
        <meta property="og:title" content="Habib Kaghas" />
        <meta
          property="og:image"
          content="https://media-exp1.licdn.com/dms/image/C4E16AQESjC87YPR50A/profile-displaybackgroundimage-shrink_350_1400/0/1655187040863?e=1668643200&v=beta&t=FTQQYld43xW89EDXcCbdtXsLd2LmBVePoFL4tp2uYgM"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Habib kaghas - Portfolio" />
        <meta
          property="twitter:description"
          content="Experienced Project Lead Developer with a demonstrated history of working in the non-profit organization management industry. Skilled in English as a Second Language (ESL), Computer Science, NodeJS, ReactJS, Mobile Applications, and Java. Have great knowledge in Amazon Web Services (AWS), interestend in Web 3.0, BlockChain, Non-Fungible Tokens (NFTs), and crypto. Strong information technology professional with a Bachelor`s degree focused in Artificial Intelligence from Information Technology University (ITI)."
        />
        <meta
          property="twitter:image"
          content="https://media-exp1.licdn.com/dms/image/C4E16AQESjC87YPR50A/profile-displaybackgroundimage-shrink_350_1400/0/1655187040863?e=1668643200&v=beta&t=FTQQYld43xW89EDXcCbdtXsLd2LmBVePoFL4tp2uYgM"
        />
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
