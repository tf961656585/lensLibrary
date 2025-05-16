"use client";

import { useState } from "react";
import SearchBar from "./SearchBar";
import MountCard from "./MountCard";

export default function MountsSection({ mounts }: { mounts: string[] }) {
  const [filteredMounts, setFilteredMounts] = useState<string[]>(mounts);

  const handleSearch = (keyword: string) => {
    setFilteredMounts(
      mounts.filter((m) => m.toLowerCase().includes(keyword.toLowerCase()))
    );
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredMounts.map((mount) => (
            <MountCard key={mount} mount={mount} />
          ))}
        </div>
      </main>
    </>
  );
} 