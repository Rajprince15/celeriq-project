import { useState, useRef, useEffect } from "react";
import { Project } from "@/data/projects";
import { X, ExternalLink, Play, Pause, Maximize, Minimize } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setIsPlaying(false);
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle fullscreen change events
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement && videoContainerRef.current) {
        await videoContainerRef.current.requestFullscreen();
      } else if (document.fullscreenElement) {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error('Error toggling fullscreen:', error);
    }
  };

  const handleVideoClick = () => {
    togglePlay();
  };

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="relative mx-4 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-border/50 bg-background/95 backdrop-blur-xl shadow-2xl animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-background/80 p-2 backdrop-blur-sm transition-all hover:bg-background hover:scale-110"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Video Section */}
        <div ref={videoContainerRef} className="relative aspect-video w-full overflow-hidden rounded-t-2xl bg-black">
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            loop
            playsInline
            onClick={handleVideoClick}
          >
            <source src={project.videoPath} type="video/mp4" />
          </video>

          {/* Play/Pause Overlay */}
          <div
            className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/20 opacity-0 transition-opacity hover:opacity-100"
            onClick={handleVideoClick}
          >
            {isPlaying ? (
              <div className="rounded-full bg-black/50 p-6 backdrop-blur-sm">
                <Pause className="h-12 w-12 text-white" fill="white" />
              </div>
            ) : (
              <div className="rounded-full bg-black/50 p-6 backdrop-blur-sm">
                <Play className="h-12 w-12 text-white" fill="white" />
              </div>
            )}
          </div>

          {/* Fullscreen Button - Responsive sizing */}
          <button
            onClick={toggleFullscreen}
            className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 z-20 rounded-full bg-black/60 p-2 sm:p-3 backdrop-blur-sm transition-all hover:bg-black/80 hover:scale-110 active:scale-95"
            title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
          >
            {isFullscreen ? (
              <Minimize className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            ) : (
              <Maximize className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            )}
          </button>

          {/* Gradient Overlay */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        </div>

        {/* Content Section - Responsive padding */}
        <div className="p-4 sm:p-6 md:p-8">
          {/* Header */}
          <div className="mb-4 sm:mb-6">
            <div className="mb-2 flex items-center gap-2 sm:gap-3">
              <div className={`h-1 w-8 sm:w-12 rounded-full bg-gradient-to-r ${project.accentColor}`} />
              <span className="text-xs sm:text-sm font-medium text-muted-foreground">{project.category}</span>
            </div>
            <h2 className="mb-2 sm:mb-3 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">{project.title}</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground">{project.description}</p>
          </div>

          {/* Tech Stack */}
          <div className="mb-4 sm:mb-6">
            <h3 className="mb-2 sm:mb-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className={`rounded-lg bg-gradient-to-r ${project.accentColor} px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-white shadow-md`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons - Responsive */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <Button
              onClick={togglePlay}
              size="lg"
              variant="outline"
              className="group flex-1 w-full sm:min-w-[180px]"
            >
              {isPlaying ? (
                <>
                  <Pause className="mr-2 h-5 w-5" />
                  Pause Video
                </>
              ) : (
                <>
                  <Play className="mr-2 h-5 w-5" />
                  Play Video
                </>
              )}
            </Button>

            {project.liveLink !== "#" && (
              <Button
                onClick={() => window.open(project.liveLink, "_blank")}
                size="lg"
                className={`group flex-1 w-full sm:min-w-[180px] bg-gradient-to-r ${project.accentColor} text-white shadow-lg transition-all hover:shadow-xl hover:scale-105`}
              >
                <ExternalLink className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                View Live Project
              </Button>
            )}

            {project.liveLink === "#" && (
              <Button
                size="lg"
                variant="outline"
                disabled
                className="flex-1 w-full sm:min-w-[180px] cursor-not-allowed opacity-50"
              >
                <ExternalLink className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Coming Soon
              </Button>
            )}
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
