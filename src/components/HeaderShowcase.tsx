
import React from 'react';
import HeaderOption1 from './HeaderOption1';
import HeaderOption2 from './HeaderOption2';
import HeaderOption3 from './HeaderOption3';
import HeaderOption4 from './HeaderOption4';
import HeaderOption5 from './HeaderOption5';
import HeaderOption6 from './HeaderOption6';

const HeaderShowcase = () => {
  return (
    <div className="max-w-2xl mx-auto space-y-6 p-4">
      <h2 className="text-2xl font-bold text-center mb-8">Header Design Options</h2>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-700">Option 1: Side-by-side layout</h3>
          <HeaderOption1 />
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-700">Option 2: Centered with weather below</h3>
          <HeaderOption2 />
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-700">Option 3: Two-tier with separator</h3>
          <HeaderOption3 />
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-700">Option 4: Large avatar with arrows</h3>
          <HeaderOption4 />
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-700">Option 5: Compact top bar with stacked weather</h3>
          <HeaderOption5 />
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-700">Option 6: Three-column grid layout</h3>
          <HeaderOption6 />
        </div>
      </div>
    </div>
  );
};

export default HeaderShowcase;
