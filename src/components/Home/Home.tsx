import React from 'react';
import { FaUserGraduate, FaChalkboardTeacher, FaMoneyBillWave } from 'react-icons/fa';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Home = () => {
  const polarArea = {
    labels: ['Boys', 'Girls', 'Drops'],
    datasets: [
      {
        data: [55, 35, 10],
        backgroundColor: ['#001d3d', '#659AC6', '#0F22A2'],
        borderColor: ['#001d3d', '#659AC6', '#0F22A2'],
        borderWidth: 1,
      },
    ],
  };

  const polarAreaOptions = {
    responsive: true,
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => {
            const total = tooltipItem.dataset.data.reduce((a: number, b: number, c: number) => a + b + c, 0);
            const percentage = ((tooltipItem.raw / total) * 100).toFixed(1);
            return `${tooltipItem.label}: ${tooltipItem.raw} (${percentage}%)`;
          },
        },
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 px-8 mt-5">
        <div className="w-full md:w-[400px] bg-background dark:bg-mini dark:text-background rounded-lg h-[100px] flex flex-col items-center justify-center text-xl font-semibold p-5 shadow-lg hover:shadow-xl transition-all duration-300">
          <FaUserGraduate className="text-blue-500 text-3xl mb-3" />
          <span>Total Students</span>
        </div>

        <div className="w-full md:w-[400px] bg-background dark:bg-mini dark:text-background rounded-lg h-[100px] flex flex-col items-center justify-center text-xl font-semibold p-5 shadow-lg hover:shadow-xl transition-all duration-300">
          <FaChalkboardTeacher className="text-green-500 text-3xl mb-3" />
          <span>Teachers</span>
        </div>

        <div className="w-full md:w-[400px] bg-background dark:bg-mini dark:text-background rounded-lg h-[100px] flex flex-col items-center justify-center text-xl font-semibold p-5 shadow-lg hover:shadow-xl transition-all duration-300">
          <FaMoneyBillWave className="text-yellow-500 text-3xl mb-3" />
          <span>Yearly Budget</span>
        </div>
      </div>

      <div className='w-1/4 mt-8 px-8 '>
          <Doughnut  data={polarArea} options={polarAreaOptions}/>
          
          </div>
    </div>
  );
};

export default Home;
