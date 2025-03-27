
import React from 'react';
import { cn } from '@/lib/utils';

interface FloorCellProps {
  roomNumber: string;
  sizes: string[];
  isBlue?: boolean;
  isSpecial?: boolean;
}

const FloorCell: React.FC<FloorCellProps> = ({ roomNumber, sizes, isBlue = false, isSpecial = false }) => {
  return (
    <div 
      className={cn(
        "border border-gray-800 p-2 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-md animate-scale-in",
        isBlue ? "bg-floorplan-blue text-white" : "bg-floorplan-green",
        isSpecial ? "bg-white" : ""
      )}
    >
      <div className="font-semibold text-center">{roomNumber}</div>
      {sizes.map((size, index) => (
        <div key={index} className="text-sm text-center">{size}</div>
      ))}
    </div>
  );
};

export default FloorCell;
