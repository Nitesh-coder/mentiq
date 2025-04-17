import Image from "next/image";
import Link from "next/link";


export default function Nav(){
    return(
        <div className="flex flex-wrap justify-between items-center text-md py-3 relative w-full max-w-7xl mx-auto">
            <ul className="flex flex-wrap space-x-1 sm:space-x-2 md:space-x-4 justify-between items-center px-1">
                <li className="font-medium px-1">
                    <Image 
                        src={"/logo.png"} 
                        alt="logo" 
                        width={107} 
                        height={67} 
                        priority
                        className="w-auto h-auto max-h-12 sm:max-h-16"
                    />
                </li>
                <li className="hidden md:block px-1 opacity-75"><a href="#intro" className="text-black hover:text-gray-600 transition-colors">Intro</a></li>
                <li className="hidden md:block px-1 opacity-75"><a href="#howitworks" className="text-black hover:text-gray-600 transition-colors">How it works</a></li>
                <li className="hidden md:block px-1 opacity-75"><a href="#features" className="text-black hover:text-gray-600 transition-colors">Features</a></li>
                <li className="hidden md:block px-1 opacity-75"><a href="#pricing" className="text-black hover:text-gray-600 transition-colors">Pricing</a></li>
            </ul>
            <ul className="flex space-x-2 sm:space-x-3 md:space-x-4 justify-between items-center px-1 ml-auto md:ml-0">
                <li className="px-1"><Link className="text-shadow font-bold opacity-80 text-sm sm:text-base" href={'https://app.mentiq.xyz'} target="_blank" rel="noopener noreferrer">Log in</Link></li>
                <li className="px-1"><Link className="bg-black text-white opacity-85 font-semibold px-2 sm:px-3 py-1 sm:py-2 rounded-lg text-sm sm:text-base transition-colors hover:bg-gray-800" href={'https://app.mentiq.xyz'} target="_blank" rel="noopener noreferrer">Start Free</Link></li>
            </ul>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-current opacity-15 w-full"></div>
        </div>
    )
}