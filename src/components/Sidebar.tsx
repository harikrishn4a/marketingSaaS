import React from 'react';
import { Mail, LayoutDashboard, BarChart3, Database, Send, TrendingUp, LifeBuoy, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { UserPlan } from '../types';

interface SidebarProps {
  userPlan: UserPlan;
}

const Sidebar: React.FC<SidebarProps> = ({ userPlan }) => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === `/dashboard${path}`;
  
  return (
    <div className="w-64 min-h-screen bg-blue-50 border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <Link to="/dashboard" className="flex items-center gap-2 text-xl font-semibold text-gray-800">
          <div className="text-blue-600 bg-blue-100 p-2 rounded">
            <Mail size={24} />
          </div>
          Melons.ai
        </Link>
      </div>
      
      <nav className="flex-1 py-4">
        <div className="space-y-1 px-2">
          {[
            { path: '', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
            { path: '/campaign', icon: <BarChart3 size={20} />, label: 'Campaign' },
            { path: '/database', icon: <Database size={20} />, label: 'Manage Database' },
            { path: '/outreach', icon: <Send size={20} />, label: 'Outreach' },
            { path: '/smart-edge', icon: <TrendingUp size={20} />, label: 'Smart Edge' },
          ].map((item) => (
            <Link
              key={item.path}
              to={`/dashboard${item.path}`}
              className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md ${
                isActive(item.path)
                  ? 'text-blue-600 bg-white shadow-sm'
                  : 'text-gray-600 hover:bg-white hover:text-blue-600'
              }`}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
      
      <div className="p-4 border-t border-gray-200">
        <div className="mb-2">
          <div className="flex items-center justify-between text-sm font-medium text-gray-700">
            <h3>Your plan</h3>
            <button className="text-gray-400 hover:text-gray-600">
              ×
            </button>
          </div>
          
          <div className="mt-2 space-y-3">
            <div>
              <div className="flex justify-between text-xs text-gray-600 mb-1">
                <span>Emails sent</span>
                <span>{userPlan.emailsSent} of {userPlan.emailsLimit}</span>
              </div>
              <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-500" 
                  style={{ width: `${(userPlan.emailsSent / userPlan.emailsLimit) * 100}%` }}
                ></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-xs text-gray-600 mb-1">
                <span>SMS sent</span>
                <span>{userPlan.smsSent} of {userPlan.smsLimit}</span>
              </div>
              <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-500" 
                  style={{ width: `${(userPlan.smsSent / userPlan.smsLimit) * 100}%` }}
                ></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-xs text-gray-600 mb-1">
                <span>Whatsapp sent</span>
                <span>{userPlan.whatsappSent} of {userPlan.whatsappLimit}</span>
              </div>
              <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-500" 
                  style={{ width: `${(userPlan.whatsappSent / userPlan.whatsappLimit) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 text-xs">
            <span className="text-gray-600">Want more?</span>{' '}
            <button className="text-blue-600 hover:underline">Make an upgrade</button>
          </div>
        </div>
      </div>
      
      <div className="p-2">
        <div className="space-y-1">
          {[
            { icon: <LifeBuoy size={20} />, label: 'Support' },
            { icon: <Settings size={20} />, label: 'Settings' },
          ].map((item, index) => (
            <button
              key={index}
              className="flex items-center gap-3 w-full px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-white hover:text-blue-600"
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;