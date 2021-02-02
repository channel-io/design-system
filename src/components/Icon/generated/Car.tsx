import React from 'react'

function SvgCar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <g fill="currentColor">
        <path
          fill="currentColor"
          d="M5 13.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM17.5 12a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.962 3a5 5 0 014.814 3.646l.968 3.443A3.989 3.989 0 0122 13v4a1 1 0 01-1 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2H7v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2a1 1 0 01-1-1v-4c0-1.147.483-2.181 1.256-2.91l.968-3.444A5 5 0 019.038 3h5.924zm3.398 6l-.51-1.812a3 3 0 00-2.706-2.183L14.963 5H9.038a3 3 0 00-2.834 2.014l-.054.174L5.639 9H18.36zM6 11a2 2 0 00-1.995 1.85L4 13v3h16v-3a2 2 0 00-1.85-1.995L18 11H6z"
        />
      </g>
    </svg>
  )
}

export default SvgCar
