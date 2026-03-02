import React from 'react'

export default function Style() {
  return (
    <div className="bg-black py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Style (look)
        </h2>
        <div className="flex justify-center items-center">
      <img
        src="/images/style.jpg"
        alt="Description"
        className="max-h-screen w-auto object-contain"
      />
    </div>
      </div>
    </div>
  )
}


