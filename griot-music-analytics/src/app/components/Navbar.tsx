'use client';
import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { GiMusicalNotes } from 'react-icons/gi';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-secondary p-4 flex justify-between items-center z-10">
      <Link href="/" className="flex items-center">
        <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
          <GiMusicalNotes className="text-white text-2xl mr-2" />
        </motion.div>
        <span className="text-xl font-bold">Griot</span>
      </Link>
      <div className="flex space-x-4">
        <Link href="/" className="hover:text-accent">Home</Link>
        <Link href="/upload" className="hover:text-accent">Upload</Link>
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="hover:text-accent"
          >
            Analytics
          </button>
          {isDropdownOpen && (
            <div className="absolute bg-secondary mt-2 p-2 rounded shadow-lg">
              <Link href="#globe" className="block hover:text-accent">Globe View</Link>
              <Link href="#sentiment" className="block hover:text-accent">Sentiment</Link>
              <Link href="#bpm" className="block hover:text-accent">BPM/Key</Link>
              <Link href="#royalties" className="block hover:text-accent">Royalties</Link>
            </div>
          )}
        </div>
        <Link href="/reports" className="hover:text-accent">Reports</Link>
        <Link href="/api" className="hover:text-accent">API</Link>
      </div>
      <FaUserCircle className="text-2xl hover:text-accent cursor-pointer" />
    </nav>
  );
}