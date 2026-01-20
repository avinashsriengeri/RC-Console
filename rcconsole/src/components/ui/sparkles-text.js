"use client";

export function SparklesText({ 
  children, 
  className = ""
}) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      
      {/* Blue glow line below text */}
      <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent" />
    </span>
  );
}

export default SparklesText;











