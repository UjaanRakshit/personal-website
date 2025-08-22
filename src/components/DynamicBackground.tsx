'use client';

export default function DynamicBackground() {
  return (
    <>
      {/* Main floating particles */}
      <div className="floating-particles">
        {Array.from({ length: 12 }, (_, i) => (
          <div key={i} className="particle" />
        ))}
      </div>
      
      {/* Additional subtle elements */}
      <div className="floating-particles">
        {Array.from({ length: 6 }, (_, i) => (
          <div 
            key={`large-${i}`} 
            className="particle large-particle"
            style={{
              left: `${15 + i * 15}%`,
              animationDelay: `${-i * 8}s`,
              animationDuration: `${35 + i * 3}s`
            }}
          />
        ))}
      </div>
    </>
  );
}
