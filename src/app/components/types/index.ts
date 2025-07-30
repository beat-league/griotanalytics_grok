export interface SongAnalysis {
  sentiment: {
    positive: number;
    neutral: number;
    negative: number;
    summary: string;
  };
  bpmAnalysis: {
    bpm: number;
    key: string;
    danceability: number;
    energy: number;
    acousticness: number;
  };
  successPrediction: {
    score: number;
    explanation: string;
  };
}

export interface RoyaltyData {
  platform: string;
  royalties: number;
  engagement: string;
  color: string;
}

export interface GlobeData {
  country: string;
  lat: number;
  lng: number;
  impact: 'high' | 'moderate' | 'low';
}