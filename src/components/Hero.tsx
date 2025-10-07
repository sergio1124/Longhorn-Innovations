import { useEffect, useRef, useState } from "react";

export function Hero({ videoFiles }: { videoFiles?: string[] }) {
  // Default video list — put your files under public/videos/
  const defaultVideos = [
    "/videos/video1.mp4",
    "/videos/video2.mp4",
    "/videos/video3.mp4",
  ];
  const sources = (videoFiles && videoFiles.length ? videoFiles : defaultVideos).filter(Boolean);

  const [index, setIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // When a video ends, advance to the next source (wrap around)
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const onEnded = () => setIndex((i) => (sources.length ? (i + 1) % sources.length : 0));
    const onError = () => setIndex((i) => (sources.length ? (i + 1) % sources.length : 0));
    el.addEventListener("ended", onEnded);
    el.addEventListener("error", onError);
    return () => {
      el.removeEventListener("ended", onEnded);
      el.removeEventListener("error", onError);
    };
  }, [sources.length]);

  // Update video src when index changes and attempt to play
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    if (!sources.length) return;
    el.src = sources[index];
    // don't set loop on the element; we handle looping by advancing index
    const playPromise = el.play();
    if (playPromise && typeof playPromise.then === "function") {
      playPromise.catch(() => {
        // autoplay may be blocked on some browsers — leave muted attribute so user can play
      });
    }
  }, [index, sources]);

  return (
    <section className="relative bg-primary text-white text-center py-50 px-6 overflow-hidden mt-16 md:mt-20 lg:mt-26">
      {/* Background video - put 1..N files in public/videos and optionally pass a videoFiles prop */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        playsInline
        preload="metadata"
        poster="/hero-poster.jpg"
        aria-hidden="true"
      >
        Your browser does not support the video tag.
      </video>

      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      {/* Content above the video */}
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Longhorn Innovations</h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          Kitchens, bathrooms, roofing, painting, carpentry, drywall, flooring,
          gutters and ongoing home maintenance — one local team for every project.
        </p>
        <a
          href="#contact"
          className="bg-white px-6 py-3 rounded-lg font-semibold hover:bg-garnet transition inline-block"
        >
          <span className="text-accent">Request a Free Estimate</span>
        </a>
      </div>
    </section>
  )
}
