import Head from 'next/head';

const Meta = ({ title, keywords, description, img }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />

      <meta name="theme-color" content="#ffffff" />
      <link rel="icon" href="/favicon/favicon.ico" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />

      {/* <!-- Open Graph --> */}
      <meta
        property="article:author"
        content="https://www.facebook.com/kulshionline/"
      />
      <meta property="og:locale" content="en_EN" />
      <meta property="og:site_name" content="kulshi online" />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="ecommerce" />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={img} />
      {/* <meta property="og:url" content={`https://kulshi.com${canonical}`} /> */}

      {/* <!-- Twitter --> */}

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={img} />
    </Head>
  );
};

Meta.defaultProps = {
  title: 'Kulshi',
  keywords:
    'Kulshi, iraq, erbil, ecommerce, items, iraqi erbil, hawler, shop, cars',
  description:
    'Kulshi Online is one of the best e-commerce platforms in Iraq. buy and sell through Kulshi Online. covering motors, electronics, and many other categories.',
  img: 'https://kulshi-bucket.s3.amazonaws.com/2022/June/8fb5164f-08ef-41d4-93df-ef26768b020d-1',
};

export default Meta;
