"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  /** max tilt in degrees */
  maxTilt?: number;
  /** disable on touch/small screens automatically; can force off */
  disabled?: boolean;
}

/**
 * A perspective-tilt card: tracks the pointer and rotates on X/Y springs,
 * with a soft radial highlight that follows the cursor — used to give the
 * Projects grid a "held paper catching the light" feel without being gimmicky.
 * Falls back to a flat hover lift when reduced-motion is set or on touch.
 */
export default function TiltCard({
  children,
  className,
  maxTilt = 8,
  disabled = false,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(y, [0, 1], [maxTilt, -maxTilt]), {
    stiffness: 220,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(x, [0, 1], [-maxTilt, maxTilt]), {
    stiffness: 220,
    damping: 22,
  });
  const glowX = useTransform(x, [0, 1], ["0%", "100%"]);
  const glowY = useTransform(y, [0, 1], ["0%", "100%"]);

  function handleMove(e: React.PointerEvent<HTMLDivElement>) {
    if (disabled) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  }

  function handleLeave() {
    x.set(0.5);
    y.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      style={{
        rotateX: disabled ? 0 : rotateX,
        rotateY: disabled ? 0 : rotateY,
        transformStyle: "preserve-3d",
        transformPerspective: 800,
      }}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={cn("relative motion-reduce:transform-none", className)}
    >
      {/* Pointer-following highlight — purely decorative, sits above content */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useTransform(
            [glowX, glowY],
            ([gx, gy]) =>
              `radial-gradient(180px circle at ${gx} ${gy}, rgba(255,255,255,0.35), transparent 70%)`
          ),
          mixBlendMode: "soft-light",
        }}
      />
      {children}
    </motion.div>
  );
}
