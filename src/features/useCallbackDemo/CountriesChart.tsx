import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";

const CountriesChart = ({ data, dataKey }: any) => {
  const navigate = useNavigate();
  const handClick = () => {
    navigate('/dashboard')
  };
  return (
    <div>
        <Button onClick={handClick}>Return to the previous page</Button> 
        <BarChart
          width={1200}
          height={250}
          style={{ margin: "auto" }}
          margin={{ top: 30, left: 20, right: 30 }}
          data={data}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='country' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={dataKey} fill='#8884d8' />
        </BarChart>
    </div>
  );
};

export default CountriesChart;