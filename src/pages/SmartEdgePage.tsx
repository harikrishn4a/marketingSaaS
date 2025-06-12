import React, { useState } from 'react';
import { Search, BarChart2, TrendingUp, Activity, Target, ExternalLink, Download, RefreshCw } from 'lucide-react';
import { CompetitorData } from '../types';
import ChatInput from '../components/ChatInput';

const competitors: CompetitorData[] = [
  { 
    name: 'Acme Corp', 
    strategy: 'Aggressive LinkedIn outreach', 
    audience: 'Mid-market SaaS companies',
    engagement: 24, 
    trending: true 
  },
  { 
    name: 'Zenith Solutions', 
    strategy: 'Content marketing with email nurture', 
    audience: 'Enterprise financial services',
    engagement: 18, 
    trending: false 
  },
  { 
    name: 'Quantum Tech', 
    strategy: 'Free tool + SMS follow-up', 
    audience: 'SMB tech companies',
    engagement: 32, 
    trending: true 
  },
  { 
    name: 'Stellar Marketing', 
    strategy: 'Event-based email campaigns', 
    audience: 'Healthcare organizations',
    engagement: 15, 
    trending: false 
  },
];

const SmartEdgePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'competitors' | 'trends'>('competitors');
  const [showInsight, setShowInsight] = useState(false);
  
  const handleChatSubmit = (message: string) => {
    console.log('Chat message:', message);
    setShowInsight(true);
  };
  
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <ChatInput 
            placeholder="Ask about competitor strategies, market trends, or search for specific companies..."
            onSubmit={handleChatSubmit}
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="flex border-b border-gray-200">
              <button
                className={`flex items-center gap-2 px-6 py-4 font-medium text-sm ${
                  activeTab === 'competitors' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'
                }`}
                onClick={() => setActiveTab('competitors')}
              >
                <Target size={18} />
                Competitor Analysis
              </button>
              <button
                className={`flex items-center gap-2 px-6 py-4 font-medium text-sm ${
                  activeTab === 'trends' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'
                }`}
                onClick={() => setActiveTab('trends')}
              >
                <TrendingUp size={18} />
                Market Trends
              </button>
            </div>
            
            {activeTab === 'competitors' && (
              <div className="p-4">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <h3 className="text-lg font-medium text-gray-800">Top Competitors</h3>
                  <button className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700">
                    <RefreshCw size={14} />
                    Refresh data
                  </button>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Company
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Strategy
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Target Audience
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Engagement Rate
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {competitors.map((competitor, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="text-sm font-medium text-gray-900">
                                {competitor.name}
                                {competitor.trending && (
                                  <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-orange-100 text-orange-800">
                                    <TrendingUp size={12} className="mr-1" />
                                    Trending
                                  </span>
                                )}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{competitor.strategy}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{competitor.audience}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{competitor.engagement}%</div>
                            <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                              <div 
                                className="bg-blue-600 h-1.5 rounded-full" 
                                style={{ width: `${competitor.engagement * 2}%` }}
                              ></div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-blue-600 hover:text-blue-900 mr-3">
                              <ExternalLink size={16} />
                            </button>
                            <button className="text-blue-600 hover:text-blue-900">
                              <Download size={16} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            
            {activeTab === 'trends' && (
              <div className="p-4">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <h3 className="text-lg font-medium text-gray-800">Industry Trends</h3>
                  <div className="flex gap-2">
                    <select className="text-sm border border-gray-300 rounded-md px-2 py-1">
                      <option>Last 30 days</option>
                      <option>Last 90 days</option>
                      <option>Last 6 months</option>
                      <option>Last year</option>
                    </select>
                    <button className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 px-2 py-1">
                      <Download size={14} />
                      Export
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-medium text-gray-700">Channel Effectiveness</h4>
                      <BarChart2 size={16} className="text-gray-400" />
                    </div>
                    <div className="h-40 flex items-end justify-between gap-2 pt-4">
                      {['Email', 'SMS', 'WhatsApp', 'LinkedIn', 'Twitter'].map((channel, i) => {
                        const heights = [70, 45, 85, 60, 30];
                        return (
                          <div key={i} className="flex flex-col items-center flex-1">
                            <div 
                              className="w-full bg-blue-500 rounded-t-sm" 
                              style={{ height: `${heights[i]}%` }}
                            ></div>
                            <div className="text-xs text-gray-600 mt-1">{channel}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-medium text-gray-700">Content Engagement</h4>
                      <Activity size={16} className="text-gray-400" />
                    </div>
                    <div className="h-40 flex flex-col justify-between">
                      {['Case Studies', 'Product Updates', 'Industry News', 'How-to Guides', 'Webinars'].map((content, i) => {
                        const percentages = [65, 48, 72, 85, 58];
                        return (
                          <div key={i} className="flex items-center gap-2">
                            <div className="text-xs text-gray-600 w-24">{content}</div>
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-green-500 h-2 rounded-full" 
                                style={{ width: `${percentages[i]}%` }}
                              ></div>
                            </div>
                            <div className="text-xs font-medium text-gray-700">{percentages[i]}%</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-medium text-gray-700">Keyword Performance</h4>
                    <Search size={16} className="text-gray-400" />
                  </div>
                  <div className="space-y-3">
                    {[
                      { term: 'marketing automation', volume: 5400, growth: 12 },
                      { term: 'customer segmentation', volume: 3200, growth: 8 },
                      { term: 'email marketing ai', volume: 2900, growth: 24 },
                      { term: 'linkedin b2b strategy', volume: 1800, growth: -3 },
                      { term: 'conversion optimization', volume: 4100, growth: 5 },
                    ].map((keyword, i) => (
                      <div key={i} className="flex items-center">
                        <div className="w-1/2">
                          <div className="text-sm text-gray-800">{keyword.term}</div>
                          <div className="text-xs text-gray-500">{keyword.volume.toLocaleString()} searches/mo</div>
                        </div>
                        <div className="w-1/2 flex items-center justify-end">
                          <div className={`flex items-center text-sm ${
                            keyword.growth > 0 ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {keyword.growth > 0 ? (
                              <TrendingUp size={16} className="mr-1" />
                            ) : (
                              <TrendingDown size={16} className="mr-1" />
                            )}
                            {Math.abs(keyword.growth)}% {keyword.growth > 0 ? 'increase' : 'decrease'}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Insights & Recommendations</h3>
            
            {showInsight ? (
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-3">
                  <h4 className="text-sm font-medium text-blue-800 mb-1">Key Insights</h4>
                  <ul className="text-sm text-blue-700 space-y-2 ml-5 list-disc">
                    <li>Competitors are shifting toward multi-channel strategies with WhatsApp as primary</li>
                    <li>Content engagement metrics show case studies outperforming other formats</li>
                    <li>"Email marketing AI" is the fastest growing search term (24% increase)</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 border border-green-100 rounded-lg p-3">
                  <h4 className="text-sm font-medium text-green-800 mb-1">Recommendations</h4>
                  <ul className="text-sm text-green-700 space-y-2 ml-5 list-disc">
                    <li>Develop more case studies focused on ROI and concrete results</li>
                    <li>Implement WhatsApp in your outreach strategy to match industry trends</li>
                    <li>Create content targeting "email marketing AI" to capture growing search interest</li>
                    <li>Consider reducing LinkedIn campaigns as engagement is dropping (-3%)</li>
                  </ul>
                </div>
                
                <div className="border-t border-gray-200 pt-3 mt-3">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Competitor to watch</h4>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-800">Quantum Tech</div>
                      <div className="text-sm text-gray-600">32% engagement rate</div>
                    </div>
                    <div className="flex items-center text-orange-600 text-sm font-medium">
                      <TrendingUp size={16} className="mr-1" />
                      Trending
                    </div>
                  </div>
                  <div className="mt-2 text-sm text-gray-600">
                    Their strategy of offering free tools with SMS follow-up is generating 
                    significantly higher engagement than industry average.
                  </div>
                </div>
                
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2 text-sm font-medium">
                  Generate Detailed Report
                </button>
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="mx-auto w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                  <Search size={24} className="text-gray-400" />
                </div>
                <h4 className="text-gray-700 font-medium mb-1">No insights yet</h4>
                <p className="text-sm text-gray-500">
                  Search for a competitor or ask a question to generate insights
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// This component is needed for the TrendingDown icon
const TrendingDown = (props: any) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline>
      <polyline points="17 18 23 18 23 12"></polyline>
    </svg>
  );
};

export default SmartEdgePage;