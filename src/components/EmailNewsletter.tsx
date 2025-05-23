
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Sun, Cloud, CloudRain } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const EmailNewsletter = () => {
  const [expandedArticles, setExpandedArticles] = useState<number[]>([]);

  const toggleExpanded = (articleId: number) => {
    setExpandedArticles(prev => 
      prev.includes(articleId) 
        ? prev.filter(id => id !== articleId)
        : [...prev, articleId]
    );
  };

  return (
    <div className="max-w-2xl mx-auto bg-white font-serif p-8">
      {/* Header */}
      <div className="text-center py-8 border-b border-gray-200 mb-2">
        <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-2 border-orange-700">
          <Avatar className="w-full h-full">
            <AvatarImage 
              src="/lovable-uploads/d25a5c2c-60d0-493a-ba01-f40f1ed68468.png" 
              alt="Joff" 
              className="w-full h-full object-cover"
            />
            <AvatarFallback>JB</AvatarFallback>
          </Avatar>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Joff's Daily Briefing</h1>
        <p className="text-gray-500">Thursday, May 8th</p>
      </div>

      {/* Weather Section */}
      <div className="py-6 text-center border-b border-gray-200 mb-2">
        <div className="flex justify-center items-center space-x-8 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <span className="font-medium">Santa Barbara:</span>
            <Sun className="w-4 h-4" />
            <span>72°F</span>
            <Sun className="w-4 h-4" />
            <span>75°F</span>
            <CloudRain className="w-4 h-4" />
            <span>71°F</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-medium">San Francisco:</span>
            <Cloud className="w-4 h-4" />
            <span>65°F</span>
            <CloudRain className="w-4 h-4" />
            <span>63°F</span>
            <Cloud className="w-4 h-4" />
            <span>66°F</span>
          </div>
        </div>
        <div className="mt-4 text-gray-500 text-sm">
          <span className="font-bold text-gray-900">247</span> articles across <span className="font-bold text-gray-900">42</span> sources analyzed
        </div>
      </div>

      {/* Articles Header */}
      <div className="flex justify-between items-center py-6">
        <h2 className="text-2xl font-bold text-gray-900">Top 20 Articles Today</h2>
        <button className="text-sm text-gray-600 hover:text-gray-900 flex items-center space-x-1">
          <span>•• Show all</span>
        </button>
      </div>

      {/* Articles List */}
      <div className="space-y-10">
        {/* Article 1 */}
        <article className="border-b border-gray-100 pb-8">
          <div className="flex flex-col space-y-3">
            <span className="text-2xl font-bold text-ruby-red">1</span>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </h3>
              <p className="text-gray-700 mb-5 leading-relaxed">
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="mb-4">
                <span className="text-blue-600 font-bold font-helvetica">Financial Times</span>
              </div>
              <div className="mb-4">
                <p className="text-gray-600 text-sm mb-2">Related Coverage:</p>
                <ul className="text-sm text-blue-600 space-y-1 font-helvetica">
                  <li>• <a href="#" className="hover:underline">Ut enim ad minima veniam analysis</a></li>
                  <li>• <a href="#" className="hover:underline">Quis autem vel eum iure report</a></li>
                </ul>
              </div>
              <button 
                onClick={() => toggleExpanded(1)}
                className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900"
              >
                <span>🤔</span>
                <span>Why this matters to you?</span>
                {expandedArticles.includes(1) ? 
                  <ChevronUp className="w-4 h-4" /> : 
                  <ChevronDown className="w-4 h-4" />
                }
              </button>
              {expandedArticles.includes(1) && (
                <div className="mt-3 p-4 bg-gray-50 rounded-lg text-sm text-gray-700">
                  This article discusses important financial developments that could impact market trends and investment strategies.
                </div>
              )}
            </div>
          </div>
        </article>

        {/* Article 2 */}
        <article className="border-b border-gray-100 pb-8">
          <div className="flex flex-col space-y-3">
            <span className="text-2xl font-bold text-ruby-red">2</span>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                Duis aute irure dolor in reprehenderit in voluptate velit
              </h3>
              <p className="text-gray-700 mb-5 leading-relaxed">
                Esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="mb-4">
                <span className="text-blue-600 font-bold font-helvetica">Wall Street Journal</span>
              </div>
              <div className="mb-4">
                <p className="text-gray-600 text-sm mb-2">Related Coverage:</p>
                <ul className="text-sm text-blue-600 space-y-1 font-helvetica">
                  <li>• <a href="#" className="hover:underline">Neque porro quisquam exclusive</a></li>
                </ul>
              </div>
              <button 
                onClick={() => toggleExpanded(2)}
                className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900"
              >
                <span>🤔</span>
                <span>Why this matters to you?</span>
                {expandedArticles.includes(2) ? 
                  <ChevronUp className="w-4 h-4" /> : 
                  <ChevronDown className="w-4 h-4" />
                }
              </button>
              {expandedArticles.includes(2) && (
                <div className="mt-3 p-4 bg-gray-50 rounded-lg text-sm text-gray-700">
                  This development could significantly affect business operations and regulatory compliance requirements.
                </div>
              )}
            </div>
          </div>
        </article>

        {/* Article 3 */}
        <article className="border-b border-gray-100 pb-8">
          <div className="flex flex-col space-y-3">
            <span className="text-2xl font-bold text-ruby-red">3</span>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                At vero eos et accusamus et iusto odio dignissimos
              </h3>
              <p className="text-gray-700 mb-5 leading-relaxed">
                Ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias 
                excepturi sint occaecati cupiditate non provident.
              </p>
              <div className="mb-4">
                <span className="text-blue-600 font-bold font-helvetica">TechCrunch</span>
              </div>
              <div className="mb-4">
                <p className="text-gray-600 text-sm mb-2">Related Coverage:</p>
                <ul className="text-sm text-blue-600 space-y-1 font-helvetica">
                  <li>• <a href="#" className="hover:underline">Similique sunt in culpa insights</a></li>
                  <li>• <a href="#" className="hover:underline">Qui officia deserunt mollit analysis</a></li>
                  <li>• <a href="#" className="hover:underline">Anim id est laborum market perspective</a></li>
                </ul>
              </div>
              <button 
                onClick={() => toggleExpanded(3)}
                className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900"
              >
                <span>🤔</span>
                <span>Why this matters to you?</span>
                {expandedArticles.includes(3) ? 
                  <ChevronUp className="w-4 h-4" /> : 
                  <ChevronDown className="w-4 h-4" />
                }
              </button>
              {expandedArticles.includes(3) && (
                <div className="mt-3 p-4 bg-gray-50 rounded-lg text-sm text-gray-700">
                  This technology trend represents a major shift in the industry that could create new opportunities and challenges.
                </div>
              )}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default EmailNewsletter;
