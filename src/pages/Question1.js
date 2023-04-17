// import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Question1(props) {
    // const [selectedOption, setSelectedOption] = useState(null);
    // const handleOptionChange = (event) => {
    //     setSelectedOption(event.target.value);
    // };

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

        <form>
            <input type="radio" id="option1" name="options" value="A." />
            <label htmlFor="option1"><img src="imgs/wrong1.PNG" alt="Option A" width="40%"/></label>
            <input type="radio" id="option2" name="options" value="B." />
            <label htmlFor="option2"><img src="imgs/wrong2.PNG" alt="Option B" width="40%"/></label>
            <input type="radio" id="option3" name="options" value="C." />
            <label htmlFor="option3"><img src="imgs/wrong3.PNG" alt="Option C" width="40%"/></label>
            <input type="radio" id="option4" name="options" value="D." />
            <label htmlFor="option4"><img src="imgs/correct.PNG" alt="Option D" width="40%"/></label>

            {/* <label>
                <input 
                    type="radio"
                    value={props.options[0]}
                    checked={selectedOption === props.options[0]}
                    onChange={handleOptionChange}
                    />
                    {props.options[0]}
            </label> */}
        </form>

        <Link to="/test">
            <button>Next</button>
        </Link>
      </>
    )
  }

export default Question1;