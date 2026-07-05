import React from 'react'

interface LogoIconProps {
  size?: number
  className?: string
}

export function LogoIcon({ size = 32, className = '' }: LogoIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="32" height="32" rx="6" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
      <path
        d="M8 12L16 8L24 12V20L16 24L8 20V12Z"
        fill="none"
        stroke="white"
        strokeWidth="1.5"
      />
      <circle cx="16" cy="14" r="2" fill="white" />
      <path
        d="M12 18L16 16L20 18"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}
