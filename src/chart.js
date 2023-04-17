import React from "react";
import { Chart } from "react-google-charts";

const factor = 100000

export const data = [
  [
    [
      { type: "string", id: "Room" },
      { type: "string", id: "Name" },
      { type: "number", id: "Start" },
      { type: "number", id: "End" },
    ],
    [
      "dumptruck-1",
      "remove rubble",
      40*factor,62*factor
    ],
    [
      "firetruck-1",
      "put out fire",
      35*factor,40*factor
    ],
    [
      "rescue-robot-1",
      "rescue human 1",
      75*factor,92*factor
    ],
    [
      "rescue-robot-1",
      "rescue human 2",
      105*factor,122*factor
    ],
  ],
  [
    [
      { type: "string", id: "Room" },
      { type: "string", id: "Name" },
      { type: "number", id: "Start" },
      { type: "number", id: "End" },
    ],
    [
      "dumptruck-1",
      "remove rubble",
      72*factor,92*factor
    ],
    [
      "firetruck-1",
      "put out fire",
      35*factor,40*factor
    ],
    [
      "rescue-robot-1",
      "rescue human 1",
      40*factor,58*factor
    ],
    [
      "rescue-robot-1",
      "rescue human 2",
      70*factor,85*factor
    ],
  ],
  [
    [
      { type: "string", id: "Room" },
      { type: "string", id: "Name" },
      { type: "number", id: "Start" },
      { type: "number", id: "End" },
    ],
    [
      "dumptruck-1",
      "remove rubble",
      40*factor,62*factor
    ],
    [
      "firetruck-1",
      "put out fire",
      35*factor,40*factor
    ],
    [
      "rescue-robot-1",
      "rescue human 1",
      75*factor,92*factor
    ],
    [
      "dumptruck-1",
      "rescue human 2",
      105*factor,125*factor
    ],
  ],
  [
    [
      { type: "string", id: "Room" },
      { type: "string", id: "Name" },
      { type: "number", id: "Start" },
      { type: "number", id: "End" },
    ],
    [
      "dumptruck-1",
      "",
      35*factor,35*factor
    ],
    [
      "firetruck-1",
      "put out fire",
      35*factor,40*factor
    ],
    [
      "rescue-robot-1",
      "remove rubble",
      40*factor,62*factor
    ],
    
    [
      "rescue-robot-1",
      "rescue human 1",
      75*factor,92*factor
    ],
    [
      "rescue-robot-1",
      "rescue human 2",
      100*factor,118*factor
    ]    
  ]
];

export const options = {
  timeline: {
    colorByRowLabel: true,
  },
};

const ChartsQ1A = () => {
  return (
    <Chart
      chartType="Timeline"
      width="80%"
      height="50%"
      data={data[0]}
      options={options}
    />
  );
}
const ChartsQ1B = () => {
  return (
    <Chart
      chartType="Timeline"
      width="80%"
      height="50%"
      data={data[1]}
      options={options}
    />
  );
}
const ChartsQ1C = () => {
  return (
    <Chart
      chartType="Timeline"
      width="80%"
      height="50%"
      data={data[2]}
      options={options}
    />
  );
}
const ChartsQ1D = () => {
  return (
    <Chart
      chartType="Timeline"
      width="80%"
      height="50%"
      data={data[3]}
      options={options}
    />
  );
}

export {
  ChartsQ1A,
  ChartsQ1B,
  ChartsQ1C,
  ChartsQ1D
}
