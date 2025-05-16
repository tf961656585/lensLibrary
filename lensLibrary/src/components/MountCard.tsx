"use client";

import Link from "next/link";

export default function MountCard({ mount }: { mount: string }) {
  return (
    <Link
      href={`/mount/${encodeURIComponent(mount)}`}
      className="block bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition"
    >
      <div className="h-40 bg-gray-100 flex items-center justify-center">
        <span className="text-gray-400">图片占位</span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{mount}</h3>
        <p className="text-sm text-gray-600 mt-2">这里是{mount}卡口的简介。</p>
      </div>
    </Link>
  );
} 