import UserPersonaCard from "@/components/casestudies/UserPersonaCard";
import Image from "next/image";


const caseStudy = {

    title: "Case study Title",
    preview: "Lorem ipsum dolor sit amet, co egestas tellus rutrum tellus pellentesque eu tincidunt. Tempus quam pellentesque nec nam aliquam. Ac turpis egestas integer eget aliquet nibh. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Scelerisque fermentum dui faucibus in ornare quam. Proin sed libero enim sed. Fringilla ut morbi tincidunt augue interdum velit. Et ligula ullamcorper malesuada proin libero. Sagittis eu volutpat odio facilisis. Aliquam id diam maecenas ultricies mi. Elit eget gravida cum sociis. Interdum varius sit amet mattis vulputate enim nulla aliquet. Integer vitae justo eget magna fermentum iaculis eu non. Urna neque viverra justo nec ultrices. Odio eu feugiat pretium nibh ipsum. Volutpat odio facilisis mauris sit amet. Arcu ac tortor dignissim convallis. Integer enim neque volutpat ac tincidunt vitae semper quis.",
    problemStatement: "Lorem ipsum e et dolore magna aliqua. Ac orci pellentesque eu tincidunt. Tempus quam pellentesque ns.",
    userProblems: ["problem 1", "problem 2"],
    possibleSolutions: ["solution 1", "solution 2", "solution 3"],
    userPersonas: [
        {
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Tempus quam pellentesque nec nam aliquam. Ac turpis egestas integer eget aliquet nibh. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Scelerisque fermentum dui faucibus in ornare quam. Proin sed libero enim sed. Fringilla ut morbi tincidunt augue interdum velit. Et ligula ullamcorper malesuada proin libero. Sagittis eu volutpat odio facilisis. Aliquam id diam maecenas ultricies mi. Elit eget gravida cum sociis. Interdum varius sit amet mattis vulputate enim nulla aliquet. Integer vitae justo eget magna fermentum iaculis eu non. Urna neque viverra justo nec ultrices. Odio eu feugiat pretium nibh ipsum. Volutpat odio facilisis mauris sit amet. Arcu ac tortor dignissim convallis. Integer enim neque volutpat ac tincidunt vitae semper quis.",
            name: "user anme",
            gender: "male",
            age: 30,
            goals: ["goal1", "goal2", "goal3", "goal4"],
            painPoints: ["ponit1", "ponit2", "ponit3", "ponit4"],
            image: {
                id: "91827302381-2",
                src: 'https://picsum.photos/900?random=1',
                name: "pic name"
            }

        }
    ],
    image1: {
        src: '/casestudy-1.png',
        name: "pic name"

    },
    image2: {
        src: '/casestudy-2.png',
        name: "pic name"

    },

    goals: ["goal1", "goal2", "goal3", "goal4"],
    keyLearning: "Amet tellus cras adipiscing enim eu turpis. Lobortis scelerisque fermentum dui faucibus. Facilisi nullam vehicula ipsum a arcu cursus vitae congue. Ultricies tristique nulla aliquet enim tortor. Semper auctor neque vitae tempus quam pellentesque nec. Vivamus arcu felis bibendum ut tristique et egestas. Nisl nisi scelerisque eu ultrices vitae auctor eu augue. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Egestas dui id ornare arcu odio ut sem nulla. Risus in hendrerit gravida rutrum quisque. Volutpat consequat mauris nunc congue. Justo laoreet sit amet cursus sit amet. Amet justo donec enim diam vulputate. Arcu bibendum at varius vel pharetra vel turpis nunc eget. At augue eget arcu dictum varius duis. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. A arcu cursus vitae congue mauris rhoncus aenean vel elit.",
    userResearch: "Amet tellus cras adipiscing enim eu turpis. Lobortis scelerisque fermentum dui faucibus. Facilisi nullam vehicula ipsum a arcu cursus vitae congue. Ultricies tristique nulla aliquet enim tortor. Semper auctor neque vitae tempus quam pellentesque nec. Vivamus arcu felis bibendum ut tristique et egestas. Nisl nisi scelerisque eu ultrices vitae auctor eu augue. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Egestas dui id ornare arcu odio ut sem nulla. Risus in hendrerit gravida rutrum quisque. Volutpat consequat mauris nunc congue. Justo laoreet sit amet cursus sit amet. Amet justo donec enim diam vulputate. Arcu bibendum at varius vel pharetra vel turpis nunc eget. At augue eget arcu dictum varius duis. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. A arcu cursus vitae congue mauris rhoncus aenean vel elit.",
    uniqueFeatures: "Amet tellus cras adipiscing enim eu turpis. Lobortis scelerisque fermentum dui faucibus. Facilisi nullam vehicula ipsum a arcu cursus vitae congue. Ultricies tristique nulla aliquet enim tortor. Semper auctor neque vitae tempus quam pellentesque nec. Vivamus arcu felis bibendum ut tristique et egestas. Nisl nisi scelerisque eu ultrices vitae auctor eu augue. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Egestas dui id ornare arcu odio ut sem nulla. Risus in hendrerit gravida rutrum quisque. Volutpat consequat mauris nunc congue. Justo laoreet sit amet cursus sit amet. Amet justo donec enim diam vulputate. Arcu bibendum at varius vel pharetra vel turpis nunc eget. At augue eget arcu dictum varius duis. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. A arcu cursus vitae congue mauris rhoncus aenean vel elit.",
    wireFrame: [{
        src: 'https://picsum.photos/300?random=1',
        name: "pic name"
    }],
    architecture: {
        src: 'https://picsum.photos/300?random=3',
        name: "pic name"
    },
    userFlow: {
        src: 'https://picsum.photos/300?random=10',
        name: "pic name"
    },
    hifi: [{
        src: 'https://picsum.photos/300?random=5',
        name: "pic name"
    },
    {
        src: 'https://picsum.photos/300?random=5',
        name: "pic name"
    },
    {
        src: 'https://picsum.photos/300?random=5',
        name: "pic name"
    }



    ],
    competetiveAnalysis: [{}]



}
function CaseStudy() {
    return (

        <>
            <div className="relative container mx-auto mt-8">
                <Image className="absolute right-0 top-0" src={'/case-study-icon-2.svg'} alt="icon-2" height={130} width={75} />

                {/* Section 1: Title */}
                <div className=" relative dark:bg-zinc-800 rounded-2xl shadow-lg p-5 mb-8 z-10">
                    <section className=" mb-8 ">
                        <h1 className="text-4xl font-bold text-[#7850CD]">{caseStudy.title}</h1>
                        <div>{caseStudy.preview}</div>
                    </section>
                    {/* Section 2: Description */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-[#7850CD]">Problem statement</h2>
                        <p className="mt-4">{caseStudy.problemStatement}</p>
                    </section>
                    <Image className="absolute -z-10 -translate-x-full  bottom-0 translate-y-10" src={'/case-study-icon-1.png'} alt="icon-1" height={130} width={75} />

                </div>
                <div className="flex justify-center items-center my-5 rounded-lg overflow-hidden">
                    {caseStudy.image1 ? <Image className=" rounded-lg object-contain" src={caseStudy.image1.src} alt={'casestudy-1'} height={500} width={500} /> :
                        <Image className="l rounded-lg object-contain" src={'/casestudy-1.png'} alt={'casestudy-1'} height={500} width={500} />
                    }
                </div>

                {/* Section 3: Project Goals */}
                <section className="relative dark:bg-zinc-800 rounded-2xl shadow-lg p-5 mb-8 z-50">
                    <h2 className="text-2xl font-bold text-center text-[#7850CD]">Project Goals</h2>
                    <ul className="flex gap-5 justify-center items-center mt-4">
                        {caseStudy.goals.map((goal, index) => <li key={index}>{goal}</li>)}
                    </ul>
                </section>

                {/* Section 4: User Problems */}
                <div className="relative">
                    <section className="relative dark:bg-zinc-800 rounded-2xl shadow-lg p-5 mb-8 z-50">
                        <h2 className="text-2xl font-bold text-[#7850CD]">Section 4: User Problems</h2>
                        <ul className="list-disc mt-4 p-5">
                            <li>Problem 1</li>
                            <li>Problem 2</li>
                            <li>Problem 3</li>
                        </ul>
                    </section>
                    <Image className="absolute z-0 translate-x-1/2 right-0 bottom-0 translate-y-10" src={'/case-study-icon-4.png'} alt="icon-1" height={130} width={75} />
                </div>


                {/* Section 5: Possible Solutions */}
                <section>
                    <h2 className="text-2xl font-bold text-[#7850CD] mb-10">Possible Solutions</h2>
                    <p>Based on the all the information collected through research and findings, I figured that an application will require following functionality to promote a healthy lifestyle </p>
                    <ul className="mt-4 flex gap-4 flex-col p-5">
                        {caseStudy.possibleSolutions.map((solution, index) => {
                            return <li key={index} className="shadow-inner dark:bg-gray-800 p-4 rounded-lg odd:self-start even:self-end max-w-[66%]">{solution}</li>

                        })}

                    </ul>
                </section>


                <section className="relative mb-8">
                    <div className="relative dark:bg-zinc-800 rounded-2xl shadow-lg p-5 mb-8 z-50">
                        <h2 className="text-2xl font-bold text-[#7850CD] mb-10">Understanding the Problem</h2>
                        <p>{caseStudy.userResearch}</p>
                    </div>
                    <Image className="absolute z-0 translate-x-1/2 right-0 bottom-0 translate-y-10" src={'/case-study-icon-4.png'} alt="icon-1" height={130} width={75} />

                </section>


                <div className=" relative dark:bg-zinc-800 rounded-2xl shadow-lg p-5 mb-8 z-10">
                    <section className=" mb-8 ">
                        <h1 className="text-4xl font-bold text-[#7850CD]">Primary Research</h1>
                        <div>{caseStudy.preview}</div>
                    </section>
                    {/* Section 2: Description */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-[#7850CD]">Customer</h2>
                        <p className="mt-4">In order to come up with solutions / features that will be helpful for users. I wanted to understand the psychology of the how someone forms a habit & effectively manage to work from home After gathering insights from interviews and discussion from people. I identified  the essentials of building a habit : </p>


                    </section>
                    <Image className="absolute -z-10 -translate-x-full  bottom-0 translate-y-10" src={'/case-study-icon-1.png'} alt="icon-1" height={130} width={75} />

                </div>

                <div className="flex justify-center items-center my-5 rounded-lg overflow-hidden">
                    {caseStudy.image2 ? <Image className=" rounded-lg object-contain" src={caseStudy.image2.src} alt={'casestudy-1'} height={500} width={500} /> :
                        <Image className="l rounded-lg object-contain" src={'/casestudy-2.png'} alt={'casestudy-1'} height={500} width={500} />
                    }
                </div>

                <section className="my-10">
                    <h1 className="text-4xl font-bold text-[#7850CD]">User Personas</h1>
                    {caseStudy.userPersonas.map((persona, index) => {

                        return <div key={index}>
                            <UserPersonaCard
                                {...persona}

                            />
                        </div>
                    })}
                </section>
                <section className="mb-8 ">
                    <h2 className="text-[#7850CD]">User Research</h2>
                    <p>{caseStudy.userResearch}</p>
                </section>
                <section className="mb-8 ">
                    <h2 className="text-[#7850CD]">Competetive Analysis </h2>
                </section>
                <section className="mb-8 ">
                    <h2 className="text-[#7850CD]">Unique features</h2>
                    <p>{caseStudy.uniqueFeatures}</p>
                </section>

                <section className="mb-8 ">
                    {caseStudy.wireFrame && <>
                        <h2 className="text-[#7850CD]">Wireframes</h2>
                        <div className="flex gap-2 flex-wrap max-w-full">
                            {caseStudy.wireFrame.map((wireframe, index) => <Image key={index} src={wireframe.src} alt={"architecture"} height={500} width={500} />)}</div>

                    </>}
                </section>
                <section className="mb-8 ">
                    {caseStudy.architecture &&

                        <><div className="rounded-lg shadow-lg p-10 text-center ">
                            <h2 className="text-[#7850CD]">Information Architecture </h2>
                            <p className="text-left font-semibold">To get innovative solutions into the hands of your users, I needed to concentrate on idea generation.  Based on my understanding of the problem, I brainstormed the Information architecture and user flow to ensure smooth experience for the users. </p>
                        </div>
                            <Image src={caseStudy.architecture.src} alt={"architecture"} height={500} width={500} />

                        </>}
                </section>
                <section className="mb-8 ">
                    {caseStudy.hifi && <>
                        <h2 className="text-[#7850CD]">Hi-Fi Designs</h2>

                        <div className="flex gap-2 flex-wrap max-w-full">
                            {caseStudy.hifi.map((image, index) => <div key={index} className="flex flex-col justify-center items-center" >
                                <Image src={image.src} alt={image.name} height={500} width={500} />
                                <div className="font-bold"># {image.name}</div>
                            </div>)}
                        </div>
                    </>}
                </section>

                <section className="relative mb-8 bg-[radial-gradient(closest-side_at_0_0,#744ACC_90%,#744ACCE5_100%)] flex flex-col justify-center items-center overflow-hidden">
                    <Image className="object-contain" src={'/casestudy-3.png'} alt="casestudy-3" height={300} width={300} />
                    <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-2/3 aspect-square h-full rounded-full  bg-gradient-to-b from-[#7850cd00] to-[#9D6FFF] z-0"></div>
                    <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-2/3 aspect-square h-full rounded-full  bg-gradient-to-t from-[#7850cd0b] to-[#9D6FFF] z-0"></div>
                    <div className="text-white p-10 z-10">
                        <h2 className="text-3xl">Key Learnings</h2>
                        <p className="text-lg">{caseStudy.keyLearning}</p>
                    </div>
                </section>
            </div>



        </>
    );
}

export default CaseStudy;