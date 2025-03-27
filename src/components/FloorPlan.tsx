
import React from 'react';
import FloorCell from './FloorCell';
import SpecialCell from './SpecialCell';

const FloorPlan: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-12 gap-0.5 border border-gray-800">
        {/* Top Row */}
        <div className="col-span-1"><FloorCell roomNumber="266" sizes={["18m²", "44m²"]} /></div>
        <div className="col-span-1"><FloorCell roomNumber="267" sizes={["13.5m²", "37m²"]} /></div>
        <div className="col-span-1"><FloorCell roomNumber="268" sizes={["13.5m²", "37m²"]} /></div>
        <div className="col-span-1"><FloorCell roomNumber="271" sizes={["13.5m²", "37m²"]} /></div>
        <div className="col-span-1"><FloorCell roomNumber="272" sizes={["8.75m²", "24m²"]} /></div>
        <div className="col-span-1"><FloorCell roomNumber="274" sizes={["8.75m²", "24m²"]} /></div>
        <div className="col-span-1"><FloorCell roomNumber="276" sizes={["8.75m²", "24m²"]} /></div>
        <div className="col-span-1"><FloorCell roomNumber="277" sizes={["8.75m²", "24m²"]} /></div>
        <div className="col-span-1"><FloorCell roomNumber="279" sizes={["8.75m²", "24m²"]} /></div>
        <div className="col-span-1"><FloorCell roomNumber="280" sizes={["8.75m²", "24m²"]} /></div>
        <div className="col-span-1"><FloorCell roomNumber="282" sizes={["8.75m²", "24m²"]} /></div>
        <div className="col-span-1"><FloorCell roomNumber="283" sizes={["8.75m²", "19.5m²"]} isBlue={true} /></div>

        {/* Second Row */}
        <div className="col-span-1"><FloorCell roomNumber="265.1" sizes={["6m²", "16m²"]} /></div>
        <div className="col-span-10"></div>
        <div className="col-span-1"><FloorCell roomNumber="284" sizes={["3m²"]} /></div>

        {/* Third Row */}
        <div className="col-span-1"><FloorCell roomNumber="265" sizes={["8m²", "22m²"]} /></div>
        <div className="col-span-1"><FloorCell roomNumber="264" sizes={["8m²", "19.5m²"]} /></div>
        <div className="col-span-2"><FloorCell roomNumber="266" sizes={["20.5m²", "7.5m²"]} /></div>
        <div className="col-span-1"><FloorCell roomNumber="270" sizes={["20.5m²", "7.5m²"]} /></div>
        <div className="col-span-1"></div>
        <div className="col-span-1"><FloorCell roomNumber="273" sizes={["5.25m²", "17m²"]} /></div>
        <div className="col-span-1"><FloorCell roomNumber="275" sizes={["5.25m²", "17m²"]} /></div>
        <div className="col-span-1"><FloorCell roomNumber="278" sizes={["5.25m²", "17m²"]} isBlue={true} /></div>
        <div className="col-span-1"><FloorCell roomNumber="281" sizes={["5.25m²", "17m²"]} /></div>
        <div className="col-span-1"><FloorCell roomNumber="285" sizes={["3m²"]} /></div>

        {/* Fourth Row */}
        <div className="col-span-1"><FloorCell roomNumber="261" sizes={["8.5m²", "23m²"]} /></div>
        <div className="col-span-1"><FloorCell roomNumber="262" sizes={["9.5m²", "17.75m²"]} /></div>
        <div className="col-span-2"><SpecialCell text="LIFT" /></div>
        <div className="col-span-1"><FloorCell roomNumber="341" sizes={["5.25m²", "14m²"]} /></div>
        <div className="col-span-1"><FloorCell roomNumber="338" sizes={["5.25m²", "14m²"]} /></div>
        <div className="col-span-1"><FloorCell roomNumber="336" sizes={["5.25m²", "14m²"]} /></div>
        <div className="col-span-1"><FloorCell roomNumber="334" sizes={["5.25m²", "14m²"]} /></div>
        <div className="col-span-1"><FloorCell roomNumber="287" sizes={["3m²"]} /></div>

        {/* Fifth Row */}
        <div className="col-span-1"><FloorCell roomNumber="260" sizes={["2m²", "5.5m²"]} /></div>
        <div className="col-span-1"><FloorCell roomNumber="259" sizes={["2m²", "5.5m²"]} /></div>
        <div className="col-span-1"><FloorCell roomNumber="258" sizes={["2m²", "5.5m²"]} /></div>
        <div className="col-span-1"><FloorCell roomNumber="257" sizes={["2m²", "5.5m²"]} /></div>
        <div className="col-span-1"><FloorCell roomNumber="256" sizes={["2m²", "5.5m²"]} /></div>
        <div className="col-span-1"><FloorCell roomNumber="255" sizes={["2m²", "5.5m²"]} /></div>
        <div className="col-span-1"></div>
        <div className="col-span-1"><FloorCell roomNumber="342" sizes={["3.5m²", "9.5m²"]} /></div>
        <div className="col-span-1"><FloorCell roomNumber="340" sizes={["3.75m²", "10m²"]} /></div>
        <div className="col-span-1"><FloorCell roomNumber="339" sizes={["3.75m²", "10m²"]} /></div>
        <div className="col-span-1"><FloorCell roomNumber="337" sizes={["3.75m²", "10m²"]} /></div>
        <div className="col-span-1"><FloorCell roomNumber="335" sizes={["3.75m²", "10m²"]} /></div>
        <div className="col-span-1"><FloorCell roomNumber="288" sizes={["3m²"]} /></div>
        
        {/* Sixth Row with Floor Label */}
        <div className="col-span-6">
          <div className="border border-gray-800 bg-white p-4 flex flex-col items-center justify-center">
            <div className="font-bold">HAL 2 BOVEN</div>
            <div>Verdieping 2</div>
          </div>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-1"><FloorCell roomNumber="321" sizes={["3.5m²", "9.5m²"]} /></div>
        <div className="col-span-1"><FloorCell roomNumber="323" sizes={["3.75m²", "10m²"]} /></div>
        <div className="col-span-1"><FloorCell roomNumber="325" sizes={["3.75m²", "10m²"]} /></div>
        <div className="col-span-1"><FloorCell roomNumber="327" sizes={["3.75m²", "10m²"]} /></div>
        <div className="col-span-1"><FloorCell roomNumber="329" sizes={["3.75m²", "10m²"]} /></div>
        <div className="col-span-1"><FloorCell roomNumber="289" sizes={["3m²"]} /></div>
        
        {/* Seventh Row */}
        <div className="col-span-7"></div>
        <div className="col-span-1"><FloorCell roomNumber="333" sizes={["3.5m²", "9.5m²"]} /></div>
        <div className="col-span-1"><FloorCell roomNumber="331" sizes={["3.5m²", "9.5m²"]} /></div>
        <div className="col-span-2"></div>
        <div className="col-span-1"><FloorCell roomNumber="290" sizes={["3m²"]} /></div>
        
        {/* Eighth Row */}
        <div className="col-span-7"></div>
        <div className="col-span-1"><FloorCell roomNumber="320" sizes={["6.25m²", "19.5m²"]} /></div>
        <div className="col-span-1"><FloorCell roomNumber="322" sizes={["5.25m²", "14m²"]} /></div>
        <div className="col-span-1"><FloorCell roomNumber="324" sizes={["4m²", "11m²"]} /></div>
        <div className="col-span-1"><FloorCell roomNumber="326" sizes={["6.75m²", "12.75m²"]} /></div>
        <div className="col-span-1"><FloorCell roomNumber="328" sizes={["5.25m²", "14m²"]} /></div>
        <div className="col-span-1"><FloorCell roomNumber="291" sizes={["5m²"]} /></div>
        
        {/* Ninth Row */}
        <div className="col-span-7"></div>
        <div className="col-span-1"><FloorCell roomNumber="330" sizes={["4m²", "11m²"]} /></div>
        <div className="col-span-1"><FloorCell roomNumber="332" sizes={["3.75m²", "10m²"]} /></div>
        <div className="col-span-2"></div>
        <div className="col-span-1"><FloorCell roomNumber="292" sizes={["3m²"]} /></div>
        
        {/* Tenth Row */}
        <div className="col-span-1"><FloorCell roomNumber="319" sizes={["2m²", "5.5m²"]} /></div>
        <div className="col-span-1"><FloorCell roomNumber="317" sizes={["2m²", "5.5m²"]} /></div>
        <div className="col-span-1"><FloorCell roomNumber="316" sizes={["2m²", "5.5m²"]} /></div>
        <div className="col-span-1"><FloorCell roomNumber="314" sizes={["2m²", "5.5m²"]} /></div>
        <div className="col-span-1"><FloorCell roomNumber="313" sizes={["2m²", "5.5m²"]} /></div>
        <div className="col-span-1"><FloorCell roomNumber="311" sizes={["3m²", "8m²"]} /></div>
        <div className="col-span-1"></div>
        <div className="col-span-1"><FloorCell roomNumber="309" sizes={["4m²", "10.5m²"]} /></div>
        <div className="col-span-1"><FloorCell roomNumber="307" sizes={["4.25m²", "11.5m²"]} /></div>
        <div className="col-span-1"><FloorCell roomNumber="304" sizes={["4.75m²", "13m²"]} /></div>
        <div className="col-span-1"><FloorCell roomNumber="302" sizes={["4.75m²", "13m²"]} /></div>
        <div className="col-span-1"><FloorCell roomNumber="299" sizes={["4.75m²", "13m²"]} /></div>
        <div className="col-span-1"><FloorCell roomNumber="293" sizes={["3m²"]} /></div>
        
        {/* Bottom Row - Small Cells */}
        <div className="col-span-12 grid grid-cols-24 gap-0.5">
          <div className="col-span-1"><FloorCell roomNumber="318" sizes={["2m²", "5m³"]} small={true} /></div>
          <div className="col-span-1"><FloorCell roomNumber="318-1" sizes={["2m²", "5m³"]} small={true} /></div>
          <div className="col-span-1"><FloorCell roomNumber="318-2" sizes={["2m²", "5m³"]} small={true} /></div>
          <div className="col-span-1"><FloorCell roomNumber="315" sizes={["2m²", "5m³"]} small={true} /></div>
          <div className="col-span-1"><FloorCell roomNumber="315-1" sizes={["2m²", "5m³"]} small={true} /></div>
          <div className="col-span-1"><FloorCell roomNumber="315-2" sizes={["2m²", "5m³"]} small={true} /></div>
          <div className="col-span-1"><FloorCell roomNumber="312" sizes={["2m²", "5m³"]} small={true} /></div>
          <div className="col-span-1"><FloorCell roomNumber="312-1" sizes={["2m²", "5m³"]} small={true} /></div>
          <div className="col-span-1"><FloorCell roomNumber="312-2" sizes={["2m²", "5m³"]} small={true} /></div>
          <div className="col-span-1"><FloorCell roomNumber="310" sizes={["2m²", "5m³"]} small={true} /></div>
          <div className="col-span-1"><FloorCell roomNumber="310-1" sizes={["2m²", "5m³"]} small={true} /></div>
          <div className="col-span-1"><FloorCell roomNumber="310-2" sizes={["2m²", "5m³"]} small={true} /></div>
          <div className="col-span-1"><FloorCell roomNumber="308" sizes={["3m²", "8m³"]} small={true} /></div>
          <div className="col-span-1"><FloorCell roomNumber="308-1" sizes={["3m²", "8m³"]} small={true} /></div>
          <div className="col-span-1"><FloorCell roomNumber="305" sizes={["3m²", "8m³"]} small={true} /></div>
          <div className="col-span-1"><FloorCell roomNumber="305-1" sizes={["3m²", "8m³"]} small={true} /></div>
          <div className="col-span-1"><FloorCell roomNumber="303" sizes={["3m²", "8m³"]} small={true} /></div>
          <div className="col-span-1"><FloorCell roomNumber="303-1" sizes={["3m²", "8m³"]} small={true} /></div>
          <div className="col-span-1"><FloorCell roomNumber="300" sizes={["3m²", "8m³"]} small={true} /></div>
          <div className="col-span-1"><FloorCell roomNumber="300-1" sizes={["3m²", "8m³"]} small={true} /></div>
          <div className="col-span-3"></div>
          <div className="col-span-1"><FloorCell roomNumber="294" sizes={["3m²"]} /></div>
        </div>
        
        {/* Right Side Column */}
        <div className="col-span-11"></div>
        <div className="col-span-1 grid grid-rows-6 gap-0.5">
          <div><FloorCell roomNumber="295" sizes={["3m²"]} /></div>
          <div><FloorCell roomNumber="296" sizes={["3m²"]} /></div>
          <div><FloorCell roomNumber="297" sizes={["8m²"]} /></div>
          <div><FloorCell roomNumber="298" sizes={["8m²"]} /></div>
        </div>
      </div>
    </div>
  );
};

export default FloorPlan;
