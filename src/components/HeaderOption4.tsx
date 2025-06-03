
import React from 'react';
import { Sun, Cloud, CloudRain } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const HeaderOption4 = () => {
  return (
    <div className="bg-indigo-800 text-white px-6 py-3">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/30">
            <Avatar className="w-full h-full">
              <AvatarImage src="/lovable-uploads/d25a5c2c-60d0-493a-ba01-f40f1ed68468.png" alt="Joff" className="w-full h-full object-cover" />
              <AvatarFallback>JB</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <h1 className="text-2xl font-bold font-helvetica">Daily Digest</h1>
            <p className="text-indigo-200 text-sm">for Joff • 20 articles today</p>
          </div>
        </div>

        <div className="space-y-2 text-right">
          <div>
            <div className="text-white/70 text-xs">Santa Barbara</div>
            <div className="flex items-center space-x-1 text-sm">
              <Sun className="w-3 h-3" />
              <span>72°</span>
              <span className="text-white/50">→</span>
              <Sun className="w-3 h-3" />
              <span>68°</span>
            </div>
          </div>
          <div>
            <div className="text-white/70 text-xs">San Francisco</div>
            <div className="flex items-center space-x-1 text-sm">
              <Cloud className="w-3 h-3" />
              <span>68°</span>
              <span className="text-white/50">→</span>
              <CloudRain className="w-3 h-3" />
              <span>66°</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderOption4;
