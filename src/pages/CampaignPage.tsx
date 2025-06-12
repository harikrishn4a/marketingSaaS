import React, { useState } from 'react';
import { Search, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ChatInput from '../components/ChatInput';

const CampaignPage: React.FC = () => {
  const [showInsights, setShowInsights] = useState(false);
  const navigate = useNavigate();

  const handleChatSubmit = (message: string) => {
    console.log('Chat message:', message);
    setShowInsights(true);
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Reveal Insights</h2>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <ChatInput 
            placeholder="Ask me anything about the data! 'Which groups are losing interest?' 'Make a referral promotion for loyal customers'"
            onSubmit={handleChatSubmit}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Data Visualization</h3>
              <select className="bg-blue-600 text-white rounded-full px-4 py-2 text-sm font-medium">
                <option>Bubble Plot</option>
                <option>Line Chart</option>
                <option>Bar Chart</option>
              </select>
            </div>
            
            <div className="h-96 flex items-center justify-center bg-gray-50 rounded-lg">
              <div className="grid grid-cols-3 gap-8">
                {[...Array(9)].map((_, i) => (
                  <div 
                    key={i}
                    className="rounded-full bg-blue-100 border-2 border-blue-200"
                    style={{
                      width: `${Math.random() * 60 + 40}px`,
                      height: `${Math.random() * 60 + 40}px`,
                    }}
                  ></div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <button 
                onClick={() => navigate('/full-database')}
                className="bg-blue-600 text-white px-8 py-2.5 rounded-full hover:bg-blue-700 font-medium"
              >
                View Full Dataset
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="text-blue-600">
                <TrendingUp size={20} />
              </div>
              <h3 className="text-lg font-medium">Recommended Actions</h3>
            </div>
            
            {showInsights ? (
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center gap-2 text-blue-700 font-medium mb-2">
                    <TrendingUp size={18} />
                    <span>High-Value Opportunity</span>
                  </div>
                  <p className="text-sm text-blue-800">
                    Target customers with recent purchases for upsell opportunities
                  </p>
                </div>

                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-2 text-green-700 font-medium mb-2">
                    <Search size={18} />
                    <span>Engagement Insight</span>
                  </div>
                  <p className="text-sm text-green-800">
                    Email campaigns perform best on Tuesday mornings
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                Ask a question to see recommendations
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignPage;