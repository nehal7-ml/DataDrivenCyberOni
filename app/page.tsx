import CalendlyPopup from "@/components/Calendly";
import ContactForm from "@/components/ContactForm";
import CompanyCarousel, { Company } from "@/components/home/CompanyCarousel";
import EmailLetter from "@/components/home/EmailLetter";
import Section, { SectionProps } from "@/components/home/HomeSection";
import Slide, { SlideProps } from "@/components/home/Slide";
import SlideShow from "@/components/home/SlideShow";
import Image from "next/image";
export default async function Home() {
  return (
    <>
      <div className="z-30 w-full dark:text-white ">
        <section className="container mx-auto flex flex-col text-center lg:text-left">
          <div className="flex flex-col-reverse items-center justify-center lg:flex-row">
            <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start ">
              <div className="m-3 w-fit bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7]  bg-clip-text text-5xl font-bold text-transparent">
                With Ai
              </div>
              <div className="m-3 text-5xl font-bold">
                Revolutionize Your Business
              </div>
              <div className="m-3">
                Our ambition is to reshape how you envision the use of your data
                to automate mundane tasks.
              </div>
              <div className="mx-3 h-[1px] w-full bg-gradient-purple" />
              <div className="flex justify-center lg:justify-start">
                <div
                  id="__next"
                  className="m-3 w-fit rounded-full bg-gradient-purple px-[0.1rem] py-[0.1rem]"
                >
                  <CalendlyPopup
                    CTAText="Schedule a consultation"
                    className="rounded-full bg-white p-[0.4rem] dark:bg-gray-900"
                  />
                </div>
              </div>
            </div>
            <Image
              src={"/images/hero-1.png"}
              alt={"hero-1"}
              height={500}
              width={500}
            ></Image>
          </div>

          <div className="container my-4">
            <CompanyCarousel cards={companies}></CompanyCarousel>
          </div>
        </section>

        {homeSections.slice(0, 2).map((item, index) => {
          return (
            <div key={index}>
              <Section
                title={item.title}
                subTitle={item.subTitle}
                content={item.content}
                image={item.image}
                imageFirst={item.imageFirst}
                key={index}
                linkTo={item.linkTo}
              ></Section>
            </div>
          );
        })}

        <section className="container mx-auto">
          <SlideShow
            slides={sildes.map((card, index) => {
              return (
                <div key={index}>
                  <Slide
                    image={card.image}
                    name={card.name}
                    content={card.content}
                    designation={card.designation}
                    key={index}
                  ></Slide>
                </div>
              );
            })}
          ></SlideShow>
        </section>
        {homeSections.slice(2, 5).map((item, index) => {
          return (
            <div key={index}>
              <Section
                title={item.title}
                subTitle={item.subTitle}
                content={item.content}
                image={item.image}
                imageFirst={item.imageFirst}
                key={index}
                linkTo={item.linkTo}
              ></Section>
            </div>
          );
        })}

        <section className="container mx-auto my-10">
          <EmailLetter></EmailLetter>
        </section>

        <section className="conatiner flex flex-col-reverse lg:flex-row lg:px-10">
          <div className="flex-1">
            <ContactForm></ContactForm>
          </div>
          <div className="flex items-center justify-center lg:h-full lg:w-1/2">
            <Image
              className="h-full w-full flex-1 object-contain"
              src={"/images/contact-form.png"}
              alt="contact"
              height={1280}
              width={1200}
            ></Image>
          </div>
        </section>
      </div>
    </>
  );
}

const homeSections: SectionProps[] = [
  {
    title: "Data Driven Solutions",
    subTitle:
      "Transform, Automate, and Personalize: The AI-Driven Journey to Business Success!",
    content: (
      <div>
        Imagine a world where every decision is backed by data insights, where
        automation streamlines operations, and where every customer feels
        they&apos;re getting a uniquely tailored experience. This is not a
        dream; it&apos;s a reality for our partners. Dive into the success
        stories of businesses that took the leap with Cyberoni&apos;s AI
        solutions and saw their operations evolve in ways they never imagined.
      </div>
    ),
    image: "/images/hero-2.png",
    imageFirst: false,
    linkTo: "/blogs",
  },
  {
    title: "Solutions Tailored For You",
    subTitle:
      "Harness the Power of YOUR Data with Cyberoni's Expert AI Models!",
    content: (
      <div>
        Every business is unique, and so is its data. Using AI models that
        haven&apos;t been trained on your specific business data is like trying
        to fit a square peg in a round hole. At Cyberoni, our deep expertise in
        data science allows us to craft AI solutions tailored just for you. By
        leveraging your own data, we ensure accurate predictions, unparalleled
        efficiency, and empowered decision-making.{" "}
      </div>
    ),
    image: "/images/hero-3.png",
    imageFirst: true,
    linkTo: "/blogs",
  },

  {
    title: "Elevating Support",
    subTitle:
      "Redefine Customer Interactions: AI-Powered Service & Support with Cyberoni!",
    content: (
      <div>
        The expectations of modern customers are ever-evolving. They demand
        swift, accurate, and personalized support round the clock. How can
        businesses meet such expectations without compromising efficiency? The
        answer lies in AI. Cyberoni&apos;s AI solutions seamlessly integrate
        into your customer service and tech support systems, ensuring instant
        responses, predictive problem-solving, and tailored interactions.{" "}
      </div>
    ),
    image: "/images/hero-4.png",
    imageFirst: false,
    linkTo: "/blogs",
  },

  {
    title: "Data Driven Solutions",
    subTitle:
      "Transform, Automate, and Personalize: The AI-Driven Journey to Business Success!",
    content: (
      <div>
        Imagine a world where every decision is backed by data insights, where
        automation streamlines operations, and where every customer feels
        they&apos;re getting a uniquely tailored experience. This is not a
        dream; it&apos;s a reality for our partners. Dive into the success
        stories of businesses that took the leap with Cyberoni&apos;s AI
        solutions and saw their operations evolve in ways they never imagined.
      </div>
    ),
    image: "/images/hero-5.png",
    imageFirst: true,
    linkTo: "/blogs",
  },
];

const companies: Company[] = [
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
const sildes: SlideProps[] = [
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
