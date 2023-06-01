import React from 'react';
import './statistics.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend

);


export default function Statistics({darkmod}) {

    const options = {
        plugins:{
            legend: {
                position: 'top' ,
              },

              title: {
                display: false,
                text: 'ساعت کار',
              }

        },
        scales:{
            x:{
                grid:{
                    display:false
                },
                ticks:{
                    beginAtZero: true,
                    color: darkmod?  'white':'',
                    fontSize: 12,
                }
            },
            y:{
                
                min :0,
                max:9,
                ticks:{
                    stepSize:1,
                    callback: (v)=> v + ' '+ " ساعت ",
                    color: darkmod?  'white':'',

                }
            }
        }
    };

    const data = {
        labels:['خرداد 6', 'خرداد 7', 'خرداد 8', 'خرداد 9', 'خرداد 10', 'خرداد 11', 'خرداد 12'],
        datasets:[{
            label:'ساعت کار',
            data:[ 3 , 8, 5, 4 ,6,1,2],
            backgroundColor : 'transparent',
            borderColor : "rgb(37, 150, 190)",
            pointBorderColor : "rgb(37, 150, 190)",
            tension:0.5
            }],
      };
  return (
        <div className="stats-cuntener" style={{border:`1px solid ${darkmod? 'rgb(37, 150, 190)' :''}`}}>
         
                <Line options={options} data={data} />
        </div>
  );
}
