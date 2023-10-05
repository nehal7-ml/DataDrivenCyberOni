import Card from "@/components/home/card";
import Balancer from "react-wrap-balancer";
import { DEPLOY_URL } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import { nFormatter } from "@/lib/utils";
import Section, { SectionProps } from "@/components/home/HomeSection";
import CompanyCarousel, { Company } from "@/components/home/CompanyCarousel";
import SlideShow from "@/components/home/SlideShow";
import Slide, { SlideProps } from "@/components/home/Slide";
import ContactForm from "@/components/ContactForm";
import EmailLetter from "@/components/home/EmailLetter";

export default async function Home() {


  return (
    <>
      <div className="z-30 w-full dark:text-white">
        <section className="container mx-auto flex flex-col">
          <div className="flex flex-col-reverse justify-center items-center lg:flex-row">
            <div>
              <div className="w-fit text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-[#5200FF]  to-[#FF2DF7] m-3 font-bold text-2xl" >
                With Ai
              </div>
              <div className="m-3 font-bold text-2xl">
                Rovolutionize Your Business
              </div>
              <div className="m-3">
                Our ambition is to reshape how you envision the use of your data to automate mundane  tasks.
              </div>
              <div className="mx-3 bg-gradient-purple h-[1px]" />
              <div className="m-3">
                <button className="rounded-full bg-gradient-purple p-[1px] m-3">
                  <div className="rounded-full p-3 bg-white dark:bg-black ">get Started</div>
                </button>
              </div>
            </div>
            <Image src={"/hero-1.png"} alt={""} height={500} width={500}></Image>
          </div>

          <div className="container my-4">
            <CompanyCarousel cards={companies}></CompanyCarousel>
          </div>

        </section>

        {homeSections.slice(0, 2).map((item) => {

          return <>
            <Section
              title={item.title}
              subTitle={item.subTitle}
              content={item.content}
              image={item.image}
              imageFirst={item.imageFirst}
            ></Section >

          </>
        })}

        <section className="container mx-auto">
          <SlideShow slides={sildes.map((card, index) => {

            return <Slide image={card.image}
              name={card.name}
              content={card.content}
              designation={card.designation}
            ></Slide>
          })}>

          </SlideShow>
        </section>
        {homeSections.slice(2, 5).map((item) => {

          return <>
            <Section
              title={item.title}
              subTitle={item.subTitle}
              content={item.content}
              image={item.image}
              imageFirst={item.imageFirst}
            ></Section >

          </>
        })}

        <section className="container mx-auto my-10">
          <EmailLetter></EmailLetter>
        </section>

        <section className="conatiner flex flex-col-reverse lg:flex-row">

          <div className="flex-1">
            <ContactForm></ContactForm>
          </div>
          <Image className="flex-1" src={'/contact-form.png'} alt="contact" height={500} width={500}></Image>
        </section>
      </div >

    </>
  );
}


const homeSections: SectionProps[] = [
  {
    title: "Data Driven Solutions",
    subTitle: "Transform, Automate, and Personalize: The AI-Driven Journey to Business Success!",
    content: <div>
      Imagine a world where every decision is backed by data insights, where automation streamlines operations, and where every customer feels they're getting a uniquely tailored experience. This is not a dream; it's a reality for our partners. Dive into the success stories of businesses that took the leap with Cyberoni's AI solutions and saw their operations evolve in ways they never imagined.
    </div>,
    image: '/hero-2.png',
    imageFirst: false
  },
  {
    title: "Solutions Tailored For You",
    subTitle: "Harness the Power of YOUR Data with Cyberoni's Expert AI Models!",
    content: <div>Every business is unique, and so is its data. Using AI models that haven't been trained on your specific business data is like trying to fit a square peg in a round hole. At Cyberoni, our deep expertise in data science allows us to craft AI solutions tailored just for you. By leveraging your own data, we ensure accurate predictions, unparalleled efficiency, and empowered decision-making. </div>,
    image: '/hero-3.png',
    imageFirst: true
  },

  {
    title: "Elevating Support",
    subTitle: "Redefine Customer Interactions: AI-Powered Service & Support with Cyberoni!",
    content: <div>The expectations of modern customers are ever-evolving. They demand swift, accurate, and personalized support round the clock. How can businesses meet such expectations without compromising efficiency? The answer lies in AI. Cyberoni's AI solutions seamlessly integrate into your customer service and tech support systems, ensuring instant responses, predictive problem-solving, and tailored interactions. </div>,
    image: '/hero-4.png',
    imageFirst: false
  },

  {
    title: "Data Driven Solutions",
    subTitle: "Transform, Automate, and Personalize: The AI-Driven Journey to Business Success!",
    content: <div>
      Imagine a world where every decision is backed by data insights, where automation streamlines operations, and where every customer feels they're getting a uniquely tailored experience. This is not a dream; it's a reality for our partners. Dive into the success stories of businesses that took the leap with Cyberoni's AI solutions and saw their operations evolve in ways they never imagined.
    </div>,
    image: '/hero-5.png',
    imageFirst: true
  },

]

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
    name: 'Amaka Micheal',
    designation: 'Media Executive, Buying & Control',
    image: '',
    content: `It's all about getting your message in front of the right audience and creating those valuable relationships. Learn More about how DOML can help you do just that - all with a simple, easy-to-use platform.`
  },
  {
    name: 'Amaka Micheal',
    designation: 'Media Executive, Buying & Control',
    image: '',
    content: `It's all about getting your message in front of the right audience and creating those valuable relationships. Learn More about how DOML can help you do just that - all with a simple, easy-to-use platform.`
  },
  {
    name: 'Amaka Micheal',
    designation: 'Media Executive, Buying & Control',
    image: '',
    content: `It's all about getting your message in front of the right audience and creating those valuable relationships. Learn More about how DOML can help you do just that - all with a simple, easy-to-use platform.`
  },
]
