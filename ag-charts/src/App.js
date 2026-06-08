import React, { useState } from "react";
import { AgCharts } from "ag-charts-react"
import { AllCommunityModule, ModuleRegistry } from "ag-charts-community"

// Enable all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

function App() {
  const [chartOptions, setChartOptions] = useState({
        height: 1000,
        // Data: Data to be displayed in the chart
        title: {
          text: "Ice Cream Sale and Avg Temp",
        },
        subtitle: {
          text: "2022 Data"
        },
        data: [
            { month: 'Jan', avgTemp: 2.3, iceCreamSales: 162000 },
            { month: 'Mar', avgTemp: 6.3, iceCreamSales: 302000 },
            { month: 'May', avgTemp: 16.2, iceCreamSales: 800000 },
            { month: 'Jul', avgTemp: 22.8, iceCreamSales: 1254000 },
            { month: 'Sep', avgTemp: 14.5, iceCreamSales: 950000 },
            { month: 'Nov', avgTemp: 8.9, iceCreamSales: 200000 },
        ],
        // Series: Defines which chart type and data to use
        series: [
        {
            type: 'bar',
            xKey: 'month',
            yKey: 'iceCreamSales',
            // y-axis Key, to link series to an axis
            yKeyAxis: 'priceAxis',
            yName: "Ice Cream Sales",
        },
        {
            type: 'line',
            xKey: 'month',
            yKey: 'avgTemp',
            // y-axis Key, to link series to an axis
            yKeyAxis: 'temperatureAxis',
            yName: "Avergae Temp"
        },
    ],
        axes: {
        // Use left axis for 'iceCreamSales' series
        priceAxis: {
            type: 'number',
            position: 'left',
            label: {
              formatter: (params) => {
                return "$" + parseFloat(params.value).toLocaleString();
              }
            }
        },
        // Use right axis for 'avgTemp' series
        temperatureAxis: {
            type: 'number',
            position: 'right',
            label: {
              formatter: (params) => {
                return params.value + ' °C';
              }
            }
        },
    },
    });


  return (
    <div className="App">
      <AgCharts options={chartOptions} />
    </div>
  );
}

export default App;
