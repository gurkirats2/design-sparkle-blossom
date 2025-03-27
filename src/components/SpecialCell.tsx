
import React from 'react';

interface SpecialCellProps {
  text: string;
}

const SpecialCell: React.FC<SpecialCellProps> = ({ text }) => {
  return (
    <div className="border border-gray-800 bg-white p-1 flex items-center justify-center text-black font-bold text-center">
      {text}
    </div>
  );
};

export default SpecialCell;
