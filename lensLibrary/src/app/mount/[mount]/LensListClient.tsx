"use client";
import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Lens } from "../../../lib/data";
import { motion, AnimatePresence } from 'framer-motion';

interface LensListClientProps {
  lenses: Lens[];
}

export default function LensListClient({ lenses }: LensListClientProps) {
  const [brandFilter, setBrandFilter] = useState<string>("");
  const [focalFilter, setFocalFilter] = useState<string>("");

  const brands = useMemo(() => Array.from(new Set(lenses.map((l) => l.brand))), [lenses]);
  const focals = useMemo(() => Array.from(new Set(lenses.map((l) => l.focal_length))), [lenses]);

  const filtered = lenses.filter(
    (lens) =>
      (brandFilter ? lens.brand === brandFilter : true) &&
      (focalFilter ? lens.focal_length === focalFilter : true)
  );

  return (
    <div>
      <div className="flex space-x-4 mb-4">
        <select
          value={brandFilter}
          onChange={(e) => setBrandFilter(e.target.value)}
          className="border rounded px-2 py-1"
        >
          <option value="">全部品牌</option>
          {brands.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
        <select
          value={focalFilter}
          onChange={(e) => setFocalFilter(e.target.value)}
          className="border rounded px-2 py-1"
        >
          <option value="">全部焦段</option>
          {focals.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <AnimatePresence>
          {filtered.map((lens) => (
            <motion.li
              key={lens.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, transition: { duration: 0.3 } }}
              exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border p-4 rounded"
            >
              <Link
                href={`/mount/${encodeURIComponent(lens.mount)}/lens/${lens.id}`}
                className="block"
              >
                <div className="mb-2">
                  <Image
                    src="https://via.placeholder.com/150"
                    alt={lens.model}
                    width={150}
                    height={150}
                  />
                </div>
                <h2 className="font-bold mb-1">{lens.model}</h2>
                <p className="text-sm">焦距: {lens.focal_length}</p>
                <p className="text-sm">光圈: {lens.aperture}</p>
              </Link>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
} 