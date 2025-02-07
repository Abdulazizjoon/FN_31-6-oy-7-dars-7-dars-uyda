import axios from "axios";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

function Apichart() {
  const [data, setData] = useState([]);
  const [chartData, setChartData] = useState({
    series: [],
    options: {
      chart: {
        id: "currency-chart",
      },
      xaxis: {
        categories: [],
      },
      title: {
        text: "Valyuta kurslari",
        align: "center",
      },
    },
  });

  useEffect(() => {
    axios
      .get(`https://cbu.uz/uz/arkhiv-kursov-valyut/json/`)
      .then((response) => {
        if (response.status === 200) {
          const fetchedData = response.data;
          setData(fetchedData);
          console.log('setdata',data);
          console.log('fetchdata',fetchedData);
                    

          const dates = fetchedData.map((item) => item.date); 
          const rates = fetchedData.map((item) => item.Rate); 

          setChartData({
            series: [
              {
                name: "Valyuta kursi",
                data: rates,
              },
            ],
            options: {
              ...chartData.options,
              xaxis: {
                categories: dates, 
              },
            },
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2>Valyuta kursi bo'yicha chart</h2>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="line" 
        width="600"
      />
    </div>
  );
}

export default Apichart;
