export default function HeroBackground() {
  return (
    <div 
      className="absolute inset-0 w-screen h-full" 
      style={{ left: '50%', transform: 'translateX(-50%)' }}
    >
      {/* Animated gradient mesh */}
      <div className="mesh-bg absolute inset-0 w-full h-full opacity-60 pointer-events-none"></div>
      
      {/* Soft dotted grid panning subtly */}
      <div className="animated-grid absolute inset-0 w-full h-full opacity-20 pointer-events-none"></div>
      
      {/* Blurred gradient blobs for depth */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="gradient-blob blob-1"></div>
        <div className="gradient-blob blob-2"></div>
        <div className="gradient-blob blob-3"></div>
      </div>
      
      {/* Static wave patterns */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <svg className="wave-svg wave-static-1" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="rgba(212, 65, 142, 0.08)" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <svg className="wave-svg wave-static-2" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="rgba(6, 82, 197, 0.06)" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,208C960,192,1056,160,1152,149.3C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <svg className="wave-svg wave-static-3" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="rgba(37, 150, 190, 0.05)" d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,154.7C672,149,768,171,864,186.7C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
}

