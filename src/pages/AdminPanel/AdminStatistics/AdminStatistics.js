import * as React from "react";
import Paper from "@mui/material/Paper";
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";

import "./AdminStatistics.css";

const value = [
  { name: "Jan", count: 200 },
  { name: "Feb", count: 100 },
  { name: "Mar", count: 167 },
  { name: "Apr", count: 190 },
  { name: "May", count: 170 },
  { name: "Jun", count: 210 },
  { name: "Jul", count: 150 },
  { name: "Aug", count: 150 },
  { name: "Sep", count: 150 },
  { name: "Okt", count: 150 },
  { name: "Nov", count: 150 },
  { name: "Okt", count: 150 },
  { name: "Nov", count: 150 },
  { name: "Dec", count: 150 },
];

const AdminStatistics = () => {
  const [data, setData] = React.useState(value);

  return (
    <div>
      <Paper>
        <Chart data={data}>
          <ArgumentAxis />
          <ValueAxis max={7} />

          <BarSeries valueField="count" argumentField="name" />
          <Title text="Registration statistics" />
          <Animation style={{ backgroundColor: "red" }} />
        </Chart>
      </Paper>
    </div>
  );
};

export default AdminStatistics;
