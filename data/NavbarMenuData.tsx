"use client";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { ActivitySquare, AppWindow, BarChart, Book, BookCheck, Briefcase, CheckCircle, Cog, Cpu, FileStack, Fullscreen, Group, HeartHandshake, HelpCircle, Layers3, LifeBuoy, Lightbulb, Lock, MapPin, Megaphone, MoveRight, Newspaper, Phone, PieChart, PlusCircle, Repeat2, TerminalSquare, ThumbsUp, Users } from "lucide-react";
import { MegamenuProps } from "../components/MegaMenu";

export const aboutMenu: MegamenuProps = [
    {
        type: "Links" as "Links",
        title: 'About us',

        links: [
            { href: '/casestudies', icon: <ThumbsUp className="text-gray-100 fill-blue-500" />, name: 'Customer Stories', subTitle: "Our customers have to say" },
            { href: '/partner', icon: <HeartHandshake className="text-gray-100 fill-blue-500" />, name: 'Partners', subTitle: "Become a our partners" },
            { href: '/careers', icon: <Briefcase className="text-gray-100 fill-blue-500" />, name: 'Careers', subTitle: "We’re always hiring!" },
            { href: '/media', icon: <Newspaper className="text-gray-100 fill-blue-500" />, name: 'Press and media', subTitle: "News and updates" },

            { href: '/enterprise', icon: <Phone className="text-gray-100 fill-blue-500" />, name: 'Contact Us', subTitle: "Get in touch with sales" },
        ]
    },
    {
        type: 'Node',
        node: 
            <div>
                <div className="text-gray-500 dark:gray-200">Our offices</div>
                <div className="flex gap-5 py-2">
                    <div>
                        <Image src={'/images/about-1.png'} alt="location" height={300} width={400} className="rounded-3xl" />
                    </div>
                    <div className="flex justify-center flex-col">
                        <div className="font-bold">Serving customers from across the globe</div>
                        <div className="flex gap-2"><MapPin className="fill-blue-700 text-white dark:text-slate-900" />San Francisco, California</div>
                        <div className="flex gap-2"><MapPin className="fill-blue-700 text-white dark:text-slate-900" />Seattle, Washington</div>
                    </div>
                </div>
            </div> as ReactNode
    }
];
export const enterpriseMenu: MegamenuProps = [
    {
        type: "Links",
        title: "Resources",
        links: [
            {
                href: "/blogs",
                name: "Our Blogs",
                subTitle: "Learn how to integrate",
                icon: <Book className=" text-blue-700" />,
            },

            {
                href: "/docs",
                name: "Developer Docs",
                subTitle: "Learn how to integrate",
                icon: <TerminalSquare className=" text-blue-700" />,
            },
            {
                href: "/docs",
                name: "Help Center ",
                subTitle: "All about how to use ",
                icon: <LifeBuoy className="fill-blue-700 text-gray-50" />,
            },
            {
                href: "/docs",
                name: "Product Updates",
                subTitle: "Newest feature releases",
                icon: <Megaphone className="fill-blue-700 text-gray-50" />,
            },
        ],
    },
    {
        type: "Links",
        title: "Best Practices",
        links: [
            {
                href: "/docs",
                name: "FAQs",
                subTitle: "Learn how to integrate",
                icon: <HelpCircle className="fill-blue-700 text-gray-50" />,
            },
            {
                href: "/casestudy",
                name: "Case Studies",
                subTitle: "All about how to use ",
                icon: <BookCheck className="fill-blue-700 text-gray-50" />,
            },
            {
                href: "/blogs",
                name: "Engineering Blog ",
                subTitle: "All about how to use ",
                icon: <Cog className="fill-blue-700 text-gray-50" />,
            },

            {
                href: "/books",
                name: "Books & Webinars",
                subTitle: "All about how to use ",
                icon: <Book className="fill-blue-700 text-gray-50" />,
            },
        ],
    },
];
export const solutionMenu: MegamenuProps = [
    {
        type: "Links",
        title: "Business Solutions",
        links: [
            {
                href: "/services/Digital-Marketing-7f580f52-b972-46ad-b5f8-35c209044ac1#Convert",
                name: "Convert",
                subTitle: "Analyze conversation",
                icon: <Repeat2 className=" text-blue-700" />,
            },
            {
                href: "/services/Digital-Marketing-7f580f52-b972-46ad-b5f8-35c209044ac1#Engage",
                name: "Enage",
                subTitle: "Measure active usage",
                icon: <PlusCircle className="text-blue-700" />,
            },
            {
                href: "/services/Digital-Marketing-7f580f52-b972-46ad-b5f8-35c209044ac1#Retain",
                name: "Retain",
                subTitle: "Find retentation drivers",
                icon: <Fullscreen className="text-blue-700" />,
            },
            {
                href: "/services/Digital-Marketing-7f580f52-b972-46ad-b5f8-35c209044ac1#Product Adoption",
                name: "Product Adoption",
                subTitle: "Maximize all customers",
                icon: <Users className="text-blue-700" />,
            },
        ],
    },
    // {
    //   type: "Links",
    //   title: "Industry Solutions",
    //   links: [
    //     { href: "/docs", name: "eCommerce", subTitle: "", icon: <></> },
    //     { href: "/casestudy", name: "SaaS", subTitle: "", icon: <></> },
    //     { href: "/blogs", name: "Financial Services", subTitle: "", icon: <></> },
    //   ],
    // },
    {
        type: "Node",
        node: (
            <>
                <div>
                    <div className="dark:gray-200 text-gray-500">Recent Case Studies</div>
                    <div className="flex flex-col gap-5 py-2">
                        <div className="flex gap-3">
                            <Lightbulb className="text-blue-700" />
                            Debugging with product analytics
                        </div>
                        <div className="flex gap-3">
                            <Lightbulb className="text-blue-700" />
                            Why it’s never too early to add product ana...
                        </div>
                        <div className="flex gap-3">
                            <Lightbulb className="text-blue-700" />
                            Data implementation, starting with the ‘why’
                        </div>
                    </div>
                    <Link className="flex  gap-4" href={"#"}>
                        See all <MoveRight />
                    </Link>
                </div>
            </>
        ),
    },
];
export const productMenu: MegamenuProps = [
    {
        type: "Links",
        title: "Powerful and Simple Analytics",
        links: [
            {
                href: "/services/Web-devlopment-06cafb96-2fb8-41fb-b34c-137a154f5126#Interactive%20Reports",
                name: "Interactive Reports",
                subTitle: "Learn about your users",
                icon: <BarChart className=" text-blue-700" />,
            },
            {
                href: "/services/Web-devlopment-06cafb96-2fb8-41fb-b34c-137a154f5126#Interactive%20Reports",
                name: "Team Dashboard & Alerts",
                subTitle: "Monitor your metricse",
                icon: <AppWindow className="text-blue-700" />,
            },
            {
                href: "/services/Web-devlopment-06cafb96-2fb8-41fb-b34c-137a154f5126#Behavioral%20Analytics",
                name: "Behavioral Analytics",
                subTitle: "Real-time analytics user trends",
                icon: <ActivitySquare className="text-blue-700" />,
            },
            {
                href: "/services/Web-devlopment-06cafb96-2fb8-41fb-b34c-137a154f5126#Audience%20Segmentation",
                name: "Audience Segmentation",
                subTitle: "Segments with perfect target",
                icon: <PieChart className="text-blue-700" />,
            },

            {
                href: "/services/Web-devlopment-06cafb96-2fb8-41fb-b34c-137a154f5126#Group%20Analyticss",
                name: "Group Analytics",
                subTitle: "Measure B2B account health",
                icon: <Group className="text-blue-700" />,
            },
            {
                href: "/services/Web-devlopment-06cafb96-2fb8-41fb-b34c-137a154f5126#Limitless%20Segmentation",
                name: "Limitless Segmentation",
                subTitle: "Surface hidden trends",
                icon: <Layers3 className="text-blue-700" />,
            },
        ],
    },
    {
        type: "Links",
        title: "Tools for Trusted Data",
        links: [
            {
                href: "/services/Web-devlopment-06cafb96-2fb8-41fb-b34c-137a154f5126#Data%20Integrations",
                name: "Data Integrations",
                subTitle: "Connect to your warehouse",
                icon: <Cpu className=" text-blue-700" />,
            },
            {
                href: "/services/Web-devlopment-06cafb96-2fb8-41fb-b34c-137a154f5126#Data%20Management",
                name: "Data Management",
                subTitle: "Keep data clean & usable",
                icon: <FileStack className="text-blue-700" />,
            },
            {
                href: "/services/Web-devlopment-06cafb96-2fb8-41fb-b34c-137a154f5126#Security%20%26%20Privacy",
                name: "Security & Privacy",
                subTitle: "Protect customer data",
                icon: <Lock className="text-blue-700" />,
            },
        ],
    },
    {
        type: "Node",
        node: (
            <>
                <div>
                    <div>
                        <div className="dark:gray-200 text-gray-500">Trending Services</div>
                        <Image
                            src={"/images/dash.png"}
                            alt="dash"
                            width={200}
                            height={200} />
                        <div className="flex flex-col gap-5 py-2">
                            <div className="flex gap-3">
                                <CheckCircle className="text-blue-700" />
                                Debugging with product analytics
                            </div>
                            <div className="flex gap-3">
                                <CheckCircle className="text-blue-700" />
                                Why it’s never too early to add product ana...
                            </div>
                        </div>
                        <Link className="flex  gap-4" href={"/casestudies"}>
                            See all <MoveRight />
                        </Link>
                    </div>
                </div>
            </>
        ),
    },
];
