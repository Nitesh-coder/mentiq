'use client'
import { useRef, useState } from "react"


export default function Input(){
    const divRef = useRef<HTMLDivElement>(null)
    const [content, setContent] = useState('')
    function handleClick(){
        const text = divRef.current?.innerText || ''
        setContent(text)
    }
    return(
        <div className=" flex justify-center content-center">
            <div>{content}</div>
        <div
            ref={divRef}
            contentEditable
            suppressContentEditableWarning
            //onKeyDown={handleKeyDown}
            //onInput={(e) => setContent((e.target as HTMLDivElement).innerText)}
            className="min-h-[40px] w-2xl max-h-40 shadow-md overflow-y-auto rounded-md p-3 outline-cyan-800 focus:ring-0"
            
            role="textbox"
            aria-multiline="true"
        />
        <div onClick={handleClick} className=" min-h-4 px-4 cursor-pointer text-center rounded-lg shadow-md">Enter</div>
        </div>
    )
}