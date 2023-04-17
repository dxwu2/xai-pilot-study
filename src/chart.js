import React from "react";
import { Chart } from "react-google-charts";

const factor = 100000

export const data1 = [
  [
    [
      { type: "string", id: "Robot" },
      { type: "string", id: "Task" },
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

    [
      "dumptruck-1",
      "",
      140*factor,140*factor
    ],
    [
      "firetruck-1",
      "",
      140*factor,140*factor
    ],
    [
      "rescue-robot-1",
      "",
      140*factor,140*factor
    ],
  ],
  [
    [
      { type: "string", id: "Robot" },
      { type: "string", id: "Task" },
      { type: "number", id: "Start" },
      { type: "number", id: "End" },
    ],
    [
      "dumptruck-1",
      "rescue human 2",
      72*factor,92*factor
    ],
    [
      "firetruck-1",
      "put out fire",
      35*factor,40*factor
    ],
    [
      "rescue-robot-1",
      "remove rubble",
      40*factor,58*factor
    ],
    [
      "rescue-robot-1",
      "rescue human 1",
      70*factor,85*factor
    ],

    [
      "dumptruck-1",
      "",
      140*factor,140*factor
    ],
    [
      "firetruck-1",
      "",
      140*factor,140*factor
    ],
    [
      "rescue-robot-1",
      "",
      140*factor,140*factor
    ],
    
  ],
  [
    [
      { type: "string", id: "Robot" },
      { type: "string", id: "Task" },
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

    [
      "dumptruck-1",
      "",
      140*factor,140*factor
    ],
    [
      "firetruck-1",
      "",
      140*factor,140*factor
    ],
    [
      "rescue-robot-1",
      "",
      140*factor,140*factor
    ],
  ],
  [
    [
      { type: "string", id: "Robot" },
      { type: "string", id: "Task" },
      { type: "number", id: "Start" },
      { type: "number", id: "End" },
    ],
    [
      "dumptruck-1",
      "",
      140*factor,140*factor
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
    ],
  
    [
      "firetruck-1",
      "",
      140*factor,140*factor
    ],
    [
      "rescue-robot-1",
      "",
      140*factor,140*factor
    ]
  ]
];

export const data2 = [
  // A: valid but most inefficient solution
  [
    [
      { type: "string", id: "Robot" },
      { type: "string", id: "Task" },
      { type: "number", id: "Start" },
      { type: "number", id: "End" },
    ],
    [
      "firetruck-1",
      "",
      150*factor,150*factor
    ],
    [
      "firetruck-2",
      "",
      150*factor,150*factor
    ],
    [
      "rescue-robot-1",
      "",
      150*factor,150*factor
    ],
    [
      "rescue-robot-2",
      "",
      150*factor,150*factor
    ],
    [
      "rescue-robot-3",
      "",
      150*factor,150*factor
    ],
    [
      "dumptruck-1",
      "",
      150*factor,150*factor
    ],
    [
      "dumptruck-2",
      "",
      150*factor,150*factor
    ],
    [
      "firetruck-1",
      "put out fire A ",
      35*factor,40*factor
    ],
    [
      "firetruck-2",
      "put out fire B",
      40*factor,45*factor
    ],
    [
      "firetruck-1",
      "put out fire C",
      45*factor,50*factor
    ], 
    // dumptruck 4 sec slower getting to start
    [
      "dumptruck-1",
      "remove rubble A",
      44*factor,71*factor
    ],
    [
      "dumptruck-2",
      "remove rubble B",
      49*factor,76*factor
    ],
    // 20 sec gap bt end and start
    [
      "rescue-robot-1",
      "rescue human 1",
      91*factor,101*factor
    ],
    [
      "rescue-robot-2",
      "rescue human 2",
      91*factor,101*factor
    ],
    [
      "rescue-robot-3",
      "rescue human 3",
      91*factor,101*factor
    ],
    [
      "rescue-robot-1",
      "rescue human 4",
      108*factor,118*factor
    ],
    [
      "rescue-robot-2",
      "rescue human 5",
      108*factor,118*factor
    ]
  ],
  // B: optimal solution
  [
    [
      { type: "string", id: "Robot" },
      { type: "string", id: "Task" },
      { type: "number", id: "Start" },
      { type: "number", id: "End" },
    ],
    [
      "firetruck-1",
      "",
      150*factor,150*factor
    ],
    [
      "firetruck-2",
      "",
      150*factor,150*factor
    ],
    [
      "rescue-robot-1",
      "",
      150*factor,150*factor
    ],
    [
      "rescue-robot-2",
      "",
      150*factor,150*factor
    ],
    [
      "rescue-robot-3",
      "",
      150*factor,150*factor
    ],
    [
      "dumptruck-1",
      "",
      150*factor,150*factor
    ],
    [
      "dumptruck-2",
      "",
      150*factor,150*factor
    ],
    [
      "firetruck-1",
      "put out fire A ",
      35*factor,40*factor
    ],
    [
      "firetruck-2",
      "put out fire B",
      40*factor,45*factor
    ],
    [
      "firetruck-1",
      "put out fire C",
      45*factor,50*factor
    ], 
    [
      "rescue-robot-3",
      "remove rubble A",
      40*factor,62*factor
    ],
    [
      "rescue-robot-1",
      "remove rubble B",
      45*factor,67*factor
    ],
    // 20 sec gap bt end and start
    [
      "rescue-robot-1",
      "rescue human 1",
      82*factor,92*factor
    ],
    [
      "rescue-robot-2",
      "rescue human 2",
      82*factor,92*factor
    ],
    [
      "rescue-robot-3",
      "rescue human 3",
      82*factor,92*factor
    ],
    [
      "firetruck-1",
      "rescue human 4",
      87*factor,96*factor
    ],
    [
      "firetruck-2",
      "rescue human 5",
      87*factor,96*factor
    ]
  ],
  // C: fastest but invalid solution because fire B needs to be put out before remove rubble B
  [
    [
      { type: "string", id: "Robot" },
      { type: "string", id: "Task" },
      { type: "number", id: "Start" },
      { type: "number", id: "End" },
    ],
    [
      "firetruck-1",
      "",
      150*factor,150*factor
    ],
    [
      "firetruck-2",
      "",
      150*factor,150*factor
    ],
    [
      "rescue-robot-1",
      "",
      150*factor,150*factor
    ],
    [
      "rescue-robot-2",
      "",
      150*factor,150*factor
    ],
    [
      "rescue-robot-3",
      "",
      150*factor,150*factor
    ],
    [
      "dumptruck-1",
      "",
      150*factor,150*factor
    ],
    [
      "dumptruck-2",
      "",
      150*factor,150*factor
    ],
    [
      "firetruck-1",
      "put out fire A ",
      35*factor,40*factor
    ],
    [
      "firetruck-2",
      "put out fire B",
      40*factor,45*factor
    ],
    [
      "firetruck-1",
      "put out fire C",
      45*factor,50*factor
    ], 
    [
      "rescue-robot-3",
      "remove rubble A",
      40*factor,62*factor
    ],
    [
      "rescue-robot-1",
      "remove rubble B",
      40*factor,62*factor
    ],
    // 20 sec gap bt end and start
    [
      "rescue-robot-1",
      "rescue human 1",
      82*factor,92*factor
    ],
    [
      "rescue-robot-2",
      "rescue human 2",
      82*factor,92*factor
    ],
    [
      "rescue-robot-3",
      "rescue human 3",
      82*factor,92*factor
    ],
    [
      "firetruck-1",
      "rescue human 4",
      82*factor,91*factor
    ],
    [
      "firetruck-2",
      "rescue human 5",
      82*factor,91*factor
    ]
  ],
  // D: valid, better solution than A
  [
    [
      { type: "string", id: "Robot" },
      { type: "string", id: "Task" },
      { type: "number", id: "Start" },
      { type: "number", id: "End" },
    ],
    [
      "firetruck-1",
      "",
      150*factor,150*factor
    ],
    [
      "firetruck-2",
      "",
      150*factor,150*factor
    ],
    [
      "rescue-robot-1",
      "",
      150*factor,150*factor
    ],
    [
      "rescue-robot-2",
      "",
      150*factor,150*factor
    ],
    [
      "rescue-robot-3",
      "",
      150*factor,150*factor
    ],
    [
      "dumptruck-1",
      "",
      150*factor,150*factor
    ],
    [
      "dumptruck-2",
      "",
      150*factor,150*factor
    ],
    [
      "firetruck-1",
      "put out fire A ",
      35*factor,40*factor
    ],
    [
      "firetruck-2",
      "put out fire B",
      40*factor,45*factor
    ],
    [
      "firetruck-1",
      "put out fire C",
      45*factor,50*factor
    ], 
    [
      "dumptruck-1",
      "remove rubble A",
      40*factor,67*factor
    ],
    [
      "dumptruck-2",
      "remove rubble B",
      45*factor,72*factor
    ],
    // 20 sec gap bt end and start
    [
      "rescue-robot-1",
      "rescue human 1",
      87*factor,97*factor
    ],
    [
      "rescue-robot-2",
      "rescue human 2",
      87*factor,97*factor
    ],
    [
      "rescue-robot-3",
      "rescue human 3",
      87*factor,97*factor
    ],
    [
      "firetruck-1",
      "rescue human 4",
      92*factor,102*factor
    ],
    [
      "firetruck-2",
      "rescue human 5",
      92*factor,102*factor
    ]
  ]
]

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
      data={data1[0]}
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
      data={data1[1]}
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
      data={data1[2]}
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
      data={data1[3]}
      options={options}
    />
  );
}

const ChartsQ2A = () => {
  return (
    <Chart
      chartType="Timeline"
      width="80%"
      height="400px"
      data={data2[0]}
      options={options}
    />
  );
}

const ChartsQ2B = () => {
  return (
    <Chart
      chartType="Timeline"
      width="80%"
      height="400px"
      data={data2[1]}
      options={options}
    />
  );
}

const ChartsQ2C = () => {
  return (
    <Chart
      chartType="Timeline"
      width="80%"
      height="400px"
      data={data2[2]}
      options={options}
    />
  );
}

const ChartsQ2D = () => {
  return (
    <Chart
      chartType="Timeline"
      width="80%"
      height="400px"
      data={data2[3]}
      options={options}
    />
  );
}

export {
  ChartsQ1A,
  ChartsQ1B,
  ChartsQ1C,
  ChartsQ1D,
  ChartsQ2A,
  ChartsQ2B,
  ChartsQ2C,
  ChartsQ2D
}
