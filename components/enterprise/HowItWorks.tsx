import { ReactNode } from "react";

export type StepCardProps = {
    icon: string | ReactNode,
    content: string
}

function HowItWorks({ steps }: { steps:StepCardProps[] }) {
    return (
        <div className="container mx-auto px-5 lg:px-10 flex flex-col items-center justify-center space-y-4">
            <h2 className="text-4xl font-bold">How it works</h2>
            <div>Explain how it works brief</div>
            <div className="flex flex-col lg:flex-row space-x-4">
                {steps.map((step,index)=>(<StepCard key={index} icon={step.icon} content={step.content} />))}
            </div>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
                Get Started
            </button>
        </div>
    );
}

function StepCard({ icon, content }: StepCardProps) {
    return (<div className="flex flex-col items-center space-y-2">
        {icon}
        <p>{content}</p>
    </div>)

}
export default HowItWorks;