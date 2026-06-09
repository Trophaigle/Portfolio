import IBelievePro from '@/app/components/about/iBelievePro';
import Identity from '@/app/components/entrepreneurship/identity'
import Link from 'next/link';
import React from 'react'

const Projects = () => {

  return (
   
   <>
     <main className="bg-black min-h-screen text-white">
      <Link
      href="https://unityportfolio-gamma.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="block container mx-auto pt-10 max-w-sm mb-10"
    >
      <div className="w-full rounded-xl border border-gray-300 p-6 transition
                      hover:bg-gray-500 hover:shadow-md cursor-pointer">
        <h2 className="text-lg font-semibold text-white">
          3D Engine Projects
        </h2>
        <p className="text-gray-100">
          Click here
        </p>
      </div>
    </Link>
    <IBelievePro />
       </main>
    </>
   
  );
};

export default Projects;