import { SectionProps } from "@/components/home/HomeSection";
import { Company } from "@/components/home/CompanyCarousel";
import { SlideProps } from "@/components/home/Slide";

export const homeSections: SectionProps[] = [
    {
        title: "Data Driven Solutions",
        subTitle: "Transform, Automate, and Personalize: The AI-Driven Journey to Business Success!",
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
        subTitle: "Harness the Power of YOUR Data with Cyberoni's Expert AI Models!",
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
        subTitle: "Redefine Customer Interactions: AI-Powered Service & Support with Cyberoni!",
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
        subTitle: "Transform, Automate, and Personalize: The AI-Driven Journey to Business Success!",
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
export const companies: Company[] = [
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
];
export const sildes: SlideProps[] = [
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
];
