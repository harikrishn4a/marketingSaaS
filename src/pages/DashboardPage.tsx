import React from 'react';
import { TrendingUp, Mail, ExternalLink } from 'lucide-react';

const DashboardPage: React.FC = () => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Growth Insights Card */}
        <div className="bg-green-50 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-purple-500 p-2 rounded-full">
              <TrendingUp size={24} className="text-white" />
            </div>
            <h3 className="text-lg font-medium">Growth Insights</h3>
          </div>
          
          <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-md text-sm font-medium">
            Healthy
          </div>
        </div>

        {/* Emails Sent Card */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-500 p-2 rounded-full">
              <Mail size={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-lg font-medium">Emails Sent</h3>
              <div className="flex items-center gap-1 text-green-600">
                <TrendingUp size={16} />
                <span>75%</span>
              </div>
            </div>
          </div>
          
          <div className="mt-4">
            <div className="text-2xl font-semibold">5,189</div>
            <div className="text-gray-600">Total emails sent</div>
          </div>
        </div>

        {/* Deep Insights Card */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium mb-2">Click for Deep Insights</h3>
            <p className="text-gray-600">Analyze your campaign performance</p>
          </div>
          <button className="bg-orange-500 p-3 rounded-full text-white hover:bg-orange-600">
            <ExternalLink size={24} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Engagement Rate with Line Graph */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="mb-4">
            <div className="text-2xl font-semibold">3.7%</div>
            <div className="text-gray-600">Engagement rate</div>
            <div className="flex items-center gap-1 text-green-600 mt-1">
              <TrendingUp size={14} />
              <span>5.4% vs last month</span>
            </div>
          </div>
          
          {/* Simple line graph representation */}
          <div className="h-32 relative mt-4">
            <svg className="w-full h-full" viewBox="0 0 100 40">
              <path
                d="M0 30 Q 25 25, 50 20 T 100 15"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>

        {/* Campaign Performance Chart */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium">Your campaigns</h3>
            <select className="bg-white border border-gray-300 rounded-md px-3 py-1.5 text-sm">
              <option>This Month</option>
              <option>Last Month</option>
              <option>Last 3 Months</option>
            </select>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              <span className="text-sm text-gray-600">Sent</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Read</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-700 rounded-full"></div>
              <span className="text-sm text-gray-600">Engaged</span>
            </div>
          </div>

          <div className="relative h-48">
            {['Whatsapp', 'Telegram', 'Mail', 'SMS', 'LinkedIn'].map((platform, index) => (
              <div key={platform} className="absolute bottom-0" style={{ left: `${index * 20}%`, width: '15%' }}>
                <div className="bg-gray-200 h-40"></div>
                <div className="bg-blue-500 h-28 mt-[-7rem]"></div>
                <div className="bg-blue-700 h-16 mt-[-4rem]"></div>
                <div className="text-sm text-gray-600 mt-2">{platform}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;