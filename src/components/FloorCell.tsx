
import React from 'react';
import { cn } from '@/lib/utils';

interface FloorCellProps {
  roomNumber: string;
  sizes: string[];
  isBlue?: boolean;
  isSpecial?: boolean;
  small?: boolean;
}

const FloorCell: React.FC<FloorCellProps> = ({ roomNumber, sizes, isBlue = false, isSpecial = false, small = false }) => {
  return (
    <div 
      className={cn(
        "border border-gray-800 p-1 flex flex-col items-center justify-center",
        isBlue ? "bg-floorplan-blue text-white" : "bg-floorplan-green",
        isSpecial ? "bg-white" : "",
        small ? "text-[8px]" : "text-sm"
      )}
    >
      <div className={cn("font-semibold text-center", small ? "text-[8px]" : "")}>{roomNumber}</div>
      {sizes.map((size, index) => (
        <div key={index} className={cn("text-center", small ? "text-[7px]" : "text-xs")}>{size}</div>
      ))}
    </div>
  );
};

export default FloorCell;
