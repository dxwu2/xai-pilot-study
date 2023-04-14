// import React from "react";
// import { Chart } from "react-google-charts";

// function daysToMilliseconds(days: number) {
//   return days * 24 * 60 * 60 * 1000;
// }

// const columns = [
//   { type: "string", label: "Task ID" },
//   { type: "string", label: "Task Name" },
//   { type: "date", label: "Start Date" },
//   { type: "date", label: "End Date" },
//   { type: "number", label: "Duration" },
//   { type: "number", label: "Percent Complete" },
//   { type: "string", label: "Dependencies" },
// ];

// const rows = [
//   [
//     "Research",
//     "Find sources",
//     new Date(2015, 0, 1),
//     new Date(2015, 0, 5),
//     null,
//     100,
//     null,
//   ],
//   [
//     "Write",
//     "Write paper",
//     null,
//     new Date(2015, 0, 9),
//     daysToMilliseconds(3),
//     25,
//     "Research,Outline",
//   ],
//   [
//     "Cite",
//     "Create bibliography",
//     null,
//     new Date(2015, 0, 7),
//     daysToMilliseconds(1),
//     20,
//     "Research",
//   ],
//   [
//     "Complete",
//     "Hand in paper",
//     null,
//     new Date(2015, 0, 10),
//     daysToMilliseconds(1),
//     0,
//     "Cite,Write",
//   ],
//   [
//     "Outline",
//     "Outline paper",
//     null,
//     new Date(2015, 0, 6),
//     daysToMilliseconds(1),
//     100,
//     "Research",
//   ],
// ];

// export const data = [columns, ...rows];

// const App = () => {
//   return <Chart chartType="Gantt" width="100%" height="50%" data={data} />;
// }

// export default App;


import './App.css';
import Charts from './chart';

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
