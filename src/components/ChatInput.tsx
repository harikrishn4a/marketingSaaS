import React, { useState } from 'react';
import { SendHorizontal } from 'lucide-react';

interface ChatInputProps {
  placeholder: string;
  onSubmit: (value: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ placeholder, onSubmit }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim()) {
      onSubmit(value);
      setValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 pr-10 text-sm bg-white border border-gray-200 rounded-full focus:outline-none focus:border-blue-500"
      />
      <button 
        type="submit"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 bg-blue-600 text-white rounded-full hover:bg-blue-700"
      >
        <SendHorizontal size={16} />
      </button>
    </form>
  );
};

export default ChatInput;