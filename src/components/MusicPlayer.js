'use client';
import { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause, FaMusic, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  const musicData = {
    title: "Goodbye",
    artist: "Air Supply",
    audioUrl: "/audio/song.mp3"
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => {
          console.error('Playback error:', err);
        });
      }
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.5;

    const handleEnded = () => setIsPlaying(false);
    const handlePause = () => setIsPlaying(false);
    const handlePlay = () => setIsPlaying(true);

    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('play', handlePlay);

    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('play', handlePlay);
    };
  }, []);

  return (
    <div className="music-player-mini">
      <audio ref={audioRef} src={musicData.audioUrl} preload="metadata" loop />
      
      <div className="music-header-mini">
        <FaMusic className="music-icon-mini" />
        <div className="music-info-mini">
          <div className="music-title-mini">{musicData.title}</div>
          <div className="music-artist-mini">{musicData.artist}</div>
        </div>
      </div>

      <div className="music-controls-mini">
        <button className="btn-mini" onClick={toggleMute} title={isMuted ? "Unmute" : "Mute"}>
          {isMuted ? <FaVolumeMute size={14} /> : <FaVolumeUp size={14} />}
        </button>
        <button className="btn-play-mini" onClick={togglePlay} title={isPlaying ? "Pause" : "Play"}>
          {isPlaying ? <FaPause size={12} /> : <FaPlay size={12} />}
        </button>
      </div>

      {isPlaying && (
        <div className="equalizer-mini">
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;