import Link from "next/link";


export default function HowItWorks(){
    return(
        <div id="howitworks" className="my-7 py-8 md:py-12 px-4 md:px-12 rounded-xl md:rounded-[2rem] mx-2 bg-red-100">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-semibold opacity-90">Easy to start</h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-2">
                <li className="relative px-2 py-4 border-b sm:border-b-0 sm:border-r pb-6 mb-4 sm:mb-0 sm:pr-4">
                    <div className="bg-black h-10 w-10 flex items-center relative justify-center text-xl font-semibold opacity-85 rounded-full text-white">1</div>
                    <h3 className="text-lg md:text-xl font-bold py-3 opacity-90">Describe What You Need</h3>
                    <p className="opacity-80 text-left">Tell the AI what kind of visual you want—icons, charts, illustrations, or UI elements—in plain English.</p>
                </li>
                <li className="relative px-2 py-4 border-b sm:border-b-0 lg:border-r pb-6 mb-4 sm:mb-0 lg:pr-4">
                    <div className="bg-black h-10 w-10 flex items-center relative justify-center text-xl font-semibold opacity-85 rounded-full text-white">2</div>
                    <h3 className="text-lg md:text-xl font-bold py-3 opacity-90">Generate Instant Designs</h3>
                    <p className="opacity-80 text-left">AI instantly creates accurate, creative visuals ready for production—no design skills required.</p>
                </li>
                <li className="relative px-2 py-4 border-b lg:border-b-0 lg:border-r pb-6 mb-4 lg:mb-0 lg:pr-4">
                    <div className="bg-black h-10 w-10 flex items-center relative justify-center text-xl font-semibold opacity-85 rounded-full text-white">3</div>
                    <h3 className="text-lg md:text-xl font-bold py-3 opacity-90">Customize or Regenerate</h3>
                    <p className="opacity-80 text-left">Refine your design with new prompts or choose from multiple variations—your vision, your way.</p>
                </li>
                <li className="relative px-2 py-4">
                    <div className="bg-black h-10 w-10 flex items-center relative justify-center text-xl font-semibold opacity-85 rounded-full text-white">4</div>
                    <h3 className="text-lg md:text-xl font-bold py-3 opacity-90">Export in Multiple Formats</h3>
                    <p className="opacity-80 text-left">Download your assets as SVG, PNG, PDF, HTML, or Figma files—ready to use in any workflow.</p>
                </li>
            </ul>
            <div className=" flex justify-center py-1">
                <Link className="px-3 py-2 sm:px-4 sm:py-3 md:px-12 md:py-3 text-sm sm:text-base md:text-lg font-bold opacity-85 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors" href={'https://app.mentiq.xyz'} target="_blank" rel="noopener noreferrer">Go to app</Link>
            </div>
        </div>
    )
}