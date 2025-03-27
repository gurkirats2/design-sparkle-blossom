
import React from 'react';
import FloorPlan from '@/components/FloorPlan';
import { motion } from 'framer-motion';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white border-b border-gray-200 py-6 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-semibold text-gray-900">Interactive Floor Plan</h1>
          <p className="text-gray-600 mt-1">Building floor layout with room dimensions</p>
        </div>
      </header>
      
      <main className="flex-1 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            <div className="p-6">
              <h2 className="text-2xl font-medium text-gray-800 mb-6">Floor Plan - Level 2</h2>
              <div className="overflow-auto">
                <FloorPlan />
              </div>
            </div>
          </div>
          
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
              <h3 className="text-xl font-medium text-gray-800 mb-3">Legend</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-floorplan-green mr-3 border border-gray-800"></div>
                  <span>Standard Room</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-floorplan-blue mr-3 border border-gray-800"></div>
                  <span>Special Access Room</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-white mr-3 border border-gray-800"></div>
                  <span>Facility/Common Area</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
              <h3 className="text-xl font-medium text-gray-800 mb-3">Room Dimensions</h3>
              <p className="text-gray-700">
                Room dimensions are displayed in square meters (m²) and cubic meters (m³) where applicable.
              </p>
              <p className="text-gray-700 mt-2">
                Top number indicates floor area while bottom number indicates volume.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
              <h3 className="text-xl font-medium text-gray-800 mb-3">Navigation</h3>
              <p className="text-gray-700">
                This is level 2 of the building ("Hal 2 Boven"). 
              </p>
              <p className="text-gray-700 mt-2">
                Use the lift area to navigate between floors.
              </p>
              <button className="mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition duration-300">
                View Other Floors
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-white border-t border-gray-200 py-6 mt-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
          Floor Plan Visualization • Interactive Building Layout
        </div>
      </footer>
    </div>
  );
};

export default Index;
