import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChartsQ1A, ChartsQ1B, ChartsQ1C, ChartsQ1D } from '../chart';

function Question1() {
    const [selectedOption, setSelectedOption] = useState(null);
    function handleOptionChange(event) {
        setSelectedOption(event.target.value);
    };

    const navigate = useNavigate();

    function handleButtonClick(event) {
        // const history = useHistory();
        event.preventDefault();
        console.log('stored:', selectedOption)

        navigate('/q2'); // navigate to next page
    }

    function getResponse(val) {
        console.log('asdf:', val);
    }

    return (
      <>
        <h1>Scenario 1: Fire Rescue Scenario</h1>
        <p>There is a disaster at hand and there are the following tasks that need to be completed: rescuing humans, removing rubble, and putting out fires. You are given the following robots with the following traits:</p>
        <h2>Robots</h2>
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
        <b>if a trait is not listed for a robot, then it does NOT have that trait</b>

        <h2>Tasks</h2>
        <ul>
            <li>Put out 1 fire</li>
            <li>Remove 500 lbs of rubble</li>
            <ul>
                <li>Fire must be put out before this task can be started</li>
            </ul>
            <li>Rescue 2 humans (150 lbs each)</li>
            <ul>
                <li>Rubble has to be gone before humans can be rescued</li>
            </ul>
        </ul>

        <h3>Which of the following allocations and schedules is the optimal solution?</h3>

        <form>
            <input type="radio" id="option1" name="options" value="A" onChange={handleOptionChange} />
            <label htmlFor="option1"><ChartsQ1A /></label>
            <input type="radio" id="option2" name="options" value="B" onChange={handleOptionChange} />
            <label htmlFor="option2"><ChartsQ1B /></label>
            <input type="radio" id="option3" name="options" value="C" onChange={handleOptionChange} />
            <label htmlFor="option3"><ChartsQ1C /></label>
            <input type="radio" id="option4" name="options" value="D" onChange={handleOptionChange} />
            <label htmlFor="option2"><ChartsQ1D /></label>
        </form>

        <form>
          <div class="form-control">
            <h3>Give an explanation for why you chose your answer and not the others</h3>
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
    Question1
};