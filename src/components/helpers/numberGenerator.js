import React from 'react';

const NumberGenerator = props => {
  const GenerateNumber = () => {
    const newAmountFormat = props.data
      .toString()
      .split('')
      .reverse()
      .join('')
      .match(/\d{1,3}/g)
      .join('.')
      .split('')
      .reverse()
      .join('');
    return newAmountFormat;
  };
  return <GenerateNumber />;
};

export default NumberGenerator;
