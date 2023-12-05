import ReviewCarousel from "@/components/ReviewCarousel";
import EmailLetter from "@/components/home/EmailLetter";
import { getGroup } from "@/crud/casestudy";
import { testimonials } from "@/data/testimonials";
import { Activity, Monitor, Redo, ShoppingCart, BlocksIcon, Blocks, LayoutGrid, Search, ArrowRight, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import prisma from "@/lib/prisma";
import CalendlyPopup from "@/components/Calendly";
import { DisplayServiceDTO, getAll } from "@/crud/service";
import { Image as CaseImage } from "@prisma/client";
import PortfolioCarousel from "@/components/enterprise/PortfolioCarousel";
async function Enterprise() {
  const services = await getAll(0, 0, prisma)

  return (
    <div className="w-full">
      <section className="w-full ">
        <div className="relative bg-enterprise-bg bg-[length:100vw_50vw] bg-no-repeat dark:bg-[#061122] lg:h-[50vh]">
          <div className="container mx-auto flex h-full flex-col items-center justify-center ">
            <div className=" relative line-clamp-3 w-screen overflow-visible text-center font-nunito text-6xl font-bold leading-relaxed lg:w-[800px]">
              <Image
                className="absolute -z-10 w-full "
                src={"/enterprise-hero.png"}
                alt="enterprise-hero"
                height={300}
                width={900}
              />

              <div className="z-20">
                <p>Welcome to </p>
                <span className="text-[#5380EA]">CyberOni</span>
                <p>Technologies</p>
              </div>
            </div>

            <div className="text-black dark:text-gray-100">
              Are you facing difficulties with your Software? Do you have a
              website but lack traffic? No need to worry.
            </div>

            <div id="__next" className="m-3">
              <CalendlyPopup
                className="rounded-lg bg-[#0F172A] p-3 text-white dark:bg-blue-600"
                CTAText="Schedule a consultation"
              />
            </div>
          </div>
        </div>

        <div className="container mx-auto my-5 lg:h-1/2">
          <div className="flex max-h-full items-center justify-around gap-10 p-3 text-center">
            <div>
              <Image
                src={"/project.png"}
                alt="icon"
                height={100}
                width={100}
              ></Image>
              <div>Projects</div>
              <div>65+</div>
            </div>
            <div>
              <Image
                src={"/client.png"}
                alt="icon"
                height={100}
                width={100}
              ></Image>
              <div>Clients</div>
              <div>65+</div>
            </div>
            <div>
              <Image
                src={"/experience.png"}
                alt="icon"
                height={100}
                width={100}
              ></Image>
              <div>Experience</div>
              <div>65+</div>
            </div>
            <div>
              <Image
                src={"/companies.png"}
                alt="icon"
                height={100}
                width={100}
              ></Image>
              <div>Companies</div>
              <div>65+</div>
            </div>
          </div>

          <div className="my-5  flex items-center justify-center">
            <div className="w-80 text-center text-3xl text-[#5380EA]">
              Thank you for your interest in us!
            </div>
          </div>
          <div className="my-5 flex flex-col items-center justify-center font-nunito text-5xl font-bold">
            <p>Founded over 7 years ago, CyberOni</p>
            <p>
              Technologies is now the main{" "}
              <span className="text-rose-600">Data Science</span>
            </p>
            <p>
              and<span className="text-rose-600"> web development</span>{" "}
              agency in Colorado.
            </p>
          </div>
          <div className="px-5 font-nunito text-lg font-semibold text-[#475569]">
            At Cyberoni, we blend advanced technology with strategic business
            insights to foster growth and prosperity for your brand. Our
            mission is to engineer bespoke digital solutions that aren&apos;t
            just effective but also resonate with your unique business
            identity. We are dedicated to nurturing your online presence so
            that it not only takes root but thrives and blossoms in the
            digital marketplace. Each solution is intricately designed with
            your business goals in mind, ensuring a personalized experience
            that promotes your site&apos;s growth and success.
          </div>

          <div className="my-5 flex flex-col items-center justify-center gap-5">
            <div className="font-nunito text-4xl font-semibold">
              Cyberoni&apos;s Strategic Development Path
            </div>
            <div className="mx-5 w-1/3 text-center">
              A four-part sequence, each representing a pivotal stage or
              element in the business strategy.
            </div>
          </div>

          <div className="grid w-full grid-cols-1 grid-rows-4 gap-3 text-center lg:grid-cols-4 lg:grid-rows-1">
            <div className="flex-1">
              <Image
                src={"/step-1.png"}
                alt="border"
                className="w-full object-contain"
                height={300}
                width={300}
              />
              <div className="flex flex-col gap-3">
                <div className="text-3xl text-[#E4A321]">
                  Initial Consultation
                </div>
                <div className="mx-auto w-2/3">
                  Understand client needs and challenges.
                </div>
              </div>
            </div>
            <div className="flex-1">
              <Image
                src={"/step-2.png"}
                alt="border"
                className=" w-full object-contain"
                height={300}
                width={300}
              />
              <div className="flex flex-col gap-3">
                <div className="text-3xl text-[#E4A321]">Solution Design</div>
                <div className="mx-auto w-2/3">
                  {" "}
                  Cyberoni experts design a custom solution blueprint,
                  focusing on scalability and integration with current
                  systems.
                </div>
              </div>
            </div>
            <div className="flex-1">
              <Image
                src={"/step-3.png"}
                alt="border"
                className="w-full object-contain"
                height={300}
                width={300}
              />
              <div className="flex flex-col gap-3">
                <div className="text-3xl text-[#E4A321]">
                  Proof of Concept
                </div>
                <div className="mx-auto w-2/3">
                  {" "}
                  Implement a pilot project using a subset of the
                  client&apos;s data to demonstrate the effectiveness of the
                  solution.
                </div>
              </div>
            </div>
            <div className="flex-1">
              <Image
                src={"/step-4.png"}
                alt="border"
                className="w-full object-contain"
                height={300}
                width={300}
              />
              <div className="flex flex-col gap-3">
                <div className="text-3xl text-[#E4A321]">
                  System Integration
                </div>
                <div className="mx-auto w-2/3">
                  Use APIs, middleware, or custom development to connect
                  Cyberoni&apos;s software with existing databases, CRM, ERP,
                  or other software systems.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#EBF0FF] py-10 dark:bg-[#121212]">
        <div className="container mx-auto flex flex-col gap-5 p-5 lg:flex-row">
          <div className="lg:w-1/2">
            <div className="text-2xl font-bold text-[#2478FE]">
              Service we Offer
            </div>
            <div className="font-nunito text-4xl font-extrabold">
              Cyberoni is committed to forging genuine partnerships,
              delivering exceptional value in every investment. Our expertise
              spans multiple domains, including but not limited to:
            </div>
          </div>
          <div className="container overflow-x-auto lg:w-1/2 ">
            <div className="grid  w-fit gap-5  lg:grid-cols-2 lg:grid-rows-2">
              <div className="relative h-fit overflow-hidden rounded-xl bg-gray-100  p-5 text-black hover:bg-[#0F172A] hover:text-white lg:h-52">
                <div className="absolute right-0 top-0 h-3 w-full bg-blue-400"></div>
                <div className="flex w-full justify-start">
                  <Monitor />
                </div>
                <div className="text-2xl font-bold">
                  Web Design & Web Development
                </div>
                <div className="flex w-full justify-end">
                  <Link
                    className=" rounded-sm bg-blue-400 p-3 shadow-md"
                    href={"/services/web-development"}
                  >
                    <Redo />
                  </Link>
                </div>
              </div>
              <div className="relative h-fit overflow-hidden rounded-xl bg-gray-100  p-5 text-black hover:bg-[#0F172A] hover:text-white lg:h-52">
                <div className="absolute right-0 top-0 h-3 w-full bg-blue-400"></div>
                <div className="flex w-full justify-start">
                  <ShoppingCart />
                </div>
                <div className="text-2xl font-bold">E-commerce Solutions</div>
                <div className="flex w-full justify-end">
                  <Link
                    className=" rounded-sm bg-blue-400 p-3 shadow-md"
                    href={"/services/web-development"}
                  >
                    <Redo />
                  </Link>
                </div>
              </div>
              <div className="relative h-fit overflow-hidden rounded-xl bg-gray-100  p-5 text-black hover:bg-[#0F172A] hover:text-white lg:h-52">
                <div className="absolute right-0 top-0 h-3 w-full bg-blue-400"></div>
                <div className="flex w-full justify-start">
                  <LayoutGrid />
                </div>
                <div className="text-2xl font-bold">
                  Customized application development
                </div>
                <div className="flex w-full justify-end">
                  <Link
                    className=" rounded-sm bg-blue-400 p-3 shadow-md"
                    href={"/services/web-development"}
                  >
                    <Redo />
                  </Link>
                </div>
              </div>
              <div className="relative h-fit overflow-hidden rounded-xl bg-gray-100  p-5 text-black hover:bg-[#0F172A] hover:text-white lg:h-52">
                <div className="absolute right-0 top-0 h-3 w-full bg-blue-400"></div>
                <div className=" relative flex w-full justify-start">
                  <Activity className="" />
                </div>
                <div className="text-2xl font-bold">
                  Search Engine Optimization & Digital Marketing
                </div>
                <div className="flex w-full justify-end">
                  <Link
                    className=" rounded-sm bg-blue-400 p-3 shadow-md"
                    href={"/services/web-development"}
                  >
                    <Redo />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-enterprise-bg-2 bg-cover bg-no-repeat py-10  backdrop-blur-lg dark:bg-[#061122] lg:min-h-screen">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="font-bold text-[#5380EA]">Why choose us</div>
            <div className="text-4xl font-bold">
              Why Select Cyberoni for Your Development Projects?
            </div>
            <div className="">
              Unlock the full potential of your online presence with Cyberoni.
              We&apos;re committed to excellence, continuously enhancing our
              methods and tools to ensure your web development experience is
              second to none.
            </div>
          </div>

          <div className="container mt-20 flex flex-wrap justify-center gap-5">
            <div className="flex flex-col items-center justify-center gap-2 rounded-lg bg-gray-200 p-3 text-black shadow-md lg:w-1/4">
              <Image
                src={"/team.png"}
                alt="brain"
                height={50}
                width={50}
              ></Image>
              <div className="text-2xl font-bold">Experience</div>
              <div className="text-base text-zinc-800">
                With Cyberoni, you gain access to a wealth of professional web
                development experience. We stay at the forefront of technology
                and trends to ensure that your project not only meets but
                exceeds industry standards. Our goal is to transform your
                vision into a digital reality, delivering a project that is
                not just complete but ahead of its time. Our team’s dedication
                to growth ensures your website will always be on the cutting
                edge.
              </div>
            </div>
            <div className=" flex flex-col items-center justify-center gap-2 rounded-lg bg-gray-200 p-3 text-black shadow-md lg:w-1/4">
              <Image
                src={"/brain.png"}
                alt="brain"
                height={50}
                width={50}
              ></Image>
              <div className="text-2xl font-bold">Committed Team</div>
              <div className="text-base text-zinc-800">
                Our team is the heart of Cyberoni. We are a group of driven,
                tech-savvy professionals, dedicated to delivering only the
                best. We understand that our success is measured by the
                success of your website. That’s why we immerse ourselves in
                every project, applying meticulous attention to detail to
                create websites that are not just functional but also thrive
                in today’s digital landscape.
              </div>
            </div>
            <div className=" flex flex-col items-center justify-center gap-2 rounded-lg bg-gray-200 p-3 text-black shadow-md lg:w-1/4">
              <Image
                src={"/stopwatch.png"}
                alt="brain"
                height={50}
                width={50}
              ></Image>
              <div className="text-2xl font-bold">Efficient Delivery</div>
              <div className="text-base text-zinc-800">
                At Cyberoni, we value your time. That&apos;s why we are
                committed to delivering high-quality, fully-tested websites
                promptly. We understand the pace of business and strive to
                provide you with fast turnaround times without compromising on
                quality. From initial concept to final launch, we streamline
                our development process to get your project live, allowing you
                to start meeting your business objectives faster.
              </div>
            </div>
            <div className=" flex flex-col items-center justify-center gap-2 rounded-lg bg-gray-200 p-3 text-black shadow-md lg:w-1/4">
              <Image
                src={"/price-tag.png"}
                alt="brain"
                height={50}
                width={50}
              ></Image>
              <div className="text-2xl font-bold">Fair Pricing</div>
              <div className="text-base text-zinc-800">
                We believe in offering outstanding value without hidden costs.
                Cyberoni provides competitive pricing structures that cater to
                businesses of all sizes. While maintaining high-quality
                standards, we ensure that your investment in your website is
                transparent and yields tangible results. Partner with us for
                cost-effective solutions that don&apos;t sacrifice quality.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto flex w-fit flex-1 flex-col items-center justify-center text-center">
          <div className="font-nunito text-4xl font-bold">Our Portfolio</div>
          <Image
            className="w-full flex-1 object-cover"
            src={"/portfolio-underline.png"}
            alt="underline"
            height={50}
            width={200}
          ></Image>


        </div>
        <PortfolioCarousel services={services.records as DisplayServiceDTO[]} />


             </section>

      <section className="bg-enterprise-bg-3 bg-cover bg-no-repeat py-10 dark:bg-[#061122] lg:bg-[length:100vw_60vw]">
        <div className="text-center text-4xl font-bold">Testimonial</div>
        <ReviewCarousel reviews={testimonials} />
      </section>

      <section className="container mx-auto my-10">
        <EmailLetter></EmailLetter>
      </section>
    </div>
  );
}

export default Enterprise;