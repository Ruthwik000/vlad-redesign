import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      // Use requestAnimationFrame for smoother updates
      requestAnimationFrame(() => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY
        });
      });
    };

    const checkCursor = (e) => {
      // Direct target check instead of querySelector
      const target = e.target;
      const isClickable = 
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.role === 'button' ||
        target.closest('.MuiCard-root') ||
        target.closest('.MuiButton-root') ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsHovering(isClickable);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', mouseMove, { passive: true });
    window.addEventListener('mouseover', checkCursor, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseover', checkCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      <motion.div
        className="cursor-dot"
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
          scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "tween",
          duration: 0.15,
          ease: "linear"
        }}
        style={{
          width: '10px',
          height: '10px',
          backgroundColor: isHovering ? '#64FFDA' : 'rgba(100, 255, 218, 0.9)',
          borderRadius: '50%',
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'difference'
        }}
      />

      <motion.div
        className="cursor-ring"
        animate={{
          x: mousePosition.x - 25,
          y: mousePosition.y - 25,
          scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "tween",
          duration: 0.2,
          ease: "linear"
        }}
        style={{
          width: '50px',
          height: '50px',
          border: `2px solid ${isHovering ? '#64FFDA' : 'rgba(100, 255, 218, 0.4)'}`,
          borderRadius: '50%',
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 9998,
          mixBlendMode: 'difference'
        }}
      />

      <style>
        {`
          /* Hide cursor on non-touch devices */
          @media (hover: hover) {
            * {
              cursor: none !important;
            }
          }

          /* Show default cursor on touch devices */
          @media (hover: none) {
            .cursor-dot, .cursor-ring {
              display: none !important;
            }
            * {
              cursor: auto !important;
            }
            a, button, [role="button"] {
              cursor: pointer !important;
            }
          }
        `}
      </style>
    </>
  );
};

export default CustomCursor; 