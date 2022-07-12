import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

interface dataPointProps {
  label: string;
  value: number;
}

const Chart = (props: any) => {
  const dataPointValues = props.dataPoints.map(
    (dataPoint: dataPointProps) => dataPoint.value
  );
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <>
      <div className="chart">
        {props.dataPoints.map((dataPoint: dataPointProps) => (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
          />
        ))}
      </div>
    </>
  );
};
export default Chart;
