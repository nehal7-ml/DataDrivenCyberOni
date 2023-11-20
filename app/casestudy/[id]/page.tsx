import Image from "next/image";


const caseStudy = {

    title: "Case study Title",
    preview: "Lorem ipsum dolor sit amet, co egestas tellus rutrum tellus pellentesque eu tincidunt. Tempus quam pellentesque nec nam aliquam. Ac turpis egestas integer eget aliquet nibh. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Scelerisque fermentum dui faucibus in ornare quam. Proin sed libero enim sed. Fringilla ut morbi tincidunt augue interdum velit. Et ligula ullamcorper malesuada proin libero. Sagittis eu volutpat odio facilisis. Aliquam id diam maecenas ultricies mi. Elit eget gravida cum sociis. Interdum varius sit amet mattis vulputate enim nulla aliquet. Integer vitae justo eget magna fermentum iaculis eu non. Urna neque viverra justo nec ultrices. Odio eu feugiat pretium nibh ipsum. Volutpat odio facilisis mauris sit amet. Arcu ac tortor dignissim convallis. Integer enim neque volutpat ac tincidunt vitae semper quis.",
    problemStatement: "Lorem ipsum e et dolore magna aliqua. Ac orci pellentesque eu tincidunt. Tempus quam pellentesque ns.",
    userProblems: ["problem 1", "problem 2"],
    possibleSolutions: ["solution 1", "solution 2", "solution 3"],
    userResearch: "lorem ipsum",
    userPersonas: [
        {
            bio: "user bio",
            name: "user anme",
            gender: "male",
            age: "30",
            goals: ["goal1", "goal2", "goal3", "goal4"],
            painPoints: ["ponit1", "ponit2", "ponit3", "ponit4"],
            image: {
                src: 'https://picsum.photos/900',
                name: "pic name"
            }

        }
    ],
    image: {
        src: 'https://picsum.photos/900',
        name: "pic name"

    },

    goals: []
}
function CaseStudy() {
    return (

        <>
            <div className="relative container mx-auto mt-8">
                <Image className="absolute right-0 top-0" src={'/case-study-icon-2.svg'} alt="icon-2" height={130} width={75} />

                {/* Section 1: Title */}
                <div className=" relative dark:bg-zinc-900 rounded-2xl shadow-lg p-5 mb-8 z-10">
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
                    <Image className="rounded-lg" src={caseStudy.image.src} alt="cse-study" height={500} width={500} />
                </div>

                {/* Section 3: Project Goals */}
                <section className="relative dark:bg-zinc-900 rounded-2xl shadow-lg p-5 mb-8 z-50">
                    <h2 className="text-2xl font-bold text-center text-[#7850CD]">Project Goals</h2>
                    <ul className="flex gap-5 justify-center items-center mt-4">
                        <li>Goal 1</li>
                        <li>Goal 2</li>
                        <li>Goal 3</li>
                    </ul>
                </section>

                {/* Section 4: User Problems */}
                <div className="relative">
                    <section className="relative dark:bg-zinc-900 rounded-2xl shadow-lg p-5 mb-8 z-50">
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
                            return <li key={index} className="shadow-inner dark:bg-zinc-800 p-4 rounded-lg odd:self-start even:self-end w-2/3">{solution}</li>

                        })}

                    </ul>
                </section>


                <section className="relative">
                    <div className="relative dark:bg-zinc-900 rounded-2xl shadow-lg p-5 mb-8 z-50">
                        <h2 className="text-2xl font-bold text-[#7850CD] mb-10">Understanding the Problem</h2>
                        <p>{caseStudy.userResearch}</p>
                    </div>
                    <Image className="absolute z-0 translate-x-1/2 right-0 bottom-0 translate-y-10" src={'/case-study-icon-4.png'} alt="icon-1" height={130} width={75} />

                </section>


                <div className=" relative dark:bg-zinc-900 rounded-2xl shadow-lg p-5 mb-8 z-10">
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
            </div>



        </>
    );
}

export default CaseStudy;