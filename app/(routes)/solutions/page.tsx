import Easter from '@/components/Easter';
import Features from '@/components/Features';
import Problem from '@/components/Problem';
import React from 'react'

const SolutionPage = () => {
  return (

    <div className="mt-32">
        <Problem /> 
      <Features />
      <div className="mt-32">

        <Easter />
      </div>
    </div>
  );
}

export default SolutionPage