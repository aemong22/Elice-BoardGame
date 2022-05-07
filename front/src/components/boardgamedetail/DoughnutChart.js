import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart({ field, value, totalValue }) {
    const color = [
        '#B8D8D8',
        '#7A9E9F',
        '#4F6367',
        '#879ca1',
        '#94a2a6',
        '#8aadb8',
    ]
    const unit = ['위', '점', '개']
    const selectUnit = () => {
        switch (field) {
            case '랭킹' : return unit[0];
            case '평점' : return unit[1];
            case '리뷰' : return unit[2];
        }
    }

    const data = {
        labels: [field],
        datasets: [
          {
            label: '# of Votes',
            data: [value, totalValue === 0 ? null : totalValue - value],
            backgroundColor: [
                color[Math.floor(( Math.random() * color.length))],
                'rgba(159, 159, 159, 0.2)'
            ],
            cutout: "65%",
          },
        ],
      };
    
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: false,
                text: field
            },
        }
    }

    return (
        <div className="chart-doughnut" style={{ position: "relative", width:"200px", height: "200px"}}>
            <div style={{ 
                position: "relative", 
                left: "32%", 
                top:"49%", 
                margind: "0",
                fontSize: "large",
                fontWeight: "bold",
                width: "80px",
                textAlign: "center",
            }} >
                {
                    `${value}${selectUnit()}`
                }
            </div>
            <Doughnut
                data={data}
                options={options}
            />
        </div>

    )
}

export default DoughnutChart;