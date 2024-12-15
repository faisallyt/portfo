export const navItems = [
  { name: "About", link: "#about" },
  // { name: "Profiles", link: "#profiles" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  // { name: "Testimonials", link: "#testimonials" },
  {name:"Resume", link: "#resume" },
  { name: "Contact", link: "#contact" },
  
];

export const gridItems = [
  {
    id: 1,
    title: "I thrive on turning ideas into impactful digital solutions.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications & Remote work",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Bully Tracker Web App",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Repository Reviewer",
    des: "A Web App that reviews and Rates Your Github Repository's folder Structure",
    img: "/Repository-Reviewer.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/node.svg", "/redux.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Ocr Grocery List",
    des: "Grocery Items Detector From Image using Tesseract",
    img: "/Grocery-Ocr.png",
    iconLists: ["/fastApi.svg", "/tail.svg", "/js.svg", "/React.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "Casino",
    des: "A Luck Based Mine Casino Web App.",
    img: "/Casino.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/go.svg"],
    link: "/ui.aiimg.com",
  },
  // {
  //   id: 4,
  //   title: "Animated Apple Iphone 3D Website",
  //   des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
  //   img: "/p4.svg",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
  //   link: "/ui.apple.com",
  // },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Developer ",
    company: "Jaggery Consulting",
    desc: "Built a SEO Tool  using fastApi and React js, Used AWS SES , celery, redis to build a Emailing System ",
    className: "md:col-span-2",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/js.svg",
      "/Aws.svg",
      "redis.svg",
      "/redux.svg",
      "/go.svg",
      "/fastApi.svg",
      "/python.svg",
      "/postgres.svg",
      "/mysql.svg",
    ],
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Software Developer Intern",
    company: "Grocliq",
    desc: "Contributed in Building an AI Article Writer with SEO optimizations",
    className: "md:col-span-2", // change to md:col-span-2
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/js.svg",

      "/redux.svg",

      "/fastApi.svg",
      "/python.svg",
    ],
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Software Developer Intern",
    company: "Destino Technology",
    desc: "Contributed in Development of  a News Media Portal using  ",
    className: "md:col-span-2", // change to md:col-span-2
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/js.svg",
      "/node.svg",
      "/redux.svg",
      "/express.svg",
      "/mongodb.svg",
    ],
    thumbnail: "/exp3.svg",
  },
  // {
  //   id: 4,
  //   title: "Lead Frontend Developer",
  //   company: "Jaggery Consulting",
  //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
  //   className: "md:col-span-2",
  //   iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/node.svg", "/redux.svg"],
  //   thumbnail: "/exp4.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/faisallyt",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/Faisalllll_d",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/faisal-dilshad-8ba7181b8",
  },
  {
    id: 4,
    img: "/leetcode-logo.svg",
    link: "https://leetcode.com/u/fdiledu/",
  },
];

export const skills = [
  "/cpp.svg",
  "/js.svg",
  "/Typescript.svg",
  "/re.svg",
  "/Next.svg",
  "/tail.svg",
  "/node.svg",
  "/python.svg",
  "/express.svg",
  "/fastApi.svg",
  "/postgres.svg",
  "/mongodb.svg",
  "/mysql.svg",
  "/go.svg",
  "/Aws.svg",
  "redis.svg",
  "/redux.svg",
  "/Docker.svg",
  "/mongoose.svg",
  "/HTML5.svg",
  "/css.svg",
  "/Bootstrap.svg",
  "/mui.svg",
  "/shadcn.svg",
  "socket-io.svg",
  "/git-logo.svg",
  "/github.svg",
  "/postman.svg",
  "/swagger.svg",
];
