
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Sun, Cloud, CloudRain } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import HeaderOption1 from './HeaderOption1';

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

  // Sample sources for the sources section
  const sources = [
    "Financial Times", 
    "Wall Street Journal", 
    "TechCrunch", 
    "Bloomberg", 
    "CNBC", 
    "Reuters", 
    "The Economist", 
    "New York Times", 
    "BBC News", 
    "Harvard Business Review"
  ];

  // Generate 20 article entries
  const generateArticles = () => {
    const articles = [];
    for (let i = 1; i <= 20; i++) {
      articles.push(<article key={i} className="border-b border-gray-100 pb-6">
          <div className="flex flex-col space-y-2">
            <span className="text-2xl font-bold text-orange-800">{i}</span>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight font-garamond">
                {i === 1 && "Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
                {i === 2 && "Duis aute irure dolor in reprehenderit in voluptate velit"}
                {i === 3 && "At vero eos et accusamus et iusto odio dignissimos"}
                {i > 3 && `Article ${i} headline goes here with important news`}
              </h3>
              <p className="text-gray-700 mb-2 leading-relaxed font-garamond">
                {i === 1 && "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                {i === 2 && "Esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                {i === 3 && "Ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."}
                {i > 3 && "Summary of article content goes here. This provides context and key information about the topic covered in this article."}
              </p>
              <div className="mb-3">
                <span className="text-blue-900 font-bold font-helvetica text-xs">
                  {i === 1 && "Financial Times"}
                  {i === 2 && "Wall Street Journal"}
                  {i === 3 && "TechCrunch"}
                  {i > 3 && `Source ${i}`}
                </span>
              </div>
              <div className="mb-4">
                <p className="text-gray-600 text-sm mb-1 font-helvetica">Related Coverage:</p>
                <ul className="text-sm text-blue-900 space-y-1 font-helvetica">
                  <li>• <a href="#" className="hover:underline">Related article title goes here</a></li>
                  {i % 3 === 0 && <li>• <a href="#" className="hover:underline">Another related perspective</a></li>}
                  {(i === 1 || i === 3) && <li>• <a href="#" className="hover:underline">Further analysis on this topic</a></li>}
                </ul>
              </div>
              <button onClick={() => toggleExpanded(i)} className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900 font-helvetica mb-3">
                <span>🤔</span>
                <span>Implications for Joff</span>
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

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl overflow-hidden shadow-lg">
      {/* Header */}
      <HeaderOption1 />
      
      {/* Main Content */}
      <div className="px-6 py-4">
        {/* Top 20 Articles headline with Show Analysis button */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 font-helvetica">Top 20 Articles</h2>
          <div className="flex items-center space-x-3">
            <span className="text-sm font-helvetica text-gray-700">Show Analysis</span>
            <Switch 
              checked={showAllExplanations}
              onCheckedChange={toggleAllExplanations}
              className="data-[state=checked]:bg-orange-800"
            />
          </div>
        </div>

        {/* Articles */}
        <div className="space-y-8">
          {generateArticles()}
        </div>

        {/* Sources Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4 font-helvetica">Sources</h3>
          <div className="grid grid-cols-2 gap-2">
            {sources.map((source, index) => (
              <div key={index} className="text-sm text-gray-700 font-helvetica">
                • {source}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-500 font-helvetica">
            This digest was curated for Joff on {new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailNewsletter;
