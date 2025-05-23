import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Sun, Cloud, CloudRain } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const EmailNewsletter = () => {
  const [expandedArticles, setExpandedArticles] = useState<number[]>([]);
  const [showAllExplanations, setShowAllExplanations] = useState<boolean>(false);

  const toggleExpanded = (articleId: number) => {
    setExpandedArticles(prev => prev.includes(articleId) ? prev.filter(id => id !== articleId) : [...prev, articleId]);
  };

  const toggleAllExplanations = () => {
    setShowAllExplanations(prev => !prev);
    // If showing all, add all article IDs to expanded, otherwise clear the list
    if (!showAllExplanations) {
      setExpandedArticles([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
    } else {
      setExpandedArticles([]);
    }
  };

  // Generate 20 article entries
  const generateArticles = () => {
    const articles = [];
    for (let i = 1; i <= 20; i++) {
      articles.push(<article key={i} className="border-b border-gray-100 pb-6">
          <div className="flex flex-col space-y-2">
            <span className="text-2xl font-bold text-ruby-red block">{i}</span>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight font-garamond">
                {i === 1 && "Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
                {i === 2 && "Duis aute irure dolor in reprehenderit in voluptate velit"}
                {i === 3 && "At vero eos et accusamus et iusto odio dignissimos"}
                {i > 3 && `Article ${i} headline goes here with important news`}
              </h3>
              <p className="text-gray-700 mb-3 leading-relaxed font-garamond">
                {i === 1 && "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                {i === 2 && "Esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                {i === 3 && "Ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."}
                {i > 3 && "Summary of article content goes here. This provides context and key information about the topic covered in this article."}
              </p>
              <div className="mb-2">
                <span className="text-blue-900 font-bold font-helvetica text-xs">
                  {i === 1 && "Financial Times"}
                  {i === 2 && "Wall Street Journal"}
                  {i === 3 && "TechCrunch"}
                  {i > 3 && `Source ${i}`}
                </span>
              </div>
              <div className="mb-3">
                <p className="text-gray-600 text-sm mb-1 font-helvetica">Related Coverage:</p>
                <ul className="text-sm text-blue-900 space-y-1 font-helvetica">
                  <li>• <a href="#" className="hover:underline">Related article title goes here</a></li>
                  {i % 3 === 0 && <li>• <a href="#" className="hover:underline">Another related perspective</a></li>}
                  {(i === 1 || i === 3) && <li>• <a href="#" className="hover:underline">Further analysis on this topic</a></li>}
                </ul>
              </div>
              <button onClick={() => toggleExpanded(i)} className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900 font-helvetica">
                <span>🤔</span>
                <span>Why this matters to you?</span>
                {expandedArticles.includes(i) ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {expandedArticles.includes(i) && <div className="mt-3 p-4 bg-gray-50 rounded-lg text-sm text-gray-700 font-helvetica">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>{i === 1 && "This article discusses important financial developments that could impact market trends and investment strategies."}</li>
                    <li>{i === 2 && "This development could significantly affect business operations and regulatory compliance requirements."}</li>
                    <li>{i === 3 && "This technology trend represents a major shift in the industry that could create new opportunities and challenges."}</li>
                    <li>{i > 3 && "This matters because it connects to broader trends in the economy, technology, or society that may affect your work or personal interests."}</li>
                  </ul>
                </div>}
            </div>
          </div>
        </article>);
    }
    return articles;
  };

  return <div className="max-w-2xl mx-auto bg-white font-garmin rounded-lg overflow-hidden">
      {/* Header with light orange background */}
      <div className="bg-orange-50 p-6 sm:p-12 pb-6">
        <div className="text-center mb-1 py-0">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-2 border-orange-700">
            <Avatar className="w-full h-full">
              <AvatarImage src="/lovable-uploads/d25a5c2c-60d0-493a-ba01-f40f1ed68468.png" alt="Joff" className="w-full h-full object-cover" />
              <AvatarFallback>JB</AvatarFallback>
            </Avatar>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2 font-helvetica">Joff's Daily Briefing</h1>
          <p className="text-gray-500 font-helvetica">Thursday, May 8th</p>
        </div>

        {/* Weather Section - No border or separator */}
        <div className="py-3 text-center mb-1">
          <div className="inline-flex flex-nowrap justify-center items-center text-xs text-gray-600 font-helvetica overflow-x-auto w-full">
            <div className="flex items-center space-x-1 mr-4 whitespace-nowrap">
              <span className="font-semibold">Santa Barbara:</span>
              <Sun className="w-3 h-3" />
              <span>72°F</span>
              <Sun className="w-3 h-3" />
              <span>75°F</span>
              <CloudRain className="w-3 h-3" />
              <span>71°F</span>
            </div>
            <div className="flex items-center space-x-1 whitespace-nowrap">
              <span className="font-semibold">San Francisco:</span>
              <Cloud className="w-3 h-3" />
              <span>65°F</span>
              <CloudRain className="w-3 h-3" />
              <span>63°F</span>
              <Cloud className="w-3 h-3" />
              <span>66°F</span>
            </div>
          </div>
          <div className="mt-2 text-gray-500 text-xs font-helvetica">
            <span className="font-bold text-gray-900">247</span> articles across <span className="font-bold text-gray-900">42</span> sources analyzed
          </div>
        </div>
      </div>

      <div className="p-6 sm:px-12">
        {/* Articles Header with separator below it */}
        <div className="flex justify-between items-center py-[12px]">
          <h2 className="text-2xl font-bold text-gray-900 font-garamond">Top 20 Articles Today</h2>
          <button onClick={toggleAllExplanations} className="text-sm text-gray-600 hover:text-gray-900 flex items-center space-x-1 font-helvetica">
            <span>{showAllExplanations ? "🤔 Hide all" : "🤔 Show all"}</span>
          </button>
        </div>
        <Separator className="mb-4" />

        {/* Articles List */}
        <div className="space-y-6">
          {generateArticles()}
        </div>
      </div>
    </div>;
};

export default EmailNewsletter;
