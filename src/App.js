import './App.css';
import Charts from './chart';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Instructions from "./pages/Instructions";
import Question1 from "./pages/Question1"

const Intro = () => {
  return (
    <>
      <h1>Overview of GRSTAPS</h1>
      <h2>GRSTAPS is a graph-based approach that aims to solve a task planning problem for a heterogeneous multi-robot team</h2>
      <h2>There are four submodules: </h2>
      <ul>
        <li>Task Planning (what)</li>
        <li>Task Allocation (who)</li>
        <li>Scheduling (when)</li>
        <li>Motion Planning (how)</li>
      </ul>
      <Link to="/instructions">
          <button>Next</button>
      </Link>
    </>
  )
}

const TestForm = () => {
  return (
    <>
      <form>
        <div class="form-control">
          <label for="name">Name: </label>
          <input id="name" name="name" type="text" />
        </div>
        <button class="btn" type="submit">Send</button>
      </form>
    </>
  )
}

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" elements={<Intro />}>
        <Route path="home" element={<Intro />} />
        <Route path="instructions" element={<Instructions />} />
        <Route path="q1" element={<Question1 />} />
        <Route path="test" element={<TestForm />} />
        <Route path="page1" element={<Charts />} />
      </Route>
    </Routes>
      {/* <div className="App">
        <Intro />
        <TestForm />
        <Charts />
      </div> */}
    </BrowserRouter>
  );
}

export default App;
