import React from 'react'

function InfoBlock({
  title,
  text,
}: {
  title: string;
  text: React.ReactNode;
}) {
  return (
    <>
    <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
      {title}
    </h2>
    <p className="text-2xl mb-4">
      {text}
    </p>
    </>   
  )
}

export default InfoBlock