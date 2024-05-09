import { SectionProps } from "@/components/home/HomeSection";
import { Company } from "@/components/home/CompanyCarousel";
import { SlideProps } from "@/components/home/Slide";

export const mainHero: SectionProps = {
  title: "Business Data Science & Automation",
  subTitle: "Building Blocks For Success",
  content: (
    <div>
      Our cutting-edge tools are designed to automate your daily tasks, freeing
      you up to focus on what really matters. From boosting your online
      visibility and automating customer interactions to integrating seamlessly
      across platforms, we&apos;re here to help you leverage your data and transform
      your business operations.
    </div>
  ),
  image: "",
  linkTo: "",
};

export const homeSections: SectionProps[] = [
  {
    title: "Automated Organic Content and Seo Creation",
    subTitle:
      "Struggling to keep up with constant content creation and updates? Let our automated tools handle it and watch your traffic grow!",
    content: (
      <div>
        Easily attract more visitors and boost your sales with our{" "}
        <span className="font-bold text-blue-500">smart SEO</span> and
        <span className="font-bold text-blue-500">
          automated marketing tools
        </span>
        . Just set it up and watch your business grow! Our tools enable you to
        quickly create and{" "}
        <span className="font-bold text-blue-500">
          manage organic social media
        </span>
        content tailored for your target audience
      </div>
    ),
    image: "/images/HomeSections/Organic-Content-1.png",
    imageFirst: false,
    linkTo: "/blogs",
  },
  {
    title: "User friendly Data Science Tools",
    subTitle: "Streamline Your Operations with Smarter Solutions!",
    content: (
      <div>
        Facing tough choices with{" "}
        <span className="font-bold text-blue-500">too much or not enough</span>{" "}
        data? Our solutions work behind the scenes to streamline your workflows,
        gather your target users preferences ensuring you’re focusing on what
        counts. Our tools react to changes, optimize processes, and
        automatically adjust to new data, helping you stay{" "}
        <span className="font-bold text-blue-500">proactive and efficient</span>
      </div>
    ),
    image: "/images/HomeSections/Data-1.png",
    imageFirst: true,
    linkTo: "/blogs",
  },
  {
    title: "Streamline Customer Contact & Lead Acquisition",
    subTitle:
      "Tired of manually keeping up with customer queries and communications or Running out of leads?",
    content: (
      <div>
        Leverage our{" "}
        <span className="font-bold text-blue-500">
          proprietary lead scraping tools
        </span>{" "}
        and customer retention software to maintain a constant connection with
        your customers. Our system tracks interactions to{" "}
        <span className="font-bold text-blue-500">
          optimize communication strategies
        </span>
        , enhancing customer satisfaction and loyalty without the overhead of
        constant manual oversight.
      </div>
    ),
    image: "/images/HomeSections/Streamline-1.png",
    imageFirst: true,
    linkTo: "/blogs",
  },
  {
    title: "Seamless Integration Across Platforms",
    subTitle: "Is juggling multiple software solutions slowing you down?",
    content: (
      <div>
        Our platform integrates{" "}
        <span className="font-bold text-blue-500">
          seamlessly across your existing tools
        </span>
        , enhancing your workflow without disrupting what works. By connecting
        your services, we help you
        <span className="font-bold text-blue-500">
          {" "}
          manage everything from one central point
        </span>
        , simplifying your operations and saving you valuable time.
      </div>
    ),
    image: "/images/HomeSections/Integrations-1.png",
    imageFirst: false,
    linkTo: "/blogs",
  },
];

export const companies: Company[] = [
  { name: "google", image: "/images/Google cloud.png" },
  { name: "", image: "/images/Ebay.png" },
  { name: "", image: "/images/Tux.png" },
  { name: "", image: "/images/Spotify.png" },
  { name: "", image: "/images/Airbnb.png" },
  { name: "", image: "/images/Facebook.png" },
  { name: "", image: "/images/Coca Cola.png" },
  { name: "", image: "/images/Zoom.png" },
  { name: "", image: "/images/Creative Cloud.png" },
  { name: "", image: "/images/Netflix.png" },
  { name: "", image: "/images/Discord.png" },
  { name: "", image: "/images/Figma.png" },
  { name: "", image: "/images/Paypal.png" },
  { name: "", image: "/images/Adobe.png" },
];

const images = [
  "/images/reviews/Black Shirt.png",
  "/images/reviews/Green_Shirt.png",
  "/images/reviews/Pink_Girl.jpg",
];
function getRandomImage(): string {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

let imageIndex = 0;
function getNextImage(): string {
  const selectedImage = images[imageIndex];
  imageIndex = (imageIndex + 1) % images.length;
  return selectedImage;
}
export const sildes: SlideProps[] = [
  {
    name: "Angel Charles",
    designation: "Satisfied Customer",
    image: getNextImage(), // Replace with actual image path
    content:
      "Awesome work they do honestly love how I can easily get unstuck help out and don’t use it for malicious intent",
  },
  {
    name: "Rotunda Coleman",
    designation: "Happy Customer",
    image: getNextImage(), // Replace with actual image path
    content:
      "Restructured my whole website for me at a reasonable price and implemented what I asked for in a timely manner, definitely recommend. Response from the owner: Thank you Rotunda, a pleasure working with you!",
  },
  {
    name: "Eduardo C",
    designation: "Content User",
    image: getNextImage(), // Replace with actual image path
    content:
      "Cyberoni was amazing they took our static website and turned It into something beautiful",
  },
  {
    name: "Dee Simon",
    designation: "Regular Client",
    image: getRandomImage(), // Replace with actual image path
    content: "Easy to use site! Competitive prices too",
  },
  // New slides

  {
    name: "Rotunda Coleman",
    designation: "Happy Customer",
    image: getRandomImage(), // Default image path
    content:
      "Restructured my whole website for me at a reasonable price and implemented what I asked for in a timely manner, definitely recommend",
  },
  {
    name: "Eduardo C",
    designation: "Content User",
    image: getRandomImage(), // Default image path
    content:
      "Cyberoni was amazing they took our static website and turned it into something beautiful",
  },
  {
    name: "Dee Simon",
    designation: "Regular Client",
    image: getRandomImage(), // Default image path
    content: "Easy to use site! Competitive prices too",
  },
  {
    name: "Uncle Smiley The DJ",
    designation: "Professional DJ",
    image: getRandomImage(), // Default image path
    content:
      "The team at Cyberoni worked wonders on my DJ website. Their attention to detail and understanding of the music industry really helped bring my site to life. It's not just a website, it's a digital showcase of my DJ career!",
  },
  {
    name: "Zachary George",
    designation: "Corporate Partner",
    image: getRandomImage(), // Default image path
    content:
      "Working with Cyberoni to create custom software for Comcast was a game-changer. Their expertise in software solutions and proactive approach to problem-solving made the entire process seamless and highly effective.",
  },
  {
    name: "Jerome Jones",
    designation: "Grateful Parent",
    image: getRandomImage(), // Default image path
    content:
      "As a single dad, setting up surveillance at home was daunting. Cyberoni made it simple, affordable, and secure. Their team was empathetic and professional, ensuring my home was safe for my kids. Highly recommend their services!",
  },
  // Add more slides as needed
];


export const softwareProducts = [
  {
    image: "/images/Zoom.png",
    title: "Zoom",
    subTitle: "Video Calling",
  }, {
    image: "/images/Creative Cloud.png",
    title: "Creative Cloud",
    subTitle: "Video Editing",
  },

  {
    image: "/images/Slack.png",
    title: "Discord",
    subTitle: "Discord",
  },
  {
    image: "/images/Zoom.png",
    title: "Zoom",
    subTitle: "Video Calling",
  }, {
    image: "/images/Creative Cloud.png",
    title: "Creative Cloud",
    subTitle: "Video Editing",
  },

  {
    image: "/images/Slack.png",
    title: "Discord",
    subTitle: "Discord",
  },
  {
    image: "/images/Zoom.png",
    title: "Zoom",
    subTitle: "Video Calling",
  }, {
    image: "/images/Creative Cloud.png",
    title: "Creative Cloud",
    subTitle: "Video Editing",
  },

  {
    image: "/images/Slack.png",
    title: "Discord",
    subTitle: "Discord",
  },
  {
    image: "/images/Zoom.png",
    title: "Zoom",
    subTitle: "Video Calling",
  }, {
    image: "/images/Creative Cloud.png",
    title: "Creative Cloud",
    subTitle: "Video Editing",
  },

  {
    image: "/images/Slack.png",
    title: "Discord",
    subTitle: "Discord",
  },
  {
    image: "/images/Zoom.png",
    title: "Zoom",
    subTitle: "Video Calling",
  }, {
    image: "/images/Creative Cloud.png",
    title: "Creative Cloud",
    subTitle: "Video Editing",
  },

  {
    image: "/images/Slack.png",
    title: "Discord",
    subTitle: "Discord",
  },
  {
    image: "/images/Zoom.png",
    title: "Zoom",
    subTitle: "Video Calling",
  }, {
    image: "/images/Creative Cloud.png",
    title: "Creative Cloud",
    subTitle: "Video Editing",
  },

  {
    image: "/images/Discord.png",
    title: "Discord",
    subTitle: "Discord",
  },


]

export const softwareCategories = [{ name: 'Video Calling' }, { name: 'Social Media' }, { name: 'Video Editing' }, { name: 'Messaging' }]