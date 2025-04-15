

export default function Nav(){
    return(
        <div className="flex justify-between items-center text-lg px-4 md:px-50 py-3 md:py-5 relative">
            <ul className="flex space-x-1 md:space-x-2 justify-between items-center px-1">
                <li className="font-medium px-1 opacity-75">Logo</li>
                <li className="hidden md:block px-1 opacity-75">Values</li>
                <li className="hidden md:block px-1 opacity-75">How it works</li>
                <li className="hidden md:block px-1 opacity-75">Features</li>
                <li className="hidden md:block px-1 opacity-75">Pricing</li>
            </ul>
            <ul className="flex space-x-2 justify-between items-center px-1 opacity-80">
                <li className=" px-1 ">Log In</li>
                <li className=" px-1 ">Start Free</li>
            </ul>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-current opacity-15"></div>
        </div>
    )
}