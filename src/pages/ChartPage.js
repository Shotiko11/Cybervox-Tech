import React from 'react';
import BarChart from '@/app/piechart/PieChartUsers';

const ChartPage = () => {
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Satisfied Users',
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        data: [20, 25, 30, 35, 40],
      },
      {
        label: 'Unsatisfied Users',
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        data: [5, 10, 15, 20, 25],
      },
    ],
  };

  return (
    <div>
      <h1>User Satisfaction Chart</h1>
      <BarChart data={chartData} />
    </div>
  );
};

export default ChartPage;