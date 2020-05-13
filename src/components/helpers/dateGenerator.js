import React from 'react';

const DateGenerator = props => {
  const GenerateDate = () => {
    const [y, m, d] = props.data.split('-');
    const month = [
      'Januari',
      'Februari',
      'Maret',
      'April',
      'Mei',
      'Juni',
      'Juli',
      'Agustus',
      'September',
      'Oktober',
      'November',
      'Desember',
    ];
    return `${d} ${month[m - 1]} ${y}`;
  };
  return <GenerateDate />;
};

export default DateGenerator;
