const description =
  "A front-end web developer based in the Philippines. He specializes in creative development, using modern technologies to create interactive and responsive websites.";

const imgUrl = "https://photos.app.goo.gl/b2Y8kbjqr7pu8UAu9";

export default {
  title: "Joseph Dale Bañares - Creative Developer",
  description,
  openGraph: {
    type: "website",
    url: "https://daleban.tech",
    title: "Joseph Dale Bañares - Creative Developer",
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
    site_name: "Joseph Dale Bañares - Creative Developer",
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
