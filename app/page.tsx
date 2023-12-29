
import Image from "next/image";
import Section, { SectionProps } from "@/components/home/HomeSection";
import CompanyCarousel, { Company } from "@/components/home/CompanyCarousel";
import SlideShow from "@/components/home/SlideShow";
import Slide from "@/components/home/Slide";
import ContactForm from "@/components/ContactForm";
import EmailLetter from "@/components/home/EmailLetter";
import CalendlyPopup from "@/components/Calendly";
import { companies, homeSections, sildes } from "@/data/homeData";
import Link from "next/link";
export default async function Home() {
  return (
    <>
      <div className="z-30 w-full dark:text-white ">
        <section className="container mx-auto flex flex-col text-center lg:text-left">
          <div className="flex flex-col-reverse items-center justify-center lg:flex-row">
<<<<<<< HEAD
            <div className="flex flex-col justify-center items-center lg:items-start lg:justify-start " >
              <div className="m-3 w-fit bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7]  bg-clip-text text-5xl font-bold text-transparent">
=======
            <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start ">
              <div className="sm:text-3l m-3 w-fit bg-gradient-to-r from-[#00F0FF] via-[#5200FF]  to-[#FF2DF7] bg-clip-text text-5xl font-bold text-transparent">
>>>>>>> 8f0d6c8a059d87d1f0d68193e496ec3a953c9e6a
                With Ai
              </div>
              <div className="m-3 text-4xl font-bold">
                Revolutionize Your Business with Data-Driven Mastery: Transform,
                Automate, Personalize{" "}
              </div>
              <div className="m-3">
                Embark on an Data-Infused Journey to Redefine Your Businesses
                Success
              </div>
<<<<<<< HEAD
              <div className="mx-3 h-[1px] bg-gradient-purple w-full" />
              <div className="flex justify-center lg:justify-start">
                <div id="__next" className="m-3 bg-gradient-purple w-fit rounded-full p-[2px]">
                  <CalendlyPopup CTAText="Schedule a consultation" className="bg-white dark:bg-gray-900 p-3 rounded-full" />
=======
              <div className="mx-3 h-[1px] w-full bg-gradient-purple" />
              <div className="flex justify-center lg:justify-start">
                <div
                  id="__next"
                  className="m-3 w-fit rounded-full bg-gradient-purple px-[0.1rem] py-[0.1rem]"
                >
                  <CalendlyPopup
                    CTAText="Schedule a consultation"
                    className="rounded-full bg-white p-[0.6rem] dark:bg-gray-900"
                  />
>>>>>>> 8f0d6c8a059d87d1f0d68193e496ec3a953c9e6a
                </div>
              </div>
            </div>
            <Image
              src={"/images/hero-1.png"}
<<<<<<< HEAD
              alt={""}
=======
              alt={"hero-1"}
>>>>>>> 8f0d6c8a059d87d1f0d68193e496ec3a953c9e6a
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

        <section className="container mx-auto text-center">
          <h2 className="  m-3 w-fit bg-gradient-purple bg-clip-text text-3xl font-bold text-transparent">
            Customer Reviews and Feedback
          </h2>
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
          <div className="mt-8 flex justify-center">
            <Link
              href="/reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-blue-600 hover:text-blue-800"
              aria-label="View our business"
            >
              View our Business
            </Link>
            &nbsp;|&nbsp;
            <Link
              href="/google-business"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-blue-600 hover:text-blue-800"
              aria-label="View our business"
            >
              Write a Review
            </Link>
          </div>
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

        <section className="conatiner flex flex-col-reverse lg:flex-row lg:px-10 justify-center items-center">
          <div className="lg:w-1/2">
            <ContactForm></ContactForm>
          </div>
          <div className="lg:w-1/2 h-[35rem] flex justify-center items-center">
            <Image
<<<<<<< HEAD
              className="flex-1 w-full h-full object-contain"
=======
              className="flex-1 w-full h-full object-scale-down"
>>>>>>> 8f0d6c8a059d87d1f0d68193e496ec3a953c9e6a
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


<<<<<<< HEAD
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

  { name: 'google', image: '/images/Google cloud.png' },
  { name: '', image: '/images/Ebay.png' },
  { name: '', image: '/images/Tux.png' },
  { name: '', image: '/images/Spotify.png' },
  { name: '', image: '/images/Airbnb.png' },
  { name: '', image: '/images/Facebook.png' },
  { name: '', image: '/images/Coca Cola.png' },
  { name: '', image: '/images/Zoom.png' },
  { name: '', image: '/images/Creative Cloud.png' },
  { name: '', image: '/images/Netflix.png' },
  { name: '', image: '/images/Discord.png' },
  { name: '', image: '/images/Figma.png' },
  { name: '', image: '/images/Paypal.png' },
  { name: '', image: '/images/Adobe.png' },



]


const sildes: SlideProps[] = [
  {
    name: 'Amaka Micheal',
    designation: 'Media Executive, Buying & Control',
    image: '/images/review.jpg',
    content: `It's all about getting your message in front of the right audience and creating those valuable relationships. Learn More about how DOML can help you do just that - all with a simple, easy-to-use platform.`
  },
  {
    name: 'Cody Johnston',
    designation: 'Media Executive, Buying & Control',
    image: '/images/prof1.png',
    content: `It's all about getting your message in front of the right audience and creating those valuable relationships. Learn More about how DOML can help you do just that - all with a simple, easy-to-use platform.`
  },
  {
    name: 'John Smith',
    designation: 'Media Executive, Buying & Control',
    image: '/images/prof2.png',
    content: `It's all about getting your message in front of the right audience and creating those valuable relationships. Learn More about how DOML can help you do just that - all with a simple, easy-to-use platform.`
  },
  {
    name: 'Micheal Scott',
    designation: 'Media Executive, Buying & Control',
    image: '/images/prof3.png',
    content: `It's all about getting your message in front of the right audience and creating those valuable relationships. Learn More about how DOML can help you do just that - all with a simple, easy-to-use platform.`
  },
]
=======


>>>>>>> 8f0d6c8a059d87d1f0d68193e496ec3a953c9e6a
