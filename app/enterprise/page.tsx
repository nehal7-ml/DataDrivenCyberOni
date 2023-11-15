import Image from "next/image";
import Link from "next/link";

function Enterprise() {
    return (

        <div className="w-full">
            <section className="w-full dark:bg-[#071235]">
                <div className="relative lg:h-[50vh] bg-enterprise-bg bg-no-repeat bg-cover bg-opacity-25  backdrop-blur-md">
                    <div className="flex flex-col justify-center items-center container mx-auto h-full ">
                        <div className=" relative text-6xl text-center leading-relaxed overflow-visible line-clamp-3 font-nunito font-bold  w-[800px]">
                            <Image className="absolute -z-10 w-full " src={'/enterprise-hero.png'} alt="enterprise-hero" height={300} width={900} />

                            <div className="z-20">
                                <p>Welcome to </p>
                                <span className="text-[#5380EA]">CyberOni</span>
                                <p>Technologies</p>
                            </div>
                        </div>

                        <div className="text-black dark:text-gray-100">
                            Are you facing difficulties with your Software?
                            Do you have a website but lack traffic?
                            No need to worry.
                        </div>

                        <div className="w-full flex justify-center items-center my-5">
                            <Link href={'#'} className="bg-[#0F172A] dark:bg-blue-600 text-white p-3 rounded-lg">Schedule a Demo</Link>
                        </div>

                    </div>
                </div>

                <div className="lg:h-1/2 container mx-auto">
                    <div className="flex max-h-full p-3 gap-10 justify-around items-center text-center">
                        <div>
                            <Image src={'/project.png'} alt="icon" height={100} width={100}></Image>
                            <div>Projects</div>
                            <div>65+</div>
                        </div>
                        <div>
                            <Image src={'/client.png'} alt="icon" height={100} width={100}></Image>
                            <div>Clients</div>
                            <div>65+</div>
                        </div>
                        <div>
                            <Image src={'/experience.png'} alt="icon" height={100} width={100}></Image>
                            <div>Experience</div>
                            <div>65+</div>
                        </div>
                        <div>
                            <Image src={'/companies.png'} alt="icon" height={100} width={100}></Image>
                            <div>Companies</div>
                            <div>65+</div>
                        </div>

                    </div>

                    <div className="flex items-center justify-center my-5">
                        <div className="text-center text-[#5380EA] text-3xl w-80">Thank you for your interest in us!</div>
                    </div>
                    <div className="flex flex-col font-bold font-nunito items-center justify-center my-5 text-5xl">
                        <p>Founded over 7 years ago, CyberOni</p>
                        <p>Technologies is now the main <span className="text-rose-600">Data Science</span></p>
                        <p>and<span className="text-rose-600"> web development</span> agency in Colorado.</p>
                    </div>
                    <div className="text-lg font-nunito font-semibold text-[#475569] px-5">
                        At Cyberoni, we blend advanced technology with strategic business insights to foster growth and prosperity for your brand. Our mission is to engineer bespoke digital solutions that aren&apos;t just effective but also resonate with your unique business identity. We are dedicated to nurturing your online presence so that it not only takes root but thrives and blossoms in the digital marketplace. Each solution is intricately designed with your business goals in mind, ensuring a personalized experience that promotes your site&apos;s growth and success.
                    </div>
                </div>
            </section>

        </div>);
}

export default Enterprise;