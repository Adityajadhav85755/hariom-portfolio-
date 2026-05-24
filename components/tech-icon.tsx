"use client";

import { useState } from "react";
import Image from "next/image";
import { Code } from "lucide-react";
import { iconMap } from "@/utils/iconMap";

interface TechIconProps {
  logoKey: string;
  name: string;
  className?: string;
}

// Icons that are pure black/dark and need inversion on dark backgrounds
const darkLogoKeys = new Set([
  "nextjs",
  "express",
  "threejs",
  "flask",
  "github",
  "markdown",
  "excel",
]);

export function TechIcon({ logoKey, name, className = "h-5 w-5" }: TechIconProps) {
  const getIconUrl = () => {
    if (logoKey === "nextjs")
      return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg";
    if (logoKey === "tailwindcss")
      return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg";
    if (logoKey === "canva")
      return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg";
    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${logoKey}/${logoKey}-original.svg`;
  };

  const getFallbackUrl = () => {
    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${logoKey}/${logoKey}-plain.svg`;
  };

  const [src, setSrc] = useState(getIconUrl());
  const [usedFallback, setUsedFallback] = useState(false);
  const [imageError, setImageError] = useState(false);

  const getIconComponent = () => {
    const IconComponent = iconMap[logoKey];
    if (IconComponent) {
      return <IconComponent className="h-5 w-5" />;
    }
    return null;
  };

  const iconComponent = getIconComponent();

  if (iconComponent) {
    return <div className={`${className} flex items-center justify-center`}>{iconComponent}</div>;
  }

  if (imageError) {
    return (
      <div
        className={`${className} flex items-center justify-center rounded bg-primary/10 text-primary`}
      >
        <Code className="h-3 w-3" />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={`${name} logo`}
      width={20}
      height={20}
      className={`${className} object-contain ${darkLogoKeys.has(logoKey) ? "dark:invert" : ""}`}
      onError={() => {
        if (!usedFallback) {
          setSrc(getFallbackUrl());
          setUsedFallback(true);
        } else {
          setImageError(true);
        }
      }}
    />
  );
}
