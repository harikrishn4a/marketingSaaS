import React, { useState } from 'react';
import { Upload, Mail, Check } from 'lucide-react';

const ManageDatabasePage: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files).map(file => file.name);
    setUploadedFiles(prev => [...prev, ...files]);
  };

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Upload Documents Section */}
        <div 
          className={`border-2 border-dashed rounded-lg p-8 text-center ${
            isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="mb-4">
            <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Upload size={24} className="text-white" />
            </div>
            <h3 className="text-lg font-medium mb-2">Upload Documents</h3>
            <p className="text-gray-600 text-sm">Click to browse, or drag & drop here</p>
          </div>

          <div className="mt-4">
            <button className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-50">
              Browse Files
            </button>
          </div>
        </div>

        {/* Upload Past Campaigns Section */}
        <div 
          className={`border-2 border-dashed rounded-lg p-8 text-center ${
            isDragging ? 'border-orange-500 bg-orange-50' : 'border-gray-300'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="mb-4">
            <div className="bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail size={24} className="text-white" />
            </div>
            <h3 className="text-lg font-medium mb-2">Upload Past Campaigns</h3>
            <p className="text-gray-600 text-sm">Drop your campaign history, We'll learn from it</p>
          </div>

          <div className="mt-4">
            <button className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-50">
              Browse Files
            </button>
          </div>
        </div>
      </div>

      {/* Efficiency Badge */}
      <div className="flex items-center gap-2 mb-6">
        <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
          <Check size={16} />
          70% Efficient
        </div>
      </div>

      {/* Preview Cleaned Data */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h3 className="text-lg font-medium">Preview Cleaned Data</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email Address</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone Number</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lead Source</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">...</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {['Emily', 'John', 'Nathan'].map((name, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">...</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">...</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">...</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">...</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">...</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageDatabasePage;