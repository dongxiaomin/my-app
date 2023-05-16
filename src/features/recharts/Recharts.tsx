import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import CountriesChart from './CountriesChart';
import SelectDataKey from './SelectDataKey';

const BASE_URL = "https://corona.lmao.ninja/v2";

const Recharts = () => {
  const navigate = useNavigate();
  const handClick = () => {
    navigate('/dashboard')
  };
  const [globalStats, setGlobalStats] = useState({});
  const [countries, setCountries] = useState([]);
  const [key, setKey] = useState("cases");

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch(`${BASE_URL}/countries?sort=${key}`);
      const data = await response.json();
      setCountries(data.slice(0, 10));
    };

    fetchCountries();
  }, [key]);
  
  return (
    <div>
      <CountriesChart data={countries} dataKey={key} />
      <SelectDataKey onChange={ (e: any) => setKey(e.target.value) } />
      <br />
      <Button onClick={handClick}>Return to the previous page</Button> 
    </div>
  );
};

export default Recharts;