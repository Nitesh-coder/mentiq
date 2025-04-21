'use client'
import { useState, useEffect } from "react"

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Check if screen is mobile on mount and when window resizes
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        // Initial check
        checkIfMobile();
        
        // Add event listener
        window.addEventListener('resize', checkIfMobile);
        
        // Cleanup
        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    return (
        <>
            {/* Mobile Toggle Button */}
            <div className="md:hidden fixed top-4 left-4 z-30">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 bg-white rounded-lg shadow-md focus:outline-none"
                    aria-label="Toggle sidebar"
                >
                    {isOpen ? (
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Sidebar for desktop and mobile */}
            <div 
                className={`${(isMobile && !isOpen) ? 'hidden' : 'block'} h-screen fixed left-0 top-0 z-20
                           ${isMobile ? 'w-64 bg-white shadow-lg' : 'w-64'}
                           transition-all duration-300 ease-in-out`}
            >
                <div className="relative h-full shadow-md p-4 border-r border-gray-200">
                    {/* Close button visible only on mobile */}
                    {isMobile && (
                        <button 
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-200"
                            aria-label="Close sidebar"
                        >
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    )}
                    
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
            </div>
            
            {/* Overlay for mobile view when sidebar is open */}
            {isMobile && isOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-10"
                    onClick={() => setIsOpen(false)}
                />
            )}
            
            {/* Main content padding for desktop view */}
            <div className={`${!isMobile ? 'ml-64' : 'ml-0'} transition-all duration-300`}>
                {/* Content goes here */}
            </div>
        </>
    )
}