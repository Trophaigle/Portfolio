import React from 'react'

const Success = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-2xl text-center bg-white shadow-xl rounded-3xl p-10">
        
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
          My Definition of Success
        </h2>

        <div className="w-16 h-1 bg-slate-800 mx-auto mb-6 rounded-full"></div>

        <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
          Having enough <span className="font-semibold text-slate-800">freedom </span> 
          to meet and work with people I want to collaborate and spend time with.  
          <br /><br />
          Create, with people, something <span className="font-semibold text-slate-800">valuable </span> 
          for others.
        </p>

      </div>
    </section>
  )
}

export default Success
