import './App.css';
// import {Charts, Charts1} from './chart';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Instructions from "./pages/Instructions";
import { Question1 } from "./pages/Question1"
import {Question2} from "./pages/Question2"
import Solutions from "./pages/Solutions"

const Intro = () => {
  return (
    <>
      <h1>Overview of GRSTAPS</h1>
      <h2>GRSTAPS is a graph-based approach that aims to solve a task planning problem for a heterogeneous multi-robot team</h2>
      <img src="../imgs/itags_architecture.png" alt="GRSTAPS architecture" height="400"></img>
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

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" elements={<Intro />}>
        <Route path="home" element={<Intro />} />
        <Route path="instructions" element={<Instructions />} />
        <Route path="q1" element={<Question1 />} />
        <Route path="q2" element={<Question2 />} />
        <Route path="solutions" element={<Solutions />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
