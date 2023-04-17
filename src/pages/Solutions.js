import { ChartsQ1A, ChartsQ1B, ChartsQ1C, ChartsQ1D, ChartsQ2A, ChartsQ2B, ChartsQ2C, ChartsQ2D } from '../chart';

const Solutions = () => {
    return (
      <>
        <form>
          <div class="form-control">
            <h1>Solutions</h1>
            <h2>Scenario 1: Fire Rescue Scenario</h2>
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
                    <li>Can rescue humans, can move rubble</li>
                    <li>Max Weight Capacity of 1000</li>
                </ul>
                <li>1 Dumptruck</li>
                <ul>
                    <li>Can move rubble</li>
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
            <ChartsQ1A/>
            <ChartsQ1B/>
            <ChartsQ1C />
            <ChartsQ1D />
            <h3>Q1 Answer: D</h3>
            <ul>
                <li>Out of all valid allocations, D finishes in the least amount of time. </li>
                <li>Although B finishes in the least amount of time, it is actually an invalid solution because a dumptruck is unable to rescue a human</li>
                <li>Although A may make more sense intuitively (the dumptruck moves the rubble instead of the rescue robot), it is slower and the rescue robot is able to move 500 lb of rubble</li>
                <li>C is also invalid because dumptrucks are not able to rescue humans</li>
            </ul>

            <h2>Scenario 2: Fire Rescue Scenario</h2>
            <p>There is a disaster at hand and there are the following tasks that need to be completed: rescuing humans, removing rubble, and putting out fires. You are given the following robots with the following traits:</p>
            <h2>Robots</h2>
            <ul>
                <li>2 Firetrucks</li>
                <ul>
                    <li>Can put out fires</li>
                    <li>Max Weight Capacity of 250</li>
                    <li>Fastest moving speed</li>
                </ul>
                <li>3 Rescue Robots</li>
                <ul>
                    <li>Can rescue humans, can move rubble</li>
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
            <ChartsQ2A/>
            <ChartsQ2B/>
            <ChartsQ2C />
            <ChartsQ2D />
            <h3>Q2 Answer: B</h3>
            <ul>
                <li>A is the slowest solution</li>
                <li>C is the fastest, however it is invalid because fire B needs to be put out before remove rubble B can begin</li>
                <li>D is a slight improvement over A, but not as good as B</li>
            </ul>
          </div>
          <button class="btn" type="submit">Next</button>
        </form>
      </>
    )
  }

export default Solutions;