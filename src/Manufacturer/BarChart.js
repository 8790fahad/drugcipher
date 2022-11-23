import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      // position: 'top',
    },
    title: {
      display: true,
      text: "Drug Statistics ",
    },
  },
  title: {
    display: true,
    text: "title ",
  },
};

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Valid Scans",
      data: [80],
      backgroundColor: ["rgba(3, 66, 110,1)"],
      borderColor: ["rgb(3, 66, 110)"],
    },
    {
      label: "Invalid Scans",
      data: [1],
      backgroundColor: ["rgb(191, 226, 205)"],
      borderColor: ["rgb(128, 209, 1)"],
    },
  ],
  borderColor: ["rgb(3, 66, 110)", "rgb(128, 209, 1)"],
  height: "100vh",
};

export default function BarChart({ star = [] }) {
  return (
    <>
      <div style={{}}>
        <Bar options={options} data={data} star={star}/>
      </div>
    </>
  );
}
