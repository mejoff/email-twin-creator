
import React from 'react';
import { Sun, Cloud, CloudRain } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const HeaderOption3 = () => {
  return (
    <div className="bg-gray-800 text-white">
      <div className="px-6 py-3 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-full overflow-hidden border border-white/20">
              <Avatar className="w-full h-full">
                <AvatarImage src="/lovable-uploads/d25a5c2c-60d0-493a-ba01-f40f1ed68468.png" alt="Joff" className="w-full h-full object-cover" />
                <AvatarFallback>JB</AvatarFallback>
              </Avatar>
            </div>
            <h1 className="text-xl font-bold font-helvetica">Joff's Daily Digest</h1>
          </div>
          <div className="text-white/60 text-sm">20 articles • 15 sources</div>
        </div>
      </div>
      
      <div className="px-6 py-2 bg-gray-700">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex justify-between items-center">
            <span className="text-white/80">Santa Barbara</span>
            <div className="flex items-center space-x-1">
              <Sun className="w-3 h-3" />
              <span>72°</span>
              <Sun className="w-3 h-3" />
              <span>68°</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-white/80">San Francisco</span>
            <div className="flex items-center space-x-1">
              <Cloud className="w-3 h-3" />
              <span>68°</span>
              <CloudRain className="w-3 h-3" />
              <span>66°</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderOption3;
