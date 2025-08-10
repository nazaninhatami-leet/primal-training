import { useState, useEffect, useRef } from 'react';

export default function Img({ img, alt }) {
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
        <img src={img} alt={alt} className="object-cover h-full w-full" />
      )}
    </div>
  );
}
