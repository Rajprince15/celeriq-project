import { useState, useEffect } from "react";
import { ArrowUp, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const refreshPage = () => {
    window.location.reload();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-3">
      {/* Refresh/Reset Button */}
      <Button
        onClick={refreshPage}
        size="lg"
        className="group h-14 w-14 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 p-0 shadow-lg transition-all hover:scale-110 hover:shadow-xl hover:shadow-purple-500/50"
        title="Refresh & Reset Animation"
      >
        <RotateCcw className="h-6 w-6 transition-transform group-hover:rotate-180" />
      </Button>

      {/* Back to Top Button */}
      <Button
        onClick={scrollToTop}
        size="lg"
        className="group h-14 w-14 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 p-0 shadow-lg transition-all hover:scale-110 hover:shadow-xl hover:shadow-blue-500/50"
        title="Back to Top"
      >
        <ArrowUp className="h-6 w-6 transition-transform group-hover:-translate-y-1" />
      </Button>
    </div>
  );
};

export default BackToTop;
