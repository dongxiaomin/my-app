import React, { useEffect, useState } from 'react';
import { useCoronaAPI } from '../../hooks/useCoronaAPI'; 
import { Button } from 'antd';

const UseCallback = () => {
  // const globalStats = useCoronaAPI("/all", {
  //   initialData: {},
  //   refetchInterval: null,
  // });
  
  // const [key, setKey] = useState("cases");
  // const countries = useCoronaAPI(`/countries?sort=${key}`, {
  //   initialData: {},
  //   converter: (data) => data.slice(0, 10),
  // });
  // const handClick = () => {
  //   countries()
  // }
  return (
    <div>
      UseCallback practice
      <Button></Button> 
    </div>
  );
};

export default UseCallback;