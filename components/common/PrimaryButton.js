import React from 'react';

const PrimaryButton = ({ color, action, title }) => {
  return (
    <button 
      onClick={action} 
      className={`py-2 px-4 text-center text-white  ${color} w-full my-2 font-regular`}
    >
      {title}
    </button>
  );
};

export default PrimaryButton;
