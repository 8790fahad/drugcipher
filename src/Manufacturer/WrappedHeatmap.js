import React from "react";
import HeatMap from "react-heatmap-grid";

function WrappedHeatmap() {
  const xLabels = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23"
  ];
  const yLabels = ["S", "M", "T", "w", "T", "F", "S"];
  const data = new Array(yLabels.length)
    .fill(0)
    .map(() =>
      new Array(xLabels.length)
        .fill(0)
        .map(() => Math.floor(Math.random() * 100))
    );

  return (
    <div>
      <div className="box">
        <HeatMap
          background={"rgb(3, 66, 110)"}
          height={24}
          squares={true}
          xLabels={xLabels}
          yLabels={yLabels}
          // xLabelWidth={200}
          // yLabelWidth={200}
          xLabelsLocation={'bottom'}
          data={data}
          unit={'times'}
          // title={'dsd'}
        />
        {/* <div className="space" />
        <HeatMap
          background={"#f73378"}
          height={24}
          squares={true}
          xLabels={xLabels}
          yLabels={yLabels}
          data={data}
        />
      </div>
      <div className="circle">
        <HeatMap
          background={"#5E35B1"}
          height={16}
          squares={true}
          xLabels={xLabels}
          yLabels={yLabels}
          data={data}
        /> */}
      </div>
    </div>
  );
}

export default WrappedHeatmap;
