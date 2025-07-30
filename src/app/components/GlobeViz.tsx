'use client';
import { useEffect, useRef } from 'react';
import Globe from 'globe.gl';
import { mockGlobeData } from '@/lib/mockData';

export default function GlobeViz() {
  const globeRef = useRef<HTMLDivElement>(null);
  const globeInstance = useRef<any>(null);

  useEffect(() => {
    if (!globeRef.current) return;

    // Initialize Globe.GL
    globeInstance.current = new Globe()
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-dark.jpg')
      .backgroundColor('#1a1a1a')
      .pointsData(mockGlobeData)
      .pointLat('lat')
      .pointLng('lng')
      .pointColor((d: any) =>
        d.impact === 'high' ? '#00ff00' : d.impact === 'moderate' ? '#ffff00' : '#ff0000'
      )
      .pointRadius(0.5)
      .pointAltitude(0.1)
      .labelText('country')
      .labelSize(0.5)
      .labelColor(() => '#ffffff')
      .labelAltitude(0.11)
      .onPointClick((point: any) => {
        alert(`Country: ${point.country}\nImpact: ${point.impact}`);
        globeInstance.current.pointOfView(
          { lat: point.lat, lng: point.lng, altitude: 2.5 },
          1000
        );
      })(globeRef.current);

    // Auto-rotate
    globeInstance.current.controls().autoRotate = true;
    globeInstance.current.controls().autoRotateSpeed = 1;

    // Zoom to Brazil (top region)
    setTimeout(() => {
      globeInstance.current.pointOfView(
        { lat: -14.235, lng: -51.925, altitude: 2.5 },
        2000
      );
    }, 1000);

    return () => {
      if (globeRef.current) globeRef.current.innerHTML = '';
    };
  }, []);

  return (
    <div className="relative">
      <div ref={globeRef} className="w-full h-[500px]" />
      <div className="absolute top-4 left-4 bg-secondary p-2 rounded">
        <p className="text-lg font-bold">Best Release Location: Brazil</p>
        <p className="text-sm">
          High engagement potential due to listener demographics and trending genres.
        </p>
      </div>
    </div>
  );
}