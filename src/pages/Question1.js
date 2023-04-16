import React from 'react';
import { Link } from 'react-router-dom';

const Question1 = () => {
    return (
      <>
        <h1>Scenario 1: Fire Rescue Scenario</h1>
        <p>There is a disaster at hand and there are the following tasks that need to be completed: rescuing humans, removing rubble, and putting out fires. You are given the following robots with the following traits:</p>
        <ul>
            <li>1 Firetruck</li>
            <ul>
                <li>Can put out fires</li>
                <li>Max Weight Capacity of 250</li>
            </ul>
            <li>1 Rescue Robot</li>
            <ul>
                <li>Can rescue humans</li>
                <li>Max Weight Capacity of 1000</li>
            </ul>
            <li>1 Dumptruck</li>
            <ul>
                <li>Max Weight Capacity of 2000</li>
            </ul>
        </ul>
        <Link to="/test">
            <button>Next</button>
        </Link>
      </>
    )
  }

export default Question1;