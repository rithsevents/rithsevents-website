import React from "react";
import { cn } from "../lib/utils";

interface LogoProps {
  className?: string;
  isLight?: boolean;
  forceDark?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className,
  isLight = false,
  forceDark = false,
}) => {
  return (
    <div
      className={cn(
        "flex items-center gap-2 group cursor-pointer justify-start",
        className,
      )}
    >
      <div className="relative flex items-center justify-center">
        {/* Abstract Icon: A stylized 'R' that doubles as a sparkle/shining star */}
        <svg
          viewBox="0 0 40 40"
          className="w-12 h-12 md:w-16 md:h-16 transition-transform duration-500 group-hover:rotate-12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main diamond/sparkle shape */}
          <path
            d="M20 2L24.5 15.5L38 20L24.5 24.5L20 38L15.5 24.5L2 20L15.5 15.5L20 2Z"
            fill="currentColor"
            className="text-gold"
          />
          {/* Inner accent petal */}
          <path
            d="M20 10L22 18L30 20L22 22L20 30L18 22L10 20L18 18L20 10Z"
            fill="white"
            fillOpacity="0.4"
          />
          {/* Subtle glow ring */}
          <circle
            cx="20"
            cy="20"
            r="18"
            stroke="currentColor"
            strokeOpacity="0.2"
            strokeWidth="1"
            className="text-gold"
          />
        </svg>
      </div>

      <div className="flex flex-col items-start leading-none">
        <span
          className={cn(
            "text-3xl md:text-5xl font-serif font-bold tracking-tight transition-colors",
            forceDark
              ? "text-charcoal"
              : isLight
                ? "text-charcoal"
                : "text-white",
          )}
        >
          RITHS
        </span>
        <span className="text-[11px] md:text-base font-sans font-bold text-gold uppercase -mt-1 ml-[2px] md:ml-[3px]">
          Events
        </span>
      </div>
    </div>
  );
};

export default Logo;
