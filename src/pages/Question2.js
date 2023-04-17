import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChartsQ2A, ChartsQ2B, ChartsQ2C, ChartsQ2D } from '../chart';

function Question2() {
    const [selectedOption, setSelectedOption] = useState(null);
    function handleOptionChange(event) {
        setSelectedOption(event.target.value);
    };

    const navigate = useNavigate();

    function handleButtonClick(event) {
        // const history = useHistory();
        event.preventDefault();
        console.log('stored:', selectedOption)

        navigate('/solutions'); // navigate to next page
    }

    function getResponse(val) {
        console.log('asdf:', val);
    }

    return (
      <>
        <h1>Scenario 2: Fire Rescue Scenario</h1>
        <p>There is a disaster at hand and there are the following tasks that need to be completed: rescuing humans, removing rubble, and putting out fires. You are given the following robots with the following traits:</p>
        <h2>Robots</h2>
        <ul>
            <li>2 Firetrucks</li>
            <ul>
                <li>Can put out fires</li>
                <li>Can rescue humans</li>
                <li>Max Weight Capacity of 250</li>
                <li>Fastest moving speed</li>
            </ul>
            <li>3 Rescue Robots</li>
            <ul>
                <li>Can rescue humans</li>
                <li>Can move rubble</li>
                <li>Max Weight Capacity of 1000</li>
                <li>Medium moving speed</li>
            </ul>
            <li>2 Dumptrucks</li>
            <ul>
                <li>Can move rubble</li>
                <li>Max Weight Capacity of 2000</li>
                <li>Slowest moving speed</li>
            </ul>
        </ul>
        <b>if a trait is not listed for a robot, then it does NOT have that trait</b>

        <h2>Tasks</h2>
        <ul>
            <li>Put out 3 fires (A, B, and C)</li>
            <li>Remove 2 stacks of rubble (500 lbs each)</li>
            <ul>
                <li>Fire A must be put out before removing rubble A can be started</li>
                <li>Fire B must be put out before removing rubble B can be started</li>
            </ul>
            <li>Rescue 5 humans (150 lbs each)</li>
            <ul>
                <li>Rubble A has to be gone before humans 1, 2 and 3 can be rescued</li>
                <li>Rubble B has to be gone before humans 4 and 5 can be rescued</li>
            </ul>
        </ul>

        <h3>Which of the following allocations and schedules is the optimal solution?</h3>

        <form>
            <input type="radio" id="option1" name="options" value="A" onChange={handleOptionChange} />
            <label htmlFor="option1"><ChartsQ2A /></label>
            <input type="radio" id="option2" name="options" value="B" onChange={handleOptionChange} />
            <label htmlFor="option2"><ChartsQ2B /></label>
            <input type="radio" id="option3" name="options" value="C" onChange={handleOptionChange} />
            <label htmlFor="option3"><ChartsQ2C /></label>
            <input type="radio" id="option4" name="options" value="D" onChange={handleOptionChange} />
            <label htmlFor="option2"><ChartsQ2D /></label>
        </form>

        <form>
          <div class="form-control">
            <h3>Give an explanation for why you chose your answer and not the others. Also add any confusions/questions you had</h3>
            <label for="response"></label>
            <textarea id="response" onChange={getResponse} type="text" rows="5" cols="50" />
          </div>
        </form>

        <br></br>

        <Link to="/q1eval">
            <button onClick={handleButtonClick}>Next</button>
            {/* <button>Next</button> */}
        </Link>
      </>
    )
  }

export {
    Question2
};