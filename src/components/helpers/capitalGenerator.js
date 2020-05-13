import React from 'react';

const CapitalizeCheck = props => {
  const GenerateText = () => {
    let bankName = props.bankName;
    let nameResult = '';
    bankName.length > 4
      ? (nameResult = bankName[0].toUpperCase() + bankName.slice(1))
      : (nameResult = bankName.toUpperCase());
    return nameResult;
  };
  return <GenerateText />;
};

export default CapitalizeCheck;
