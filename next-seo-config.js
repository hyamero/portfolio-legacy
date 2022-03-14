const description =
  "Joseph Dale Bañares is a Front-End Developer based in the Philippines. He is an autodidact with a passion for building beautiful and interactive websites.";

const imgUrl =
  "https://raw.githubusercontent.com/hyamero/portfolio/main/public/img/Thumbnail.png";

export default {
  title: "Joseph Dale Bañares | Creative Developer",
  description,
  openGraph: {
    type: "website",
    url: "https://daleban.tech",
    title: "Dale Bañares | Creative Developer",
    description,
    images: [
      {
        url: imgUrl,
        width: 800,
        height: 600,
        alt: "Dale Bañares",
        type: "image/png",
      },
      {
        url: imgUrl,
        width: 900,
        height: 800,
        alt: "Dale Bañares",
        type: "image/png",
      },
      {
        url: imgUrl,
      },
    ],
    site_name: "Portfolio",
    locale: "en_US",
  },
  twitter: {
    cardType: "summary_large_image",
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
      type: "image/x-icon",
    },
  ],
};
