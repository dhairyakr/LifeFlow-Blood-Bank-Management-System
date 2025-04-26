import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface BloodAvailabilityChartProps {
  data: {
    bloodType: string;
    units: number;
    status: 'High' | 'Medium' | 'Low' | 'Critical';
  }[];
}

const BloodAvailabilityChart: React.FC<BloodAvailabilityChartProps> = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.bloodType),
    datasets: [
      {
        label: 'Units Available',
        data: data.map(item => item.units),
        backgroundColor: data.map(item => {
          switch (item.status) {
            case 'High':
              return 'rgba(34, 197, 94, 0.7)';
            case 'Medium':
              return 'rgba(234, 179, 8, 0.7)';
            case 'Low':
              return 'rgba(249, 115, 22, 0.7)';
            case 'Critical':
              return 'rgba(239, 68, 68, 0.7)';
            default:
              return 'rgba(156, 163, 175, 0.7)';
          }
        }),
        borderColor: data.map(item => {
          switch (item.status) {
            case 'High':
              return 'rgb(22, 163, 74)';
            case 'Medium':
              return 'rgb(202, 138, 4)';
            case 'Low':
              return 'rgb(234, 88, 12)';
            case 'Critical':
              return 'rgb(220, 38, 38)';
            default:
              return 'rgb(107, 114, 128)';
          }
        }),
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            const label = context.label || '';
            const value = context.raw || 0;
            const status = data[context.dataIndex].status;
            return `${label}: ${value} units (${status})`;
          }
        }
      }
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-text-dark mb-4">Blood Availability</h3>
      <div className="h-64">
        <Doughnut data={chartData} options={options} />
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {data.map((item) => (
          <div 
            key={item.bloodType}
            className="flex items-center justify-between p-2 rounded-md"
            style={{
              backgroundColor: item.status === 'Critical' 
                ? 'rgba(254, 226, 226, 0.5)' 
                : item.status === 'Low'
                ? 'rgba(255, 237, 213, 0.5)'
                : 'rgba(240, 253, 244, 0.5)'
            }}
          >
            <span className="font-medium">{item.bloodType}</span>
            <span 
              className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                item.status === 'Critical' 
                  ? 'bg-red-500 text-white' 
                  : item.status === 'Low'
                  ? 'bg-orange-500 text-white'
                  : item.status === 'Medium'
                  ? 'bg-yellow-500 text-white'
                  : 'bg-green-500 text-white'
              }`}
            >
              {item.units} units
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BloodAvailabilityChart;