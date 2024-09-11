import { Button } from "@/components/ui/button";
import { MessageSquare, Phone } from "lucide-react";

export default function QuickLinks() {
  return (
    <div className="fixed bottom-4 left-0 right-0 z-50">
      <div className="max-w-md mx-auto px-4">
        <div className="bg-primary/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
          <div className="flex justify-between items-center">
            <Button
              variant="ghost"
              size="sm" // Adjusted size for a smaller look
              className="text-primary-foreground hover:text-primary-foreground/90 hover:bg-primary/50 text-sm"
              asChild
            >
              <a href="https://wa.me/+917665373702" className="flex items-center space-x-2">
                <MessageSquare className="h-4 w-4" /> {/* Adjusted icon size */}
                <span className="font-medium text-sm">Message Us</span> {/* Adjusted text size */}
              </a>
            </Button>
            <div className="w-px h-6 bg-primary-foreground/20"></div> {/* Adjusted divider height */}
            <Button
              variant="ghost"
              size="sm" // Adjusted size for a smaller look
              className="text-primary-foreground hover:text-primary-foreground/90 hover:bg-primary/50 text-sm"
              asChild
            >
              <a href="tel:+919828719163" className="flex items-center space-x-2">
                <Phone className="h-4 w-4" /> {/* Adjusted icon size */}
                <span className="font-medium text-sm">Call Now</span> {/* Adjusted text size */}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
