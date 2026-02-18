"use client";

import { useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  IconCheck,
  IconX,
  IconInfoCircle,
  IconAlertTriangle,
} from "@tabler/icons-react";

export type SnackbarType = "success" | "error" | "info" | "warning";

interface SnackbarProps {
  message: string;
  type: SnackbarType;
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

export const Snackbar = ({
  message,
  type,
  isVisible,
  onClose,
  duration = 5000,
}: SnackbarProps) => {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  const icons = {
    success: <IconCheck className="w-5 h-5" />,
    error: <IconX className="w-5 h-5" />,
    info: <IconInfoCircle className="w-5 h-5" />,
    warning: <IconAlertTriangle className="w-5 h-5" />,
  };

  const styles = {
    success: "bg-gradient-to-r from-green-500 to-emerald-600 text-white",
    error: "bg-gradient-to-r from-red-500 to-rose-600 text-white",
    info: "bg-gradient-to-r from-blue-500 to-cyan-600 text-white",
    warning: "bg-gradient-to-r from-yellow-500 to-orange-600 text-white",
  };

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[9999] animate-slide-down">
      <div
        className={cn(
          "flex items-center gap-3 px-6 py-4 rounded-lg shadow-2xl backdrop-blur-sm min-w-[320px] max-w-md",
          styles[type],
        )}
      >
        <div className="flex-shrink-0">{icons[type]}</div>
        <p className="flex-1 text-sm font-medium">{message}</p>
        <button
          onClick={onClose}
          className="flex-shrink-0 hover:opacity-80 transition-opacity"
          aria-label="Close"
        >
          <IconX className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
