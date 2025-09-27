import React, { use, useEffect, useRef, useState  } from 'react'
import canvasimages from './canvasimages';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Canvas = ({ details }) => {
  const { startIndex, numImages, duration, size, top, left, zIndex} = details;
  const [index, setIndex] = useState({ value: startIndex });
  const canvasRef = useRef(null);

  useGSAP(() => {
    gsap.to(index, {
      value: startIndex + numImages - 1,
      duration: duration,
      repeat: -1,
      ease: "linear",
      onUpdate: () => {
        setIndex({ value: Math.round(index.value) });
      },
    });

    gsap.from(canvasRef.current, {
      opacity: 0,
      scale: 0.3,
      duration: 4,
      ease: "power2.inout",
    });
  });

  useEffect(() => {
    const scale = window.devicePixelRatio;
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      const img = new window.Image();
      img.src = canvasimages[index.value];
      img.onload = () => {
        // Optionally set canvas size to image size
        canvas.width = canvas.offsetWidth * scale;
        canvas.height = canvas.offsetHeight * scale;
        canvas.style.width = canvas.offsetWidth + 'px';
        canvas.style.height = canvas.offsetHeight + 'px';
        ctx.scale(scale, scale);
        ctx.drawImage(img, 0, 0, canvas.offsetWidth, canvas.offsetHeight);
      };
    }
  });
  

  return (
    <canvas 
    data-scroll
    data-scroll-speed={Math.random().toFixed(5)}
    ref={canvasRef} 
    className='absolute'
    style={{width: `${size * 1.2}px`, 
            height: `${size * 1.2}px`, 
            top: `${top}%`, 
            left: `${left}%`, 
            zIndex: `${zIndex}`}} 
    id='canvas'
    ></canvas>
  );
}

export default Canvas;