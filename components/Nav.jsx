'use client'
import { useState, useEffect } from 'react'


const SimpleNav = () => {
  const [atTop, setAtTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.pageYOffset <= 50)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() 
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Navigation Header */}
      <div className={`fixed z-50 w-full px-8 py-4 transition-all duration-1000 rounded-full mt-4 inset-x-0 mx-auto ease-in-out transform ${
        atTop ? 'max-w-2xl' : 'bg-black bg-opacity-90 backdrop-blur-xl max-w-4xl'
      }`}>
        <div className="flex items-center justify-left w-full p-2 mx-auto">
          <span className={`font-bold tracking-tighter uppercase ${
            atTop ? 'text-black' : 'text-white'
          }`}>
            ✺ AmineBnh
          </span>
        </div>
      </div>

      {/* Bento Grid Section */}
      <div className="bg-[#F3F5F7] pt-32">
        <div className="px-8 py-24 mx-auto text-center md:px-12 lg:px-24 text-zinc-500">
         
          
          
        </div>
        
      </div>
    </>
  )
}

export default SimpleNav