import React from 'react';
import { Link } from 'react-router-dom';

const Instructions = () => {
    return (
      <>
        <h1>Instructions</h1>
        <ul>
          <li>I will present you with a scenario with a team of robots with different abilities</li>
          <li>You will be given four possible solutions, and using any logic or intuition try to select the optimal solution that allocates and schedules the robots to task so that it finishes the quickest</li>
          <li>After selecting the choice you think is the best, please leave a brief explanation for your choice</li>
          <li>Also please leave any questions and points of confusion you had</li>
          <li>You will also be supplemented with visuals, please leave comments on how you used them and how helpful they were</li>
        </ul>
        <Link to="/q1">
            <button>Next</button>
        </Link>
      </>
    )
  }

export default Instructions;