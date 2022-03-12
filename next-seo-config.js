const description =
  "Front-end developer based in the Philippines. A creative developer with a passion for building beautiful and interactive websites.";

const imgUrl =
  "https://raw.githubusercontent.com/hyamero/portfolio/dev/public/img/Footer.png";

export default {
  title: "Joseph Dale Bañares - Creative Developer",
  description,
  openGraph: {
    type: "website",
    url: "https://daleban.tech",
    title: "Dale Bañares - Creative Developer",
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
    site_name: "Joseph Dale Bañares",
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
