import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, Phone, X } from "lucide-react"; // Import the X icon

export default function CallToActions() {
  const [isVisible, setIsVisible] = useState(false); // Initially hidden

  useEffect(() => {
    // Set a timeout to show the component after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 8000);

    // Clean up the timer if the component is unmounted before the timeout
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null; // Don't render the component if not visible

  return (
    <div className="fixed bottom-4 left-0 right-0 z-50">
      <div className="max-w-md mx-auto px-8">
        <div className="bg-green-600 backdrop-blur-sm rounded-full p-2 shadow-lg relative">
          {/* Cross button */}
          <button
            className="absolute -top-3 -right-3 text-white hover:text-white bg-green-700 p-1 rounded-full"
            onClick={() => setIsVisible(false)} // Hide component on click
          >
            <X className="h-4 w-4" /> {/* X icon */}
          </button>

          <div className="flex justify-between items-center">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-white/90 hover:bg-green-700 text-sm"
              asChild
            >
              <a href="https://wa.me/+917665373702" className="flex items-center space-x-2">
                <MessageSquare className="h-4 w-4" />
                <span className="font-medium text-sm">Message Us</span>
              </a>
            </Button>
            <div className="w-px h-6 bg-white/20"></div>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-white hover:bg-green-700 text-sm"
              asChild
            >
              <a href="tel:+919828719163" className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="font-medium text-sm">Call Now</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
