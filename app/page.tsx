
import Image from "next/image";
import Section, { SectionProps } from "@/components/home/HomeSection";
import CompanyCarousel, { Company } from "@/components/home/CompanyCarousel";
import SlideShow from "@/components/home/SlideShow";
import Slide, { SlideProps } from "@/components/home/Slide";
import ContactForm from "@/components/ContactForm";
import EmailLetter from "@/components/home/EmailLetter";
import CalendlyPopup from "@/components/Calendly";
export default async function Home() {


  return (
    <>
      <div className="z-30 w-full py-32  dark:text-white ">
        <section className="container mx-auto flex flex-col">
          <div className="flex flex-col-reverse items-center justify-center lg:flex-row">
            <div>
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
              <div className="mx-3 h-[1px] bg-gradient-purple" />
              <div id="__next" className="m-3 bg-gradient-purple w-fit rounded-full p-[2px]">
                <CalendlyPopup CTAText="Schedule a consultation" className="bg-white dark:bg-gray-900 p-3 rounded-full" />
              </div>
            </div>
            <Image
              src={"/hero-1.png"}
              alt={""}
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

        <section className="conatiner flex flex-col-reverse lg:flex-row">
          <div className="flex-1">
            <ContactForm></ContactForm>
          </div>
          <Image
            className="flex-1"
            src={"/contact-form.png"}
            alt="contact"
            height={500}
            width={500}
          ></Image>
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
    image: "/hero-2.png",
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
    image: "/hero-3.png",
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
    image: "/hero-4.png",
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
    image: "/hero-5.png",
    imageFirst: true,
    linkTo: "/blogs",
  },
];

const companies: Company[] = [

  { name: 'google', image: '/Google cloud.png' },
  { name: '', image: '/Ebay.png' },
  { name: '', image: '/Tux.png' },
  { name: '', image: '/Spotify.png' },
  { name: '', image: '/Airbnb.png' },
  { name: '', image: '/Facebook.png' },
  { name: '', image: '/Coca Cola.png' },
  { name: '', image: '/Zoom.png' },
  { name: '', image: '/Creative Cloud.png' },
  { name: '', image: '/Netflix.png' },
  { name: '', image: '/Discord.png' },
  { name: '', image: '/Figma.png' },
  { name: '', image: '/Paypal.png' },
  { name: '', image: '/Adobe.png' },



]


const sildes: SlideProps[] = [
  {
    name: 'Amaka Micheal',
    designation: 'Media Executive, Buying & Control',
    image: '/review.jpg',
    content: `It's all about getting your message in front of the right audience and creating those valuable relationships. Learn More about how DOML can help you do just that - all with a simple, easy-to-use platform.`
  },
  {
    name: 'Cody Johnston',
    designation: 'Media Executive, Buying & Control',
    image: '/prof1.png',
    content: `It's all about getting your message in front of the right audience and creating those valuable relationships. Learn More about how DOML can help you do just that - all with a simple, easy-to-use platform.`
  },
  {
    name: 'John Smith',
    designation: 'Media Executive, Buying & Control',
    image: '/prof2.png',
    content: `It's all about getting your message in front of the right audience and creating those valuable relationships. Learn More about how DOML can help you do just that - all with a simple, easy-to-use platform.`
  },
  {
    name: 'Micheal Scott',
    designation: 'Media Executive, Buying & Control',
    image: '/prof3.png',
    content: `It's all about getting your message in front of the right audience and creating those valuable relationships. Learn More about how DOML can help you do just that - all with a simple, easy-to-use platform.`
  },
]
