import React from 'react';
import Chart from 'react-google-charts';
import { drawChart } from '../actions';

const GoogleChart = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm"></div>
        <div className="col-sm">
          <div style={{ display: 'flex', maxWidth: 900 }}>
            <Chart
              width={300}
              height={300}
              chartType="BarChart"
              loader={<div>Loading Chart</div>}
              data={drawChart()['data']}
              options={{
                chartArea: { width: '50%' },
                hAxis: {
                  title: 'Действия',
                  minValue: 0,
                },
                vAxis: {
                  title: '',
                },
              }}
              legendToggle
            />
          </div>
        </div>
        <div className="col-sm"></div>
      </div>
    </div>
  )
}

export default GoogleChart;
