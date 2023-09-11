import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale } from 'chart.js';

Chart.register(CategoryScale);

const BarChart = ({ data }) => {
  return  <Bar data={data} options={{ scales: { x: { type: 'category' } } }} />
  
};

export default BarChart;
