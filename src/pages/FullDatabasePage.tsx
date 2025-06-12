import React, { useState } from 'react';
import { Search } from 'lucide-react';
import ChatInput from '../components/ChatInput';

interface Customer {
  avatar: string;
  fullName: string;
  username: string;
  paymentMethod: 'visa' | 'mastercard';
  cardEnding: string;
  categories: string[];
  totalSpend: number;
  clickthroughPercentage: number;
}

const customers: Customer[] = [
  {
    avatar: 'AS',
    fullName: 'Alice Smith',
    username: '@alicesmith',
    paymentMethod: 'visa',
    cardEnding: '18',
    categories: ['Loyal', 'Losing Interest'],
    totalSpend: 1500,
    clickthroughPercentage: 10
  },
  {
    avatar: 'BJ',
    fullName: 'Bob Johnson',
    username: '@bobjohnson',
    paymentMethod: 'mastercard',
    cardEnding: '99',
    categories: ['Loyal'],
    totalSpend: 1500,
    clickthroughPercentage: 40
  },
  {
    avatar: 'CG',
    fullName: 'Clara Garcia',
    username: '@claragarcia',
    paymentMethod: 'mastercard',
    cardEnding: '14',
    categories: ['New Customer'],
    totalSpend: 50,
    clickthroughPercentage: 80
  },
  {
    avatar: 'DB',
    fullName: 'David Brown',
    username: '@davidbrown',
    paymentMethod: 'visa',
    cardEnding: '50',
    categories: ['High Response', 'New Customer'],
    totalSpend: 20,
    clickthroughPercentage: 40
  },
  {
    avatar: 'EL',
    fullName: 'Emma Lee',
    username: '@emmalee',
    paymentMethod: 'mastercard',
    cardEnding: '19',
    categories: ['Tightly Knit'],
    totalSpend: 2000,
    clickthroughPercentage: 60
  },
  {
    avatar: 'FW',
    fullName: 'Frank Wong',
    username: '@frankwong',
    paymentMethod: 'visa',
    cardEnding: '80',
    categories: ['Free Trial', 'Transient Customer'],
    totalSpend: 0,
    clickthroughPercentage: 20
  },
  {
    avatar: 'GT',
    fullName: 'Grace Taylor',
    username: '@gracetaylor',
    paymentMethod: 'mastercard',
    cardEnding: '96',
    categories: ['Loyal', 'Losing Interest'],
    totalSpend: 1200,
    clickthroughPercentage: 40
  }
];

const FullDatabasePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChatSubmit = (message: string) => {
    setSearchQuery(message);
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Loyal': 'bg-blue-100 text-blue-800',
      'Losing Interest': 'bg-red-100 text-red-800',
      'New Customer': 'bg-yellow-100 text-yellow-800',
      'High Response': 'bg-green-100 text-green-800',
      'Tightly Knit': 'bg-purple-100 text-purple-800',
      'Free Trial': 'bg-orange-100 text-orange-800',
      'Transient Customer': 'bg-red-100 text-red-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <ChatInput 
            placeholder="Ask me anything about the data! 'Show me customers who are about to finish free trials'"
            onSubmit={handleChatSubmit}
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Full Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Payment Method
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Spend
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Clickthrough Percentage
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ...
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {customers.map((customer, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-medium">
                        {customer.avatar}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{customer.fullName}</div>
                        <div className="text-sm text-gray-500">{customer.username}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="mr-2">
                        {customer.paymentMethod === 'visa' ? '💳' : '💳'}
                      </span>
                      <span className="text-sm text-gray-900">
                        Ends in ****-**{customer.cardEnding}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-wrap gap-2">
                      {customer.categories.map((category, i) => (
                        <span
                          key={i}
                          className={`px-2 py-1 text-xs rounded-full ${getCategoryColor(category)}`}
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${customer.totalSpend}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${customer.clickthroughPercentage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-900">{customer.clickthroughPercentage}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                    ...
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FullDatabasePage;