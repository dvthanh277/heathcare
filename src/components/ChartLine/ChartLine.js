import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import './ChartLine.scss'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
);
export const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: {
            display: true,
            grid: {
                color: '#777777'
            },
            ticks: {
                color: '#FFF',
            }
        },
        y: {
            display: false,
            min: 0,
            max: 185,
        }
    }
};
const labels = ['6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [157.5, 148, 79, 127, 107, 91, 111, 78, 70, 54, 34, 23],
            borderColor: '#FFCC21',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            pointBackgroundColor: '#FFCC21',
        },
        {
            label: 'Dataset 2',
            data: [157.5, 145, 117.69, 111.46, 85.04, 81.43, 64.45, 60.45, 50.74, 28, 21, 14],
            borderColor: '#8FE9D0',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};
function ChartLine() {
    return (
        <Line options={options} data={data} />
    );
}

export default ChartLine;