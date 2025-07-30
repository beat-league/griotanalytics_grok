'use client';
import { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { mockRoyalties } from '@/lib/mockData';

export default function RoyaltiesTable() {
  const [sortBy, setSortBy] = useState<keyof typeof mockRoyalties[0] | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const tableRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => tableRef.current,
    documentTitle: 'Griot_Royalties_Report',
  });

  const sortedData = [...mockRoyalties].sort((a, b) => {
    if (!sortBy) return 0;
    const aValue = a[sortBy];
    const bValue = b[sortBy];
    if (typeof aValue === 'string') {
      return sortOrder === 'asc'
        ? aValue.localeCompare(bValue as string)
        : bValue.localeCompare(aValue as string);
    }
    return sortOrder === 'asc'
      ? (aValue as number) - (bValue as number)
      : (bValue as number) - (aValue as number);
  });

  const handleSort = (key: keyof typeof mockRoyalties[0]) => {
    setSortBy(key);
    setSortOrder(sortBy === key && sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div className="bg-secondary p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Royalties</h2>
        <button
          onClick={handlePrint}
          className="bg-accent text-white px-4 py-2 rounded-lg flex items-center"
        >
          <FaDownload className="mr-2" /> Download Report
        </button>
      </div>
      <div ref={tableRef}>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-600">
              <th
                className="p-2 cursor-pointer"
                onClick={() => handleSort('platform')}
              >
                Platform {sortBy === 'platform' && (sortOrder === 'asc' ? '↑' : '↓')}
              </th>
              <th
                className="p-2 cursor-pointer"
                onClick={() => handleSort('royalties')}
              >
                Royalties (USD) {sortBy === 'royalties' && (sortOrder === 'asc' ? '↑' : '↓')}
              </th>
              <th
                className="p-2 cursor-pointer"
                onClick={() => handleSort('engagement')}
              >
                Engagement {sortBy === 'engagement' && (sortOrder === 'asc' ? '↑' : '↓')}
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((row, index) => (
              <motion.tr
                key={row.platform}
                className="border-b border-gray-600 slide-in"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <td className="p-2" style={{ color: row.color }}>
                  {row.platform}
                </td>
                <td className="p-2">${row.royalties.toLocaleString()}</td>
                <td className="p-2">{row.engagement}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}