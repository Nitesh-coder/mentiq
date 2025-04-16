import Image from "next/image";
import Link from "next/link";


export default function Nav(){
    return(
        <div className="flex justify-between items-center text-md px-1 font-sans md:px-50 py-5 md:py-1 relative">
            <ul className="flex space-x-1 md:space-x-2 justify-between items-center px-1">
                <li className="font-medium px-1">
                    <Image 
                        src={"/logo.png"} 
                        alt="logo" 
                        width={107} 
                        height={67} 
                        priority
                    />
                </li>
                <li className="hidden md:block px-1 opacity-75"><a href="#intro" className="text-black hover:text-gray-300">Intro</a></li>
                <li className="hidden md:block px-1 opacity-75"><a href="#howitworks" className="text-black hover:text-gray-300">How it works</a></li>
                <li className="hidden md:block px-1 opacity-75"><a href="#features" className="text-black hover:text-gray-300">Features</a></li>
                <li className="hidden md:block px-1 opacity-75"><a href="#pricing" className="text-black hover:text-gray-300">Pricing</a></li>
            </ul>
            <ul className="flex space-x-2 justify-between items-center px-1">
                <li className=" px-1 "><Link className=" text-shadow font-bold opacity-80" href={'https://app.mentiq.xyz'} target="_blank" rel="noopener noreferrer">Log in</Link></li>
                <li className=" px-1 "><Link className=" bg-black text-white opacity-85 font-semibold px-3 py-2 rounded-lg" href={'https://app.mentiq.xyz'} target="_blank" rel="noopener noreferrer">Start Free</Link></li>
            </ul>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-current opacity-15"></div>
        </div>
    )
}