import { Bar } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const Bottom = ({ state }) => {
    const technologies = Array.from(state.keys());
    const values = Array.from(state.values());
    
    const chartData = {
        labels: technologies,
        datasets: [
            {
                label: 'Technologies',
                data: values,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const chartOptions = {
        scales: {
            x: {
                type: 'category',
            },
        },
    };

    return (
        <>
        <div>
            <Bar data={chartData} options={chartOptions} />
        </div>
        <div>
        <Doughnut data={chartData} />
    </div>
        </>
        
    );
};

export default Bottom;
