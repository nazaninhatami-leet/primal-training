import React, { useState, useEffect, useRef } from 'react';

export default function FadeInImage() {
  const imgRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        timerRef.current = setTimeout(() => {
          setVisible(true);
        }, 80);
      } else {
        clearTimeout(timerRef.current);
        setVisible(false);
      }
    });

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }
    return () => {
      observer.disconnect();
      clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div
      ref={imgRef}
      className={`bg-black h-126 flex items-center overflow-hidden filter transition-all duration-500 ease-in-out 
                   ${
                     visible
                       ? 'opacity-100 brightness-100'
                       : 'opacity-100 brightness-0'
                   }`}
    >
      {visible && (
        <img
          src="https://appeal-rice-stuff.figma.site/_assets/v10/4b3ae65ece4bb9cc6a2f518907d80df4631625fe.png"
          alt="trainer"
          className="object-cover h-full w-full"
        />
      )}
    </div>
  );
}
