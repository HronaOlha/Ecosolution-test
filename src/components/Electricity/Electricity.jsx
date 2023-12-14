import { useState, useEffect } from 'react';

import {
  ElectricitySection,
  ElectricityTitle,
  ElectricityCounter,
  VerticalLine,
} from './Electricity.styled';

const Electricity = () => {
  const [electricity, setElectricity] = useState(() => {
    const savedElectricity = localStorage.getItem('electricity');
    return savedElectricity ? parseInt(savedElectricity, 10) : 1134147814;
  });

  const numberFormat = n => {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setElectricity(prevElectricity => {
        const newElectricity = prevElectricity + 1;
        localStorage.setItem('electricity', newElectricity.toString());
        return newElectricity;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <ElectricitySection aria-label="Electricity counter section">
      <ElectricityTitle>Electricity we produced for all time</ElectricityTitle>
      <VerticalLine />
      <ElectricityCounter>
        <p>{numberFormat(electricity)}</p>
        <span>kWh</span>
      </ElectricityCounter>
    </ElectricitySection>
  );
};

export default Electricity;
