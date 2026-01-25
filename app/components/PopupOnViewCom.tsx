"use client";

import { useEffect, useRef, useState } from "react";

export default function PopupOnViewCom({
  audioSrc,
  targetId = "experience",
}: {
  audioSrc: string;
  targetId?: string;
}) {
  const [visible, setVisible] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Intersection Observer
  useEffect(() => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [targetId]);

  // Play/pause audio
  const toggleAudio = async () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      await audioRef.current.play();
      setPlaying(true);
    } else {
      audioRef.current.pause();
      setPlaying(false);
    }
  };

  if (!visible) return null;

  return (
    <>
      <audio
        ref={audioRef}
        src={audioSrc}
        onEnded={() => setPlaying(false)}
      />

      {/* Cat Play Button */}
      <div
        onClick={toggleAudio}
        className="fixed bottom-6 right-8 z-50
                   w-12 h-12 rounded-full
                   text-3xl flex items-center justify-center cursor-pointer
                   shadow-lg hover:scale-110 transition-transform"
      >
        <img
    src="/click.gif"
    alt="Click to play"
    className="w-full h-full object-contain"
  />
      </div>

      {/* Moving Bird */}
      {playing && (
        <div className="popup-audio-bar">
          <img
            src="/bird.gif"
            alt="Flying bird"
            className="animal-walk animate-bird"
          />
        </div>
      )}
    </>
  );
}
