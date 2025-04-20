
'use client'
import { useState } from "react"


export default function Sidebar(){

    const [isHide, setIsHide] = useState(true)
    
    return(
        <div>
            <div onClick={()=>setIsHide(!isHide)}>show</div>
            {isHide && (
                <div className=" relative h-screen w-64 shadow-md p-4 border-r border-gray-200">
                <div onClick={()=>setIsHide(!isHide)} className=" absolute top-4 right-1">hide</div>
                    <div className="mb-6">
                        <h1 className="text-xl font-bold opacity-90">Mentiq</h1>
                    </div>
                    
                    <nav className="space-y-1">
                        <a href="/start-app" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg transition-colors">
                            <span className="mr-3">🏠</span>
                            <span>Dashboard</span>
                        </a>
                        <a href="/start-app/projects" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg transition-colors">
                            <span className="mr-3">📁</span>
                            <span>Projects</span>
                        </a>
                        <a href="/start-app/create" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg transition-colors">
                            <span className="mr-3">✨</span>
                            <span>Create New</span>
                        </a>
                        <a href="/start-app/templates" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg transition-colors">
                            <span className="mr-3">📝</span>
                            <span>Templates</span>
                        </a>
                        <a href="/start-app/settings" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg transition-colors">
                            <span className="mr-3">⚙️</span>
                            <span>Settings</span>
                        </a>
                    </nav>
                    
                    <div className="absolute bottom-4 w-52">
                        <a href="/" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg transition-colors">
                            <span className="mr-3">👋</span>
                            <span>Back to Home</span>
                        </a>
                    </div>
                </div>
            )}
        </div>
    )
}