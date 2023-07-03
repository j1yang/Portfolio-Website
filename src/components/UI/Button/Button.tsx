import React from 'react';

interface ButtonProps {
  name: string;
  link: string;
}

const Button: React.FC<ButtonProps> = ({ name, link }) => {
  const handleClick = () => {
    // Handle button click event here, e.g., redirect to the provided link
    window.open(link, '_blank');
  };

  return (
    
    <button 
      type="button" 
      onClick={handleClick} 
      className="transision ease-in duration-300 hover:font-bold  w-[140px] h-[40px] text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none m-2" >
      <span className="">{name}</span>
    </button>

  );
};

export default Button;
