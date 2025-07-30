'use client';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { motion } from 'framer-motion';
import { FaUpload } from 'react-icons/fa';

export default function SongUpload() {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState('');

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setUploading(true);
    setProgress(0);
    setMessage('');

    // Simulate upload and analysis
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploading(false);
          setMessage('Song Uploaded! Analyzing Now...');
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="bg-secondary p-6 rounded-lg shadow-lg">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed border-accent p-8 text-center rounded-lg ${
          isDragActive ? 'bg-gray-700' : ''
        }`}
      >
        <input {...getInputProps()} accept=".mp3,.wav" />
        <motion.button
          className="bg-accent text-white px-6 py-3 rounded-lg font-semibold pulse"
          whileHover={{ scale: 1.1 }}
        >
          <FaUpload className="inline mr-2" /> Upload Your Song
        </motion.button>
        <p className="mt-2 text-sm">Supports MP3, WAV, or YouTube URL</p>
        {uploading && (
          <div className="mt-4">
            <div className="w-full bg-gray-600 rounded-full h-2.5">
              <div
                className="bg-accent h-2.5 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="mt-2">{progress}%</p>
          </div>
        )}
        {message && <p className="mt-4 text-accent">{message}</p>}
        {uploading && (
          <div className="mt-4">
            <svg className="animate-pulse" width="100" height="20">
              <rect width="20%" height="20" fill="#007bff" x="0">
                <animate attributeName="width" values="20%;40%;20%" dur="1s" repeatCount="indefinite" />
              </rect>
              <rect width="20%" height="20" fill="#007bff" x="25%">
                <animate attributeName="width" values="20%;40%;20%" dur="1s" repeatCount="indefinite" begin="0.2s" />
              </rect>
              <rect width="20%" height="20" fill="#007bff" x="50%">
                <animate attributeName="width" values="20%;40%;20%" dur="1s" repeatCount="indefinite" begin="0.4s" />
              </rect>
              <rect width="20%" height="20" fill="#007bff" x="75%">
                <animate attributeName="width" values="20%;40%;20%" dur="1s" repeatCount="indefinite" begin="0.6s" />
              </rect>
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}