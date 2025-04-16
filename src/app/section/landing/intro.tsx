import Link from "next/link";


export default function Intro(){
    return(
        <div id="intro" className=" text-center items-center justify-center flex flex-col">
            <h1 className=" text-xl md:text-2xl lg:text-3xl font-bold opacity-85 mt-6 py-1">Automate emails and summarize notes effortlessly all in one agent."</h1>
            <h3 className=" leading-tight w-2xl opacity-75 my-6 py-1">Send personalized emails, download and organize videos, and summarize notes with AI, so you can save hours and focus on what matters, all in minutes a day.</h3>
            <div className=" flex space-x-3">
                <Link className=" px-4 py-3 font-bold opacity-85 border-2 rounded-lg" href={'app.mentiq.xyz'}>Watch Guide</Link>
                <Link className=" px-4 py-3 font-bold opacity-85 bg-black text-white rounded-lg" href={'app.mentiq.xyz'}>Start free</Link>
            </div>
        </div>
    )
}