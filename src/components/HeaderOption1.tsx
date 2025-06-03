
import React from 'react';
import { Sun, Cloud, CloudRain } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const HeaderOption1 = () => {
  return (
    <div className="bg-blue-900 text-white px-6 py-3">
      <div className="flex items-center justify-between">
        {/* Left side - Avatar and title */}
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-blue-200/30">
            <Avatar className="w-full h-full">
              <AvatarImage src="/lovable-uploads/d25a5c2c-60d0-493a-ba01-f40f1ed68468.png" alt="Joff" className="w-full h-full object-cover" />
              <AvatarFallback>JB</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <h1 className="text-xl font-bold font-helvetica">Joff's Daily Digest</h1>
            <p className="text-blue-200 text-sm">Reviewed 125 articles; 15 sources</p>
          </div>
        </div>

        {/* Right side - Weather stacked */}
        <div className="text-right space-y-1">
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-blue-100">Santa Barbara</span>
            <Sun className="w-4 h-4" />
            <span>72°F</span>
            <Sun className="w-4 h-4" />
            <span>68°F</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-blue-100">San Francisco</span>
            <Cloud className="w-4 h-4" />
            <span>68°F</span>
            <CloudRain className="w-4 h-4" />
            <span>66°F</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderOption1;
