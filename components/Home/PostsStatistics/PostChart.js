import React, { useRef, useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartArea
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
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
      display: false
    },
    title: {
      display: false,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function createGradient(ctx = CanvasRenderingContext2D, area = ChartArea) {
  const colorStart = '#91A2FE';
  const colorEnd = '#C0CBF9';

  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);

  gradient.addColorStop(0, colorStart);;
  gradient.addColorStop(1, colorEnd);

  return gradient;
}

export default function PostChart({ data }) {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const statisticData = {
    labels,
    datasets: [
      {
        label: 'Total Posts',
        data,
      },
    ],
  };

  useEffect(() => {
    const chart = chartRef.current;

    if (!chart) {
      return;
    }

    const chartData = {
      ...statisticData,
      datasets: statisticData.datasets.map(dataset => ({
        ...dataset,
        backgroundColor: createGradient(chart.ctx, chart.chartArea),
        borderRadius: 9999,
        barThickness: 20
      })),
    };

    setChartData(chartData);
  }, []);

  return <Bar ref={chartRef} options={options} data={chartData} />;
}
