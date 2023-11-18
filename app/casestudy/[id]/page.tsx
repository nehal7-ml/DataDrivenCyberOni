import Image from "next/image";


const caseStudy = {

    title: "Case study Title",
    preview: "lorem ipsum",
    problemStatement: "loremipsum",
    userProblems: ["problem 1", "problem 2" ],
    possibleSolutions: ["solution 1", "solution 2", "solution 3"],
    userResearch: "lorem ipsum",
    userPersonas: [
        {
            bio: "user bio",
            name: "user anme",
            gender: "male",
            age: "30",

        }  
    ],
    image: {
        src: 'https://picsum.photos/500',
        name: "pic name"

    },

    goals: []
}
function CaseStudy() {
    return (

        <>
            <div className="container mx-auto mt-8">
                {/* Section 1: Title */}
                <div className="dark:bg-zinc-900 rounded-2xl shadow-lg p-5 mb-8">
                    <section className="mb-8">
                        <h1 className="text-4xl font-bold text-[#7850CD]">{caseStudy.title}</h1>
                        <div>{caseStudy.preview}</div>
                    </section>
                    {/* Section 2: Description */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-[#7850CD]">Problem statement</h2>
                        <p className="mt-4">{caseStudy.problemStatement}</p>
                    </section>
                </div>
                <div className="flex justify-center items-center my-5 rounded-lg overflow-hidden">
                    <Image src={caseStudy.image.src} alt="cse-study" height={500} width={500}/>
                </div>

                {/* Section 3: Project Goals */}
                <section className="mb-8 dark:bg-zinc-900 p-5 rounded-2xl">
                    <h2 className="text-2xl font-bold text-center text-[#7850CD]">Project Goals</h2>
                    <ul className="flex gap-5 justify-center items-center mt-4">
                        <li>Goal 1</li>
                        <li>Goal 2</li>
                        <li>Goal 3</li>
                    </ul>
                </section>

                {/* Section 4: User Problems */}
                <section className="mb-8  dark:bg-zinc-900 p-5 rounded-2xl">
                    <h2 className="text-2xl font-bold text-[#7850CD]">Section 4: User Problems</h2>
                    <ul className="list-disc mt-4 p-5">
                        <li>Problem 1</li>
                        <li>Problem 2</li>
                        <li>Problem 3</li>
                    </ul>
                </section>

                {/* Section 5: Possible Solutions */}
                <section>
                    <h2 className="text-2xl font-bold text-[#7850CD]">Possible Solutions</h2>
                    <p>Based on the all the information collected through research and findings, I figured that an application will require following functionality to promote a healthy lifestyle </p>
                    <ul className="mt-4">
                        <li>Solution 1</li>
                        <li>Solution 2</li>
                        <li>Solution 3</li>
                    </ul>
                </section>
            </div>



        </>
    );
}

export default CaseStudy;