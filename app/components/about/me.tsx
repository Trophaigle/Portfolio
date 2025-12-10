import Link from 'next/link'
import React from 'react'

const Me = () => {
  return (
    <>
    <div
      className="container mx-auto px-6 py-16 relative"
    >

      {/* Spotlight glow behind the PNG */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
        <div className="w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full 
                        bg-gradient-to-tr from-purple-400/30 via-pink-300/20 to-yellow-200/10 
                        blur-3xl md:blur-[90px]">
        </div>
      </div>

      {/* FLEX LAYOUT */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">

        {/* LEFT TEXT */}
        <div className="relative group text-white md:w-1/3 text-center md:text-left mb-8 md:mb-0">


        <h2 className="text-3xl font-bold mb-4">Connu</h2>
        <p className="text-gray-300 mb-4">
          igzeyrgzyergzeyurgzeuyrzgeurzer
        </p>

       
      </div>

        {/* CENTER PNG */}
        <div className="relative flex justify-center md:w-1/3 mb-8 md:mb-0">

          <img
            src="/"
            alt="image me qui sort du cadre apr la droite"
            className="max-h-[40vh] md:max-h-[55vh] object-contain drop-shadow-2xl pointer-events-none select-none"
          />

        </div>

        {/* RIGHT TEXT */}
        <div className="text-white md:w-1/3 text-center md:text-right">
          <h2 className="text-3xl font-bold mb-4">Inconnu</h2>
          <p className="text-gray-300 mb-4">
            zqeqfzqgrdgehytrdfdhtx
          </p>

         
        </div>

      </div>

    
    </div>
    </>
  )
}

export default Me