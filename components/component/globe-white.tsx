"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";

export const WhiteGlobe = ({
  className,
  size = 600,
}: {
  className?: string;
  size?: number;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: size * 2,
      height: size * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // Bekasi, Indonesia (latitude, longitude)
        { location: [-6.2383, 106.9756], size: 0.1 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, [size]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: size, height: size, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};
