import React, { useState } from 'react';
import { MessageSquare, Send, PenSquare, Sparkles, Check, CheckCircle2 } from 'lucide-react';
import { MarketingChannel, AudienceSegment } from '../types';

const channels: MarketingChannel[] = [
  { id: 'email', name: 'Email', icon: 'mail', enabled: true },
  { id: 'sms', name: 'SMS', icon: 'smartphone', enabled: true },
  { id: 'whatsapp', name: 'WhatsApp', icon: 'message-circle', enabled: true },
  { id: 'linkedin', name: 'LinkedIn', icon: 'linkedin', enabled: true },
  { id: 'twitter', name: 'Twitter', icon: 'twitter', enabled: false },
];

const segments: AudienceSegment[] = [
  { id: '1', name: 'High-value customers', size: 240, conversion: 0.12, selected: true },
  { id: '2', name: 'Recent signups', size: 560, conversion: 0.08, selected: false },
  { id: '3', name: 'Disengaged users', size: 890, conversion: 0.03, selected: true },
  { id: '4', name: 'Free trial expiring', size: 320, conversion: 0.15, selected: false },
];

const OutreachPage: React.FC = () => {
  const [selectedChannels, setSelectedChannels] = useState<string[]>(['email', 'whatsapp']);
  const [selectedSegments, setSelectedSegments] = useState<string[]>(['1', '3']);
  const [message, setMessage] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  
  const toggleChannel = (id: string) => {
    setSelectedChannels(prev => 
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };
  
  const toggleSegment = (id: string) => {
    setSelectedSegments(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };
  
  const handleSend = () => {
    setShowPreview(true);
  };
  
  const confirmSend = () => {
    alert('Campaign sent successfully!');
    setShowPreview(false);
    setMessage('');
  };
  
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Manual Setup Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-6">
            <PenSquare size={18} />
            <h2 className="text-lg font-medium">Manual Setup</h2>
          </div>
          
          <div className="mb-6">
            <h3 className="text-base font-medium text-gray-800 mb-3">Select channels</h3>
            <div className="flex flex-wrap gap-3">
              {channels.map(channel => (
                <button
                  key={channel.id}
                  disabled={!channel.enabled}
                  onClick={() => toggleChannel(channel.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    !channel.enabled 
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                      : selectedChannels.includes(channel.id)
                        ? 'bg-blue-100 text-blue-700 border border-blue-300'
                        : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {channel.name}
                  {selectedChannels.includes(channel.id) && (
                    <Check size={16} className="text-blue-600" />
                  )}
                </button>
              ))}
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-base font-medium text-gray-800 mb-3">Select audience segments</h3>
            <div className="space-y-3">
              {segments.map(segment => (
                <div
                  key={segment.id}
                  onClick={() => toggleSegment(segment.id)}
                  className={`flex items-center justify-between p-3 border rounded-lg cursor-pointer ${
                    selectedSegments.includes(segment.id)
                      ? 'border-blue-300 bg-blue-50'
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <div>
                    <div className="font-medium text-gray-800">{segment.name}</div>
                    <div className="text-sm text-gray-500">{segment.size} contacts</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-sm text-gray-600 font-medium">{(segment.conversion * 100).toFixed(0)}% conversion</div>
                    {selectedSegments.includes(segment.id) ? (
                      <div className="h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center">
                        <Check size={14} className="text-white" />
                      </div>
                    ) : (
                      <div className="h-5 w-5 rounded-full border-2 border-gray-300"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-base font-medium text-gray-800 mb-3">Compose message</h3>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              className="w-full border border-gray-300 rounded-lg p-3 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>
          
          <div className="flex justify-end">
            <button
              onClick={handleSend}
              disabled={selectedChannels.length === 0 || selectedSegments.length === 0 || !message.trim()}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium ${
                selectedChannels.length === 0 || selectedSegments.length === 0 || !message.trim()
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              <Send size={16} />
              Send Campaign
            </button>
          </div>
        </div>

        {/* AI Recommendations Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles size={18} />
            <h2 className="text-lg font-medium">AI Recommendations</h2>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                <Sparkles size={18} />
              </div>
              <div>
                <h3 className="font-medium text-blue-800 mb-1">AI Recommendations</h3>
                <p className="text-sm text-blue-700">
                  Our AI can analyze your customer data and suggest personalized outreach strategies for maximum engagement.
                </p>
              </div>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg mb-6">
            <div className="flex items-center gap-2 p-3 border-b border-gray-200 bg-gray-50">
              <MessageSquare size={18} className="text-gray-500" />
              <span className="font-medium text-gray-700">Chat with AI Assistant</span>
            </div>
            <div className="p-4 h-64 overflow-y-auto flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 h-8 w-8 rounded-full flex items-center justify-center text-blue-600">AI</div>
                <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm text-gray-800">
                    Hello! I can help you create targeted outreach campaigns. What are your marketing goals today?
                  </p>
                </div>
              </div>
            </div>
            <div className="p-3 border-t border-gray-200">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Ask about targeting, content ideas, or timing..."
                  className="w-full px-4 py-2 pr-10 text-sm bg-white border border-gray-200 rounded-full focus:outline-none focus:border-blue-500"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
            <h3 className="font-medium text-gray-800 mb-3">Recommended Strategy</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-500" />
                <span className="text-sm text-gray-700">Target high-value customers with personalized offers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-500" />
                <span className="text-sm text-gray-700">Use WhatsApp for immediate engagement</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-500" />
                <span className="text-sm text-gray-700">Schedule email follow-ups for Tuesday mornings</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end">
            <button
              onClick={handleSend}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700"
            >
              <Sparkles size={16} />
              Generate & Send Campaign
            </button>
          </div>
        </div>
      </div>
      
      {showPreview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full mx-4">
            <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-800">Preview Campaign</h3>
              <button 
                onClick={() => setShowPreview(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-500 mb-2">Channels</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedChannels.map(id => {
                    const channel = channels.find(c => c.id === id);
                    return (
                      <div key={id} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                        {channel?.name}
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-500 mb-2">Audience Segments</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedSegments.map(id => {
                    const segment = segments.find(s => s.id === id);
                    return (
                      <div key={id} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                        {segment?.name} ({segment?.size})
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-500 mb-2">Message</h4>
                <div className="border border-gray-200 rounded-lg p-3 bg-gray-50">
                  <p className="text-sm text-gray-800 whitespace-pre-line">{message}</p>
                </div>
              </div>
              
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setShowPreview(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  Edit
                </button>
                <button
                  onClick={confirmSend}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Confirm & Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OutreachPage;