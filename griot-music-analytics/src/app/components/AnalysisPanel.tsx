'use client';
import { useState } from 'react';
import { FaHeart, FaMusic, FaChartLine } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { mockAnalysis } from '@/lib/mockData';
import { Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export default function AnalysisPanel() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const sentimentData = {
    labels: ['Positive', 'Neutral', 'Negative'],
    datasets: [
      {
        data: [
          mockAnalysis.sentiment.positive,
          mockAnalysis.sentiment.neutral,
          mockAnalysis.sentiment.negative,
        ],
        backgroundColor: ['#00ff00', '#ffff00', '#ff0000'],
      },
    ],
  };

  const bpmData = {
    labels: ['BPM', 'Danceability', 'Energy', 'Acousticness'],
    datasets: [
      {
        label: 'Song Metrics',
        data: [
          mockAnalysis.bpmAnalysis.bpm,
          mockAnalysis.bpmAnalysis.danceability,
          mockAnalysis.bpmAnalysis.energy,
          mockAnalysis.bpmAnalysis.acousticness,
        ],
        backgroundColor: '#007bff',
      },
    ],
  };

  return (
    <div className="bg-secondary p-6 rounded-lg shadow-lg space-y-4">
      {/* Sentiment Analysis */}
      <div>
        <button
          className="flex items-center w-full text-left font-bold"
          onClick={() => setOpenSection(openSection === 'sentiment' ? null : 'sentiment')}
        >
          <FaHeart className="mr-2" /> Sentiment Analysis
        </button>
        {openSection === 'sentiment' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-2"
          >
            ```chartjs
            {
              "type": "pie",
              "data": {
                "labels": ["Positive", "Neutral", "Negative"],
                "datasets": [{
                  "data": [60, 30, 10],
                  "backgroundColor": ["#00ff00", "#ffff00", "#ff0000"],
                  "borderColor": ["#1a1a1a", "#1a1a1a", "#1a1a1a"],
                  "borderWidth": 1
                }]
              },
              "options": {
                "responsive": true,
                "plugins": {
                  "legend": {
                    "position": "top",
                    "labels": { "color": "#ffffff" }
                  }
                }
              }
            }