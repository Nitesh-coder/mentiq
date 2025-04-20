'use client'
import axios from "axios"
import { useRef, useState } from "react"


export default function Input(){
    const divRef = useRef<HTMLDivElement>(null)
    const [content, setContent] = useState('')
    function handleClick(){
        const text = divRef.current?.innerText || ''
        axios.post('http://127.0.0.1:8000/', {client_input: text})
        .then(res => setContent(res.data.response))
    }
    return(
        <div className="">
            <div>{content}</div>
        <div className="absolute flex left-1/2 transform -translate-x-1/2 bottom-1">
        <div
            ref={divRef}
            contentEditable
            suppressContentEditableWarning
            //onKeyDown={handleKeyDown}
            //onInput={(e) => setContent((e.target as HTMLDivElement).innerText)}
            className=" max-w-2xl min-h-[40px] w-2xl max-h-40 shadow-md overflow-y-auto rounded-md p-3 outline-cyan-800 focus:ring-0"
            
            role="textbox"
            aria-multiline="true"
        />
        <div onClick={handleClick} className="max-h-40 flex justify-center items-center px-4 cursor-pointer text-center rounded-lg shadow-md">Enter</div>
        </div>
        </div>
    )
}