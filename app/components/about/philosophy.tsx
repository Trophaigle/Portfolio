import React from "react";
import InfoBlock from "../utils/InfoBlock";


export default function Philosophy() {
  return (
    <section className="py-16 px-6 bg-gray-900 text-center">
      <div className="max-w-4xl mx-auto">
        <InfoBlock
          title="My Artistic Approach"
          text={
            <>
              I approach each Nordic song with <strong>respect and authenticity</strong>, adapting 
              harmonies and instruments to bring out <strong>the soul of each melody</strong>. 
              My goal is to create an orchestration that is both faithful to tradition 
              and suited to contemporary performers.
            </>
          }
        />
      </div>
    </section>
  );
}