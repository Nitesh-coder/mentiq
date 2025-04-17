

export default function HowItWorks(){
    return(
        <div className=" my-7 py-12 px-12 rounded-[2rem] mx-2 bg-red-100">
            <h1 className=" text-5xl text-center font-semibold opacity-90">Easy to start</h1>
            <ul className="flex justify-center py-2 space-x-3">
                <li className=" relative px-2 py-4 ">
                    <div className=" bg-black h-10 w-10 flex items-center relative justify-center text-xl font-semibold opacity-85 rounded-full text-white">1</div>
                    <h3 className=" text-xl font-bold py-3 opacity-90">Create prospect feed</h3>
                    <p className=" opacity-80 text-left w-3xs">Get all your prospects' posts in one clean feed no noise, no distractions.</p>
                </li>
                <li className=" relative px-2 py-4 ">
                    <div className=" bg-black h-10 w-10 flex items-center relative justify-center text-xl font-semibold opacity-85 rounded-full text-white">2</div>
                    <h3 className=" text-xl font-bold py-3 opacity-90">Focus on key topics</h3>
                    <p className=" opacity-80 text-left w-3xs">AI spots relevant posts and tracks your prospect engagement history to show where to join in.</p>
                </li>
                <li className=" relative px-2 py-4 ">
                    <div className=" bg-black h-10 w-10 flex items-center relative justify-center text-xl font-semibold opacity-85 rounded-full text-white">3</div>
                    <h3 className=" text-xl font-bold py-3 opacity-90">Get thoughtful drafts</h3>
                    <p className=" opacity-80 text-left w-3xs">AI suggests comments using your knowledge. You review and approve each one-full control.</p>
                </li>
                <li className=" relative px-2 py-4 ">
                    <div className=" bg-black h-10 w-10 flex items-center relative justify-center text-xl font-semibold opacity-85 rounded-full text-white">4</div>
                    <h3 className=" text-xl font-bold py-3 opacity-90">Build consistent process</h3>
                    <p className=" opacity-80 text-left w-3xs">Make nurturing a daily team routine. Export warm leads, keep nurturing others.</p>
                </li>
            </ul>
        </div>
    )
}