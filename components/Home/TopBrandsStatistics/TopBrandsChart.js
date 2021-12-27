import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
    plugins: {
        legend: {
            display: false
        }
    }
}

export default function TopBrandsChart({data}) {
    const newData = {
        labels: data.map(d => d.label),
        datasets: [
            {
            data: data.map(d => d.value),
            backgroundColor: [
                '#5600E8',
                '#7F39FB',
                '#985EFF',
                '#BB86FC',
                '#DBB2FF'
            ],
            borderColor: new Array(5).fill('#ffffff'),
            borderWidth: 5,
            },
        ],
    };

    return <Doughnut data={newData} options={options} />;
}
