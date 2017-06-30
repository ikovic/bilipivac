import React from 'react';

const CHICKEN_TYPES = [
  'Americano',
  'Italiano',
  'Slavonac',
  'Curry',
  'Gyros',
  'Gorgonzola',
  'Dalmatinac'
];

const renderOptions = types => types.map(type => (
  <option key={type} value={type} >{type}</option>
));

const SelectChicken = ({ chicken, onChange }) => (
  <select value={chicken} onChange={onChange}>
    {renderOptions(CHICKEN_TYPES)}
  </select>
);

export default SelectChicken;