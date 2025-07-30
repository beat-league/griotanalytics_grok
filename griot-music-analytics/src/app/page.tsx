import SongUpload from '@/components/SongUpload';
import GlobeViz from '@/components/GlobeViz';
import AnalysisPanel from '@/components/AnalysisPanel';
import RoyaltiesTable from '@/components/RoyaltiesTable';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20 pb-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Song Upload */}
          <div className="md:col-span-1">
            <SongUpload />
          </div>
          {/* Globe Visualization */}
          <div className="md:col-span-2">
            <GlobeViz />
          </div>
          {/* Analysis Panel */}
          <div className="md:col-span-1">
            <AnalysisPanel />
          </div>
          {/* Royalties Table */}
          <div className="md:col-span-2">
            <RoyaltiesTable />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}