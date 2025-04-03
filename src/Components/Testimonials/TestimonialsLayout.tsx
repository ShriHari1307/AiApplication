// import Card from './Card'
import { useState } from "react"
import { FlickeringGrid } from "../magicui/flickering-grid"
import Card from "./Card"

const TestimonialsLayout = () => {

    const [showAll, setShowAll] = useState(false)

    const initialCardCount = 9

    const data = [
        {
            name: "Alice Johnson",
            company: "OpenMind Labs",
            testimonial: "The AI Agent SDK has revolutionized how we build intelligent systems. It's incredibly intuitive and powerful."
        },
        {
            name: "Fiona Grant",
            company: "ScaleAI",
            testimonial: "The AI Agent SDK's efficiency features have significantly improved our system's performance and scalability."
        },
        {
            name: "Kevin Lee",
            company: "DecisionTech",
            testimonial: "We've seen a significant boost in our AI's decision-making capabilities thanks to the AI Agent SDK."
        },
        {
            name: "Bob Brown",
            company: "NeuralForge",
            testimonial: "We've significantly reduced development time for our AI projects using this SDK. The multi-agent feature is a game-changer."
        },
        {
            name: "George Harris",
            company: "RapidAI",
            testimonial: "The SDK's intuitive APIs have made it easy for our team to quickly prototype and deploy AI agent systems."
        },
        {
            name: "Laura Martinez",
            company: "SolveX",
            testimonial: "The SDK's multi-agent system has revolutionized our approach to complex problem-solving.  The AI Agent SDK's documentation and support have made our learning curve much smoother."
        },
        {
            name: "Charlie Davis",
            company: "CodeHarbor",
            testimonial: "The cross-language support allowed us to seamlessly integrate AI agents into our existing tech stack."
        },
        {
            name: "Hannah Irving",
            company: "CollabAI",
            testimonial: "The AI Agent SDK's multi-agent system has enabled us to build complex, collaborative AI solutions with ease."
        },
        {
            name: "Michael Chen",
            company: "UniqueAI",
            testimonial: "The customization options in the AI Agent SDK have allowed us to create truly unique AI solutions."
        },
        {
            name: "Diana Evans",
            company: "AutomateX",
            testimonial: "The AI Agent SDK's tool integration feature has streamlined our workflow automation processes."
        },
        {
            name: "Ian Johnson",
            company: "FlexAI",
            testimonial: "The SDK's flexibility in integrating external tools has expanded our AI agents' capabilities tremendously."
        },
        {
            name: "Natalie Wong",
            company: "FastTrackAI",
            testimonial: "The efficiency of the AI Agent SDK has significantly reduced our development time and costs."
        },
        {
            name: "Ethan Ford",
            company: "AICore",
            testimonial: "The customizable agent behaviors have allowed us to create highly specialized AI solutions for our clients."
        },
        {
            name: "Julia Kim",
            company: "DevAI",
            testimonial: "The AI Agent SDK's documentation and support have made our learning curve much smoother."
        },
        {
            name: "Oliver Smith",
            company: "GlobalAI",
            testimonial: "The cross-language support has made it easy for our diverse team to collaborate on AI projects."
        }
    ]

    return (
        <div className='flex justify-center mx-auto container text-white'>
            <div className='lg:px-2 w-full max-w-screen-lg'>
                <div className="text-center relative mx-auto border border-gray-700 overflow-hidden p-4 py-8 md:p-12">
                    <div className="absolute inset-0 z-0">
                        <FlickeringGrid
                            className="size-full"
                            squareSize={4}
                            gridGap={5}
                            color="#6B7280"
                            maxOpacity={0.5}
                            flickerChance={0.1}
                        />
                        {/* Fade effect at the bottom */}
                        <div className="absolute bottom-0 left-0 w-full h-80 bg-gradient-to-t from-[#0d0e12] via-transparent to-transparent pointer-events-none" />
                    </div>
                    <h2 className="relative text-sm text-white text-muted-foreground font-semibold 
                    tracking-tight uppercase">
                        TESTIMONIALS
                    </h2>
                </div>
                {/* <div className="relative">
                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-0 pb-5 bg-grid-1 sm:bg-grid-2 
                    lg:bg-grid-3 border-x-1 border-gray-700">
                        {data.slice(0, showAll ? data.length : initialCardCount).map((plan) => (
                            <Card key={plan.name} props={plan} />
                        ))}
                    </div>
                </div>
                <div className={`
                    ${showAll ? "absolute lg:-bottom-550 lg:w-250 md:-bottom-50 h-80 bg-gradient-to-t from-[#0d0e12] to-transparent pointer-events-none" :
                        "absolute -bottom-90 lg:-bottom-470 lg:w-250 md:-bottom-50  h-80 bg-gradient-to-t from-[#0d0e12] to-transparent pointer-events-none"}
                    `} /> */}

                <div className="relative">
                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-0 pb-5 bg-grid-1 sm:bg-grid-2 
                        lg:bg-grid-3 border-x-1 border-gray-700">
                        {data.slice(0, showAll ? data.length : initialCardCount).map((plan) => (
                            <Card key={plan.name} props={plan} />
                        ))}
                    </div>

                    {/* Always stays at the bottom regardless of card count */}
                    {!showAll ? (
                        <div className="absolute bottom-0 left-2 right-2 h-64 bg-gradient-to-t from-[#0d0e12] to-transparent pointer-events-none z-10 rounded-xl" />
                    ) : (
                        <div className="absolute bottom-0 left-2 right-2 h-64 bg-gradient-to-t from-[#0d0e12] to-transparent pointer-events-none z-10 rounded-xl" />  
                    )}
                </div>
                <div className="flex justify-center cursor-pointer items-center h-10 pb-10 border-x border-gray-600">
                    <button
                        type="button"
                        className="border border-gray-600 cursor-pointer 
                        hover:bg-gray-600 rounded-lg px-3 py-2 z-10"
                        onClick={() => setShowAll(!showAll)}
                    >
                        {showAll ? "See less" : "See more"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TestimonialsLayout
