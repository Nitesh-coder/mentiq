import Link from "next/link";


export default function Intro(){
    return(
        <div id="intro" className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center items-center justify-center flex flex-col">
            <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold opacity-85 mt-6 md:mt-8 lg:mt-10 py-1 md:py-2 max-w-8xl">Automate emails and summarize notes effortlessly all in one agent.</h1>
            <h3 className="leading-tight text-sm md:text-base lg:text-lg opacity-75 my-4 md:my-6 lg:my-8 py-1 max-w-2xl mx-auto">Send personalized emails, download and organize videos, and summarize notes with AI, so you can save hours and focus on what matters, all in minutes a day.</h3>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 md:space-x-4 lg:space-x-6 mt-2 md:mt-4">
                <Link className="px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-3 text-sm sm:text-base md:text-lg font-bold opacity-85 border-2 rounded-lg hover:bg-gray-100 transition-colors" href={'app.mentiq.xyz'}>Watch Guide</Link>
                <Link className="px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-3 text-sm sm:text-base md:text-lg font-bold opacity-85 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors" href={'app.mentiq.xyz'}>Start free</Link>
            </div>
        </div>
    )
}