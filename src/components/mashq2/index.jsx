import React, { useState } from "react";
import Chart from "react-apexcharts";

const ApexChart = () => {
    let [oy1, setoy1] = useState(10);
    let [oy2, setoy2] = useState(20);
    let [oy3, setoy3] = useState(30);
    let [oy4, setoy4] = useState(40);
  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995],
    },
  };

  const series = [
    {
      name: "Foydalanuvchilar",
      data: [oy1,oy2, oy3, oy4],
    },
  ];

    function change() {
        let oy1 = prompt("miqdorni kiriting")
        let oy2 = prompt("miqdorni kiriting")
        let oy3 = prompt("miqdorni kiriting")
        let oy4 = prompt("miqdorni kiriting")
        if (oy1.length > 0 && oy2.length > 0 && oy3.length > 0 && oy4.length > 0) {
            setoy1(oy1)
            setoy2(oy2)
            setoy3(oy3)
            setoy4(oy4)
        } else {
            setoy1(10)
            setoy2(20)
            setoy3(30)
            setoy4(40)
        }
    }
    
  return (
    <div>
          <h2>Oddiy Diagramma</h2>
          <button onClick={change}>
              statistikani ozgartirish
            </button>
          <Chart options={options} series={series} type="bar" width="500" />
    </div>
  );
};

export default ApexChart;
