'use client';

import { useState, useEffect } from 'react';

interface TextScrambleProps {
  text: string;
  onComplete?: () => void;
  className?: string;
}

export function TextScramble({ text, onComplete, className = '' }: TextScrambleProps) {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    const targetLength = text.length;
    let iteration = 0;
    const maxIterations = 30; // Reduced from 50
    
    const interval = setInterval(() => {
      const progress = iteration / maxIterations;
      
      // Bi-directional reveal: reveal from both ends toward center
      const revealFromLeft = Math.floor(progress * targetLength / 2);
      const revealFromRight = Math.floor(progress * targetLength / 2);
      
      let scrambled = '';
      
      for (let i = 0; i < targetLength; i++) {
        const distanceFromLeft = i;
        const distanceFromRight = targetLength - 1 - i;
        
        // Check if this character should be revealed
        const shouldRevealFromLeft = distanceFromLeft < revealFromLeft;
        const shouldRevealFromRight = distanceFromRight < revealFromRight;
        
        if (shouldRevealFromLeft || shouldRevealFromRight) {
          scrambled += text[i];
        } else {
          // Add random character for positions not yet revealed
          scrambled += chars[Math.floor(Math.random() * chars.length)];
        }
      }
      
      setDisplayText(scrambled);
      
      if (iteration >= maxIterations) {
        setDisplayText(text);
        setIsComplete(true);
        clearInterval(interval);
        if (onComplete) {
          onComplete();
        }
      }
      
      iteration++;
    }, 83); // Reduced interval for faster animation (2.5 seconds total)

    return () => clearInterval(interval);
  }, [text, onComplete]);
  return (
    <span className={`font-display font-black ${className}`}>
      {displayText}
    </span>
  );
}