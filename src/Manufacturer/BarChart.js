import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
} from 'chart.js';
import { Bar } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            // position: 'top',
        },
        title: {
            display: true,
            text: 'title ',
        },
    },
};


const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    datasets: [
        {
            label: 'aa',
            data: [1, 2, 3, 4, 5, 6, 7, 3, 4, 5, 3, 5],
            backgroundColor: [
                'rgba(3, 66, 110,1)'
            ],
            borderColor: [
                'rgb(3, 66, 110)',
            ],
        },
        {
            label: 'bb',
            data: [1, 2, 3, 4, 5, 6, 7, 3, 4, 5, 6, 1],
            backgroundColor: [
                'rgb(191, 226, 205)'
            ],
            borderColor: [
                'rgb(128, 209, 1)',
            ],
        },
    ],
    borderColor: [
        'rgb(3, 66, 110)',
        'rgb(128, 209, 1)',
    ],
    height: '100vh'
};

export default function BarChart() {
    return (
        <>
            <div style={{ width: '' }}>
                <Bar options={options} data={data} />
            </div>
        </>
    )
}