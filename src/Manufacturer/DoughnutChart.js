import { Doughnut } from 'react-chartjs-2'
// import { Chart, ArcElement, Tooltip,  } from 'chart.js'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  // labels: ["Male", "Female"],
  datasets: [{
    label: '# sdds',
    data: [245, 45],
    backgroundColor: [
      'rgba(3, 66, 110,0.1)',
      'rgba(128, 209, 1,0.1)',
    ],
    borderColor: [
      'rgb(3, 66, 110)',
      'rgb(128, 209, 1)',
    ],
    borderWidth: 1,
  }]
}
export default function DoughnutChart() {
  return (
    <>
      <div>
        <Doughnut data={data} />
      </div>
    </>
  )
}