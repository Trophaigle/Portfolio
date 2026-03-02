import React from 'react'

const Success = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-black relative overflow-hidden">
  {/* Gradient circulaire léger derrière le texte */}
  <div className="absolute inset-0 bg-gradient-radial from-purple-500 via-pink-500 to-indigo-500 opacity-20 pointer-events-none"></div>

  <div className="relative max-w-2xl text-center p-10 rounded-3xl">
    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
      My Definition of <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">Success</span>
    </h2>

    <div className="w-16 h-1 bg-white mx-auto mb-6 rounded-full"></div>

    <p className="text-lg md:text-xl text-white/80 leading-relaxed">
      Having enough <span className="font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">freedom </span> 
      to meet and work with people I want to collaborate and spend time with.  
      <br /><br />
      Create, with people, something <span className="font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">valuable </span> 
      for others.
    </p>
  </div>
</section>
  )
}

export default Success
