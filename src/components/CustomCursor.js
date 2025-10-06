'use client';
import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trails, setTrails] = useState([]);
  const [isClicking, setIsClicking] = useState(false);

  // Hapus state `counter` yang tidak diperlukan

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Buat trail baru dengan ID yang unik dari event timeStamp
      const newTrail = { 
        x: e.clientX, 
        y: e.clientY, 
        // e.timeStamp sangat presisi dan ideal untuk key yang unik
        // Ditambah Math.random() untuk jaminan keunikan 100%
        id: `${e.timeStamp}-${Math.random()}` 
      };

      // Gunakan functional update untuk trails, ini adalah praktik terbaik
      setTrails(prevTrails => {
        const newTrails = [...prevTrails, newTrail];
        return newTrails.slice(-15); // Tingkatkan jumlah trail agar lebih mulus
      });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []); // <-- Dependency array KOSONG. Ini penting!

  return (
    <>
      {/* Trail cursors */}
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="custom-cursor-trail"
          style={{
            left: `${trail.x - 4}px`,
            top: `${trail.y - 4}px`,
            opacity: (index + 1) / trails.length, // Hapus * 0.5 agar lebih terlihat
            transform: `scale(${(index + 1) / trails.length})`,
          }}
        />
      ))}
      
      {/* Main cursor */}
      <div
        className={`custom-cursor ${isClicking ? 'cursor-active' : ''}`}
        style={{
          left: `${position.x - 10}px`,
          top: `${position.y - 10}px`,
        }}
      />
    </>
  );
};

export default CustomCursor;