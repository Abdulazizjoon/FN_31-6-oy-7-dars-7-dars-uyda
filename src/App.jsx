import React from 'react'
import Test from './components/mashq1';
import ApexChart from './components/mashq2';
import Apichart from './components/mashq3';
import Universal from './components/mashq4';

function App() {
  return (
    <div>
      <div>
        <h2 className="flex justify-center">1-mashq</h2>
        <Test className="w-1/2 h-1/2 mx-auto" />
      </div>
      <div className="mt-9">
        <h2 className="flex justify-center">2-mashq</h2>
        <div className="flex justify-center">
          <ApexChart />
        </div>
      </div>
      <div className="mt-9">
        <h2 className="flex justify-center">3-mashq</h2>
        <div className="flex justify-center">
          <Apichart />
        </div>
      </div>
      <div>
        <h2 className="flex justify-center">4-mashq</h2>
        <Universal className="w-1/2 h-1/2 mx-auto" />
      </div>
    </div>
  );
}

export default App