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
        <div style = {{ display: 'flex'}}>
        <div style={{ border: '3px solid',  width: '50%' }}>
            <Bar data={chartData} options={chartOptions} style = {{height:'70%', width: '70%'}} />
        </div >

        <div style={{ border: '3px solid',  width: '50%' }}>
            <Doughnut data={chartData} style = {{height:'70%', width: '70%'}}/>
        </div>
        </div>
        
    );
};

export default Bottom;
