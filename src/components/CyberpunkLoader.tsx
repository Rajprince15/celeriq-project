import { useState, useEffect } from 'react';

interface CyberpunkLoaderProps {
  onComplete: () => void;
}

const CyberpunkLoader = ({ onComplete }: CyberpunkLoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [loadedCount, setLoadedCount] = useState(0);
  const [totalResources, setTotalResources] = useState(0);

  const loadingMessages = [
    'INITIALIZING SYSTEM...',
    'LOADING NEURAL NETWORKS...',
    'PRELOADING HERO VIDEO...',
    'LOADING PROJECT ASSETS...',
    'SYNCING AI MODULES...',
    'OPTIMIZING PERFORMANCE...',
    'PREPARING DIGITAL ECOSYSTEM...',
    'READY FOR EXPLORATION...'
  ];

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  // Quick progress animation (4 seconds)
  useEffect(() => {
    const duration = 5000; // 4 seconds total
    const steps = 100;
    const stepDuration = duration / steps;

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 300);
          return 100;
        }
        return prev + 1;
      });
    }, stepDuration);

    return () => clearInterval(interval);
  }, [onComplete]);

  // Update loading messages based on progress
  useEffect(() => {
    const messageIndex = Math.floor((progress / 100) * loadingMessages.length);
    if (messageIndex < loadingMessages.length) {
      setCurrentMessage(loadingMessages[messageIndex]);
    }
    // Simulate resource count for visual effect
    setLoadedCount(Math.floor((progress / 100) * 9));
    setTotalResources(9);
  }, [progress]);

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-grid-pattern animate-grid-scroll"></div>
      </div>

      {/* Scanning Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="scan-line-vertical"></div>
        <div className="scan-line-horizontal"></div>
      </div>

      {/* Main Content - Responsive */}
      <div className="relative z-10 max-w-4xl w-full px-4 sm:px-6 space-y-8 sm:space-y-12">
        {/* CelerIQ AI Logo/Title */}
        <div className="text-center space-y-3 sm:space-y-4">
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-black text-cyan-400 drop-shadow-[0_0_50px_rgba(6,182,212,1)]" data-text="CelerIQ AI" style={{ 
            textShadow: '0 0 60px rgba(6,182,212,1), 0 0 100px rgba(59,130,246,0.8), 0 0 140px rgba(6,182,212,0.6)',
            WebkitTextStroke: '2px rgba(6,182,212,0.5)',
            fontWeight: 900
          }}>
            CelerIQ AI
          </h1>
          <div className="h-2 w-48 sm:w-56 md:w-72 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse shadow-[0_0_30px_rgba(6,182,212,1)]"></div>
        </div>

        {/* Terminal Box - Responsive */}
        <div className="relative border-2 border-cyan-500/70 bg-black/70 backdrop-blur-lg p-4 sm:p-6 md:p-8 rounded-lg shadow-2xl shadow-cyan-500/50">
          {/* Corner Decorations */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.6)]"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.6)]"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.6)]"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.6)]"></div>

          {/* Scanning Effect */}
          <div className="scanner-line-loader"></div>

          {/* System Messages */}
          <div className="space-y-3 sm:space-y-4 font-mono">
            {/* System Header */}
            <div className="flex items-center gap-2 text-cyan-400">
              <span className="animate-pulse text-lg">{'>'}</span>
              <span className="text-base sm:text-lg md:text-xl font-bold">SYSTEM STATUS</span>
            </div>

            {/* Current Message */}
            <div className="flex items-center gap-2 text-green-400 text-sm sm:text-base md:text-lg font-bold">
              <span className="animate-pulse text-cyan-400 text-lg">▸</span>
              <span className="drop-shadow-[0_0_12px_rgba(34,197,94,1)]" style={{ textShadow: '0 0 15px rgba(34,197,94,0.9)' }}>{currentMessage}</span>
              <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity text-cyan-400`}>█</span>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2 pt-4">
              <div className="flex justify-between items-center text-sm text-cyan-300">
                <span className="font-bold text-base">INITIALIZATION PROGRESS</span>
                <span className="text-3xl font-black tabular-nums text-cyan-400 drop-shadow-[0_0_15px_rgba(6,182,212,1)]" style={{ textShadow: '0 0 20px rgba(6,182,212,1), 0 0 40px rgba(6,182,212,0.8)' }}>{progress}%</span>
              </div>
              
              {/* Resource Counter */}
              <div className="flex justify-between items-center text-xs text-green-400/80">
                <span>ASSETS LOADED</span>
                <span className="tabular-nums">{loadedCount} / {totalResources}</span>
              </div>
              
              {/* Progress Bar Container */}
              <div className="relative h-4 bg-gray-800/80 rounded-full overflow-hidden border border-cyan-500/30">
                {/* Background Grid */}
                <div className="absolute inset-0 opacity-20 bg-progress-grid"></div>
                
                {/* Progress Fill */}
                <div 
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 transition-all duration-300 ease-out rounded-full"
                  style={{ width: `${progress}%` }}
                >
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-progress"></div>
                </div>

                {/* Progress Glow */}
                <div 
                  className="absolute inset-y-0 left-0 bg-cyan-400/30 blur-xl transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

              {/* Loading Dots */}
              <div className="flex items-center gap-2 text-xs text-cyan-400/70">
                <span>LOADING</span>
                <span className="flex gap-1">
                  <span className="animate-bounce" style={{ animationDelay: '0ms' }}>.</span>
                  <span className="animate-bounce" style={{ animationDelay: '150ms' }}>.</span>
                  <span className="animate-bounce" style={{ animationDelay: '300ms' }}>.</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Status Indicators */}
        <div className="grid grid-cols-3 gap-4 text-center font-mono text-sm sm:text-base">
          <div className="space-y-2">
            <div className={`w-4 h-4 mx-auto rounded-full ${progress > 30 ? 'bg-green-500 shadow-[0_0_15px_rgba(34,197,94,1)]' : 'bg-gray-600'} animate-pulse`}></div>
            <div className={`font-bold ${progress > 30 ? 'text-green-400' : 'text-gray-500'}`}>NEURAL NET</div>
          </div>
          <div className="space-y-2">
            <div className={`w-4 h-4 mx-auto rounded-full ${progress > 60 ? 'bg-green-500 shadow-[0_0_15px_rgba(34,197,94,1)]' : 'bg-gray-600'} animate-pulse`}></div>
            <div className={`font-bold ${progress > 60 ? 'text-green-400' : 'text-gray-500'}`}>AI MODULES</div>
          </div>
          <div className="space-y-2">
            <div className={`w-4 h-4 mx-auto rounded-full ${progress > 90 ? 'bg-green-500 shadow-[0_0_15px_rgba(34,197,94,1)]' : 'bg-gray-600'} animate-pulse`}></div>
            <div className={`font-bold ${progress > 90 ? 'text-green-400' : 'text-gray-500'}`}>READY</div>
          </div>
        </div>
      </div>

      {/* Particle Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `particle-float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CyberpunkLoader;
