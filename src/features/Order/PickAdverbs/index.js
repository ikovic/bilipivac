import React from 'react';

const ADVERB_TYPES = [
  'tzatziki',
  'chili',
  'majoneza',
  'ketchup',
  'tartar',
  'kupus',
  'salata',
  'jaja',
  'pome',
  'kiseli krastavci',
  'svjezi krastavci',
  'kapula',
  'paprika'
];

const renderCheckboxes = (onChange, selectedAdverbs, adverbTypes) => adverbTypes.map(adverb => {
  const checked = selectedAdverbs.includes(adverb);

  return (
    <label htmlFor={adverb}>
      <input
        id={adverb}
        key={adverb}
        type='checkbox'
        value={adverb}
        checked={checked}
        onChange={onChange}
      />
      {adverb}
    </label>
  )
})

const PickAdverbs = ({ adverbs, onChange }) => (
  <div>
    {renderCheckboxes(onChange, adverbs, ADVERB_TYPES)}
  </div>
);

export default PickAdverbs;