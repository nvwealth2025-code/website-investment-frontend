import Link from "next/link";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-4">
      <div className="glass-panel p-8 md:p-12 rounded-3xl max-w-md w-full text-center">
        <AlertCircle className="w-16 h-16 text-destructive mx-auto mb-6" />
        <h1 className="text-3xl font-display font-bold text-white mb-4">
          Page not found
        </h1>
        <p className="text-muted-foreground mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-background font-semibold hover:bg-gray-200 transition-colors w-full"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}

