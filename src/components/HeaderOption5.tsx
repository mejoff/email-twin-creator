
import React from 'react';
import { Sun, Cloud, CloudRain } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const HeaderOption5 = () => {
  return (
    <div className="bg-slate-900 text-white">
      <div className="px-6 py-2 bg-slate-800">
        <div className="flex items-center justify-center space-x-2">
          <div className="w-6 h-6 rounded-full overflow-hidden">
            <Avatar className="w-full h-full">
              <AvatarImage src="/lovable-uploads/d25a5c2c-60d0-493a-ba01-f40f1ed68468.png" alt="Joff" className="w-full h-full object-cover" />
              <AvatarFallback>JB</AvatarFallback>
            </Avatar>
          </div>
          <h1 className="text-lg font-bold font-helvetica">Joff's Daily Digest</h1>
          <span className="text-slate-400 text-sm">• 20 articles</span>
        </div>
      </div>
      
      <div className="px-6 py-3">
        <div className="flex justify-center space-x-12">
          <div className="text-center">
            <div className="text-slate-300 text-xs mb-1">Santa Barbara</div>
            <div className="space-y-1">
              <div className="flex items-center justify-center space-x-1 text-sm">
                <Sun className="w-3 h-3 text-yellow-400" />
                <span>72°F</span>
              </div>
              <div className="flex items-center justify-center space-x-1 text-sm">
                <Sun className="w-3 h-3 text-yellow-400" />
                <span>68°F</span>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-slate-300 text-xs mb-1">San Francisco</div>
            <div className="space-y-1">
              <div className="flex items-center justify-center space-x-1 text-sm">
                <Cloud className="w-3 h-3 text-gray-400" />
                <span>68°F</span>
              </div>
              <div className="flex items-center justify-center space-x-1 text-sm">
                <CloudRain className="w-3 h-3 text-blue-400" />
                <span>66°F</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderOption5;
