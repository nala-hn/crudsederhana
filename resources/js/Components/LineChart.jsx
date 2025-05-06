import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import Chart from "react-apexcharts";

export default function LineChart() {
    const [categories, setCategories] = useState([]);
    const [seriesData, setSeriesData] = useState([]);
  
    useEffect(() => {
      axios.get("/chart-data-perhari").then((res) => {
        const data = res.data;
        const labels = data.map(item => item.day);
        const values = data.map(item => item.total);
  
        setCategories(labels);
        setSeriesData(values);
      });
    }, []);
  
    const chartConfig = {
      type: "line",
      height: 240,
      series: [
        {
          name: "Quantity",
          data: seriesData,
        },
      ],
      options: {
        chart: {
          toolbar: { show: false },
        },
        title: {
          show: "",
        },
        dataLabels: {
          enabled: false,
        },
        colors: ["#020617"],
        stroke: {
            lineCap: "round",
            curve: "smooth",
          },
        plotOptions: {
          bar: {
            columnWidth: "40%",
            borderRadius: 2,
          },
        },
        xaxis: {
          axisTicks: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
            labels: {
              style: {
                colors: "#616161",
                fontSize: "12px",
                fontFamily: "inherit",
                fontWeight: 400,
              },
            },
          categories: categories,
        },
        yaxis: {
          labels: {
              style: {
                colors: "#616161",
                fontSize: "12px",
                fontFamily: "inherit",
                fontWeight: 400,
              },
            },
          },
          grid: {
            show: true,
            borderColor: "#dddddd",
            strokeDashArray: 5,
            xaxis: {
              lines: {
                show: true,
              },
            },
            padding: {
              top: 5,
              right: 20,
            },
          },
          fill: {
            opacity: 0.8,
          },
          tooltip: {
            theme: "dark",
          },
          title: { text: 'Quantity' },
        },
    };
  
    return <Chart {...chartConfig} />;
  }
