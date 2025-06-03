
import React from 'react';
import { Sun, Cloud, CloudRain } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const HeaderOption6 = () => {
  return (
    <div className="bg-gradient-to-r from-slate-800 to-slate-700 text-white px-6 py-4">
      <div className="grid grid-cols-3 items-center">
        {/* Left - Weather */}
        <div className="space-y-2">
          <div className="text-xs text-white/70 mb-1">Today's Weather</div>
          <div className="space-y-1">
            <div className="flex items-center space-x-2 text-xs">
              <span className="w-16 text-white/80">SB</span>
              <Sun className="w-3 h-3" />
              <span>72°</span>
              <Sun className="w-3 h-3" />
              <span>68°</span>
            </div>
            <div className="flex items-center space-x-2 text-xs">
              <span className="w-16 text-white/80">SF</span>
              <Cloud className="w-3 h-3" />
              <span>68°</span>
              <CloudRain className="w-3 h-3" />
              <span>66°</span>
            </div>
          </div>
        </div>

        {/* Center - Title */}
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-1">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-white/30">
              <Avatar className="w-full h-full">
                <AvatarImage src="/lovable-uploads/d25a5c2c-60d0-493a-ba01-f40f1ed68468.png" alt="Joff" className="w-full h-full object-cover" />
                <AvatarFallback>JB</AvatarFallback>
              </Avatar>
            </div>
            <h1 className="text-lg font-bold font-helvetica">Daily Digest</h1>
          </div>
          <p className="text-white/60 text-xs">for Joff</p>
        </div>

        {/* Right - Stats */}
        <div className="text-right">
          <div className="text-2xl font-bold">20</div>
          <div className="text-xs text-white/70">articles from</div>
          <div className="text-lg font-semibold">15</div>
          <div className="text-xs text-white/70">sources</div>
        </div>
      </div>
    </div>
  );
};

export default HeaderOption6;
