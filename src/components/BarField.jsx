import { Bar } from "react-chartjs-2";
import { BarElement,  CategoryScale,Chart as ChartJS,Legend, LinearScale,Title, Tooltip } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement,Title,Tooltip,Legend);

const option={
  indexAxis:'x',
  elements:{
    bar:{
      borderWidth:4,
    },
  },
  responsive:true,
  interaction:{
    mode:'index',
    intersect:false
  },
  scales:{
    x:{
      stacked:true,
    },
    y:{
      stacked:true,
      ticks:{
        stepSize:50,
        min:0,
        max:400,
      }
    }
  },
  plugins:{
    legend:{
      position:'right'
    },
    title:{
      display:true,
      text:'Stacked bar chart'
    }
  }
}


const data = {
  labels:["20", "35", "40", "45", "50", "55", "60"],
  datasets: [
    {
      label: "Product A",
      data: [40,50,80,120,200,220,250],
      backgroundColor: "#000080",
    },
    {
      label:'Product B',
      data:[50,60,90,140,220,250,270],
      backgroundColor:'#0047AB'
    },
     {
      label:'Product C',
      data:[60,80,100,170,250,270,300],
      backgroundColor:'#4169E1'
    }
  ],
};

export default function BarField() {
  return (
    <div className="App">
      <Bar options={option} data={data}/>
    </div>
  );
}