// Small hand-drawn-feeling decorative SVG doodles used across the site
// to echo the collage / sticker aesthetic of the brand references
// (stars, flowers, leaves) without relying on any external image assets.

import type { CSSProperties } from "react"

type DoodleProps = { className?: string; style?: CSSProperties }

export function Star({ className = "" }: DoodleProps) {
  return (
    <svg viewBox="0 0 60 60" fill="none" className={className} aria-hidden="true" focusable="false">
      <path
        d="M30 3 L36 22 L56 22 L40 34 L46 54 L30 42 L14 54 L20 34 L4 22 L24 22 Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function Flower({ className = "" }: DoodleProps) {
  return (
    <svg viewBox="0 0 60 60" fill="none" className={className} aria-hidden="true" focusable="false">
      <g fill="currentColor">
        <circle cx="30" cy="16" r="11" />
        <circle cx="30" cy="44" r="11" />
        <circle cx="16" cy="30" r="11" />
        <circle cx="44" cy="30" r="11" />
      </g>
      <circle cx="30" cy="30" r="8" fill="var(--color-gold)" />
    </svg>
  )
}

export function Leaf({ className = "" }: DoodleProps) {
  return (
    <svg viewBox="0 0 60 60" fill="none" className={className} aria-hidden="true" focusable="false">
      <path
        d="M10 50C10 22 28 8 52 8C52 34 36 50 10 50Z"
        fill="currentColor"
      />
      <path d="M12 48C24 34 34 24 50 10" stroke="var(--color-cream)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function Heart({ className = "" }: DoodleProps) {
  return (
    <svg viewBox="0 0 60 60" fill="none" className={className} aria-hidden="true" focusable="false">
      <path
        d="M30 52C30 52 6 37 6 20C6 10 14 4 22 6C27 7.3 30 12 30 12C30 12 33 7.3 38 6C46 4 54 10 54 20C54 37 30 52 30 52Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function Swirl({ className = "" }: DoodleProps) {
  return (
    <svg viewBox="0 0 100 40" fill="none" className={className} aria-hidden="true" focusable="false">
      <path
        d="M2 20C10 4 22 4 30 20C38 36 50 36 58 20C66 4 78 4 86 20C90 27 94 30 98 30"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Whisk({ className = "" }: DoodleProps) {
  return (
    <svg viewBox="0 0 60 100" fill="none" className={className} aria-hidden="true" focusable="false">
      <path d="M30 4V30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path
        d="M30 30C14 34 8 52 14 68C18 78 24 84 30 96"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M30 30C46 34 52 52 46 68C42 78 36 84 30 96"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M30 30C20 36 18 54 22 68"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M30 30C40 36 42 54 38 68"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

export function Cookie({ className = "" }: DoodleProps) {
  return (
    <svg viewBox="0 0 60 60" fill="none" className={className} aria-hidden="true" focusable="false">
      <circle cx="30" cy="30" r="26" fill="currentColor" />
      <circle cx="20" cy="22" r="3" fill="var(--color-wine)" opacity="0.6" />
      <circle cx="34" cy="18" r="2.4" fill="var(--color-wine)" opacity="0.6" />
      <circle cx="40" cy="32" r="3" fill="var(--color-wine)" opacity="0.6" />
      <circle cx="24" cy="38" r="2.6" fill="var(--color-wine)" opacity="0.6" />
      <circle cx="16" cy="34" r="2" fill="var(--color-wine)" opacity="0.6" />
    </svg>
  )
}

export function Cup({ className = "" }: DoodleProps) {
  return (
    <svg viewBox="0 0 60 60" fill="none" className={className} aria-hidden="true" focusable="false">
      <path
        d="M12 22H42V38C42 45 36.6 50 30 50H24C17.4 50 12 45 12 38V22Z"
        fill="currentColor"
      />
      <path
        d="M42 26H47C50 26 52 28.5 52 31.5C52 34.5 50 37 47 37H42"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M18 16C18 12 22 12 22 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
      <path d="M28 16C28 12 32 12 32 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
    </svg>
  )
}

export function Blob({ className = "", style }: DoodleProps) {
  return (
    <svg viewBox="0 0 200 200" className={className} style={style} aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M45.3,-58.5C58.5,-49.4,68.4,-34.7,71.9,-18.7C75.4,-2.7,72.6,14.5,64.8,29.1C57.1,43.6,44.4,55.6,29.6,62.6C14.8,69.6,-2.1,71.7,-18.5,68.4C-34.9,65.1,-50.8,56.5,-61.2,43.4C-71.6,30.3,-76.5,12.7,-74.9,-4.1C-73.3,-20.9,-65.2,-36.9,-53,-46.9C-40.8,-56.9,-24.4,-60.9,-7.9,-59.5C8.7,-58.1,32.1,-67.6,45.3,-58.5Z"
        transform="translate(100 100)"
      />
    </svg>
  )
}
