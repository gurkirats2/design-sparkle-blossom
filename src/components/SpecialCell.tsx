
import React from 'react';

interface SpecialCellProps {
  text: string;
}

const SpecialCell: React.FC<SpecialCellProps> = ({ text }) => {
  return (
    <div className="border border-gray-800 bg-white p-4 flex items-center justify-center text-black font-bold text-center animate-fade-in">
      {text}
    </div>
  );
};

export default SpecialCell;
