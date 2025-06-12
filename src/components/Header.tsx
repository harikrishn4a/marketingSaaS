import React from 'react';
import { Bell, Moon } from 'lucide-react';
import { UserProfile } from '../types';

interface HeaderProps {
  user: UserProfile;
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ user, title }) => {
  return (
    <header className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
      {title ? (
        <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
      ) : (
        <div className="text-xl font-semibold text-gray-800">Welcome, {user.name.split(' ')[0]}</div>
      )}
      
      <div className="flex items-center space-x-4">
        <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full">
          <Bell size={20} />
        </button>
        <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full">
          <Moon size={20} />
        </button>
        <div className="flex items-center">
          <div className="relative">
            <button className="flex items-center gap-2">
              <div className="bg-orange-500 text-white h-8 w-8 rounded-full flex items-center justify-center font-medium">
                {user.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="text-sm font-medium flex flex-col items-start">
                <span>{user.name}</span>
                <span className="text-xs text-gray-500">{user.email}</span>
              </div>
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;