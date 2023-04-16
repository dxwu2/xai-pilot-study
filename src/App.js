import './App.css';
import Charts from './chart';
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
    <div className="App">
      <Intro />
      <TestForm />
      <Charts />
    </div>
  );
}

export default App;
