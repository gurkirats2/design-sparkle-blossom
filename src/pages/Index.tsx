
import React from 'react';
import FloorPlan from '@/components/FloorPlan';
import { Separator } from '@/components/ui/separator';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="relative w-full max-w-7xl">
        <FloorPlan />
        <div className="absolute top-0 right-0 h-full">
          <Separator orientation="vertical" className="h-full bg-gray-800" />
        </div>
      </div>
    </div>
  );
};

export default Index;
