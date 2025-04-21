'use client'
import axios from "axios"
import { useRef, useState } from "react"


export default function Input(){
    const divRef = useRef<HTMLDivElement>(null)
    const [content, setContent] = useState('')
    function handleClick(){
        const text = divRef.current?.innerText || ''
        axios.post('api.mentiq.xyz', {client_input: text})
        .then(res => setContent(res.data.response))
    }
    return(
        <div className="">
            <div dangerouslySetInnerHTML={{__html: content}} />
        <div className="fixed flex shadow-sm bg-white outline-1 outline-gray-400 shadow-black flex-col left-1/2 transform -translate-x-1/2 bottom-3 px-1 sm:px-2 py-2 rounded-xl w-[95%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] max-w-4xl">
        <div
            ref={divRef}
            contentEditable
            suppressContentEditableWarning
            //onKeyDown={handleKeyDown}
            //onInput={(e) => setContent((e.target as HTMLDivElement).innerText)}
            className="min-h-[40px] w-full max-h-24 sm:max-h-32 md:max-h-40 overflow-y-auto rounded-md p-2 sm:p-3 outline-none focus:ring-0"
            
            role="textbox"
            aria-multiline="true"
        />
        <div className="flex justify-end">
            <div onClick={handleClick} className="max-h-40 bg-black text-white opacity-90 rounded-xl py-1 sm:py-1.5 flex justify-center items-center px-3 sm:px-4 cursor-pointer text-center shadow-md text-sm sm:text-base">Go</div>
        </div>
        </div>
        </div>
    )
}