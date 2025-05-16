"use client";

import { useState } from "react";

export default function SearchBar({ onSearch }: { onSearch: (keyword: string) => void }) {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(keyword);
  };

  return (
    <form onSubmit={handleSubmit} className="container mx-auto px-4 py-6">
      <div className="flex items-center max-w-md mx-auto">
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="搜索卡口..."
          className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button type="submit" className="px-4 py-2 bg-primary text-white rounded-r-md hover:bg-primary-dark">
          搜索
        </button>
      </div>
    </form>
  );
} 