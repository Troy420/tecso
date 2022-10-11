import {
  ibm,
  huawei,
  dell,
  netapp,
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  dataCenter,
  icons8HW,
  icons8Services,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "product",
    title: "Product",
  },
  {
    id: "clients",
    title: "Clients",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: dataCenter,
    title: "Data Center Hardware Sales ",
    content: "New and preowned networking, server, and storage equipment ",
  },
  {
    id: "feature-2",
    icon: icons8HW,
    title: "Hardware Maintenance",
    content:
      "Multi-vendor support for storage, server, and networking hardware.",
  },
  {
    id: "feature-3",
    icon: icons8Services,
    title: "Professional Services",
    content: "Flexible, dependable IT Support services.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Everytime I call for assistance, everyone I speak to is very helpful and knowledgeable. I appreciate it!!",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Always reliable and fast, even after I leave for the day, I can always count on you guys to get requests done. Thank you!",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It has been a pleasure working with you and your staff, and I can only rave over the high standards that you have maintained relative to our hardware and software.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "$230M+",
  },
];

export const footerLinks = [
  {
    title: "Contacts",
    details: [
      {
        name: "Email",
        detail: "bintanginformasiteknologi@gmail.com",
      },
      {
        name: "Address",
        detail:
          "Ciputra International Lantai 17 Unit 2, Jalan Lingkar Luar Barat Nomor 101",
      },
      // {
      //   name: "Phone",
      //   detail: "+62 12121212",
      // },
    ],
  },
  // {
  //   title: "Partner",
  //   links: [
  //     {
  //       name: "Our Partner",
  //       link: "https://www.evernex.com/",
  //     },
  //     {
  //       name: "Become a Partner",
  //       link: "https://wa.me/628161816821?text=Hi+IT+support%21+I+would+like+to+become+your+partner.+What+should+I+do%3F",
  //     },
  //   ],
  // },
  // {
  //   title: "Community",
  //   links: [
  //     {
  //       name: "Help Center",
  //       link: "https://www.hoobank.com/help-center/",
  //     },
  //     {
  //       name: "Partners",
  //       link: "https://www.hoobank.com/partners/",
  //     },
  //     {
  //       name: "Suggestions",
  //       link: "https://www.hoobank.com/suggestions/",
  //     },
  //     {
  //       name: "Blog",
  //       link: "https://www.hoobank.com/blog/",
  //     },
  //     {
  //       name: "Newsletters",
  //       link: "https://www.hoobank.com/newsletters/",
  //     },
  //   ],
  // },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: ibm,
  },
  {
    id: "client-2",
    logo: dell,
  },
  {
    id: "client-3",
    logo: huawei,
  },
  {
    id: "client-4",
    logo: netapp,
  },
];
