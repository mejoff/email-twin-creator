
import React from 'react';
import { Sun, Cloud, CloudRain } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const HeaderOption2 = () => {
  return (
    <div className="bg-blue-900 text-white px-6 py-4">
      <div className="text-center mb-3">
        <div className="flex items-center justify-center space-x-3 mb-2">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-white/30">
            <Avatar className="w-full h-full">
              <AvatarImage src="/lovable-uploads/d25a5c2c-60d0-493a-ba01-f40f1ed68468.png" alt="Joff" className="w-full h-full object-cover" />
              <AvatarFallback>JB</AvatarFallback>
            </Avatar>
          </div>
          <h1 className="text-lg font-bold font-helvetica">Joff's Daily Digest</h1>
        </div>
        <p className="text-white/70 text-xs">20 articles evaluated from 15 sources</p>
      </div>
      
      <div className="flex justify-center space-x-8">
        <div className="text-center space-y-1">
          <div className="text-white/80 text-xs font-medium">Santa Barbara</div>
          <div className="flex items-center space-x-1 text-sm">
            <Sun className="w-3 h-3" />
            <span>72°</span>
            <Sun className="w-3 h-3" />
            <span>68°</span>
          </div>
        </div>
        <div className="text-center space-y-1">
          <div className="text-white/80 text-xs font-medium">San Francisco</div>
          <div className="flex items-center space-x-1 text-sm">
            <Cloud className="w-3 h-3" />
            <span>68°</span>
            <CloudRain className="w-3 h-3" />
            <span>66°</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderOption2;
