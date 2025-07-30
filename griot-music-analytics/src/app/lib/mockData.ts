import { SongAnalysis, RoyaltyData, GlobeData } from '@/types';

export const mockAnalysis: SongAnalysis = {
  sentiment: {
    positive: 60,
    neutral: 30,
    negative: 10,
    summary: "Your song’s uplifting mood is likely to resonate with fans on TikTok.",
  },
  bpmAnalysis: {
    bpm: 94,
    key: "C Major",
    danceability: 68,
    energy: 19,
    acousticness: 56,
  },
  successPrediction: {
    score: 78,
    explanation: "Strong potential on Spotify due to alignment with current pop trends.",
  },
};

export const mockRoyalties: RoyaltyData[] = [
  { platform: "Spotify", royalties: 3500, engagement: "10M streams", color: "#1DB954" },
  { platform: "TikTok", royalties: 1200, engagement: "500K uses", color: "#EE0F51" },
  { platform: "YouTube", royalties: 2000, engagement: "1M views", color: "#FF0000" },
  { platform: "Apple Music", royalties: 1800, engagement: "5M streams", color: "#FA57C1" },
  { platform: "Deezer", royalties: 500, engagement: "1M streams", color: "#00C7B7" },
];

export const mockGlobeData: GlobeData[] = [
  { country: "Brazil", lat: -14.235, lng: -51.925, impact: "high" },
  { country: "USA", lat: 37.0902, lng: -95.7129, impact: "moderate" },
  { country: "UK", lat: 55.3781, lng: -3.436, impact: "low" },
];