import React from "react";
import { Chart } from "react-google-charts";

const factor = 100000

export const data = [
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
];

export const options = {
  timeline: {
    colorByRowLabel: true,
  },
};

const Charts = () => {
  return (
    <Chart
      chartType="Timeline"
      width="80%"
      height="50%"
      data={data}
      options={options}
    />
  );
}
export default Charts

// const columns = [
//   { type: "string", label: "Task ID" },
//   { type: "string", label: "Task Name" },
//   { type: "string", label: "Resource" },
//   { type: "date", label: "Start Date" },
//   { type: "date", label: "End Date" },
//   { type: "number", label: "Duration" },
//   { type: "number", label: "Percent Complete" },
//   { type: "string", label: "Dependencies" },
// ];

// const rows = [
//   [
//     "toTrain",
//     "Walk to train stop",
//     "walk",
//     null,
//     null,
//     5 * 60 * 1000,
//     100,
//     null,
//   ],
//   ["music", "rescue-robot-1", "music", null, null, 70 * 60 * 1000, 100, null],
//   [
//     "wait",
//     "Wait for train",
//     "wait",
//     null,
//     null,
//     10 * 60 * 1000,
//     100,
//     "toTrain",
//   ],
//   ["train", "Train ride", "train", null, null, 45 * 60 * 1000, 75, null],
//   ["toWork", "Walk to work", "walk", null, null, 10 * 60 * 1000, 0, "train"],
//   ["work", "Sit down at desk", null, null, null, 2 * 60 * 1000, 0, "toWork"],
// ];

// export const data = [columns, ...rows];

// export const options = {
//   height: 275,
//   gantt: {
//     defaultStartDateMillis: new Date(2015, 3, 28),
//   },
// };

// const Charts = () => {
//   return (
//     <Chart
//       chartType="Gantt"
//       width="50%"
//       height="50%"
//       data={data}
//       options={options}
//     />
//   );
// }
// export default Charts