import {
   Chart as ChartJS,
   CategoryScale,
   LinearScale,
   BarElement,
   Title,
   Tooltip,
   Legend,
   PointElement,
   LineElement,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import "./Chart.css"
import PropTypes from 'prop-types';



ChartJS.register(
   BarElement,
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Title,
   Tooltip,
   Legend
)


export default function Chart({ labelsValues, dataValues, optionsLabels }) {
   const data = {
      labels: labelsValues,
      datasets: [
         {
            label: optionsLabels.dataLabel,
            data: dataValues,
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.3)',
            borderWidth: 2,
         },
      ],
   }

   const options = {
      responsive: true,
      plugins: {
         legend: {
            position: 'top',
         },
         title: {
            display: true,
            text: optionsLabels.pluginsLabel,
         },
      },
      scales: {
         y: {
            min: 0,
            // max: vacationsFollowersCount[vacationsFollowersCount.length - 1] * 1.5,
            title: {
               display: true,
               text: optionsLabels.yLabel,
               color: "red",
            }
         },
         x: {
            title: {
               display: true,
               text: optionsLabels.xLabel,
               color: "red",
            }
         }

      },
   };


   return (
      <Bar options={options} data={data} />
   )
}


Chart.propTypes = {
   labelsValues: PropTypes.array.isRequired,
   dataValues: PropTypes.array.isRequired,
   optionsLabels: PropTypes.object
}


