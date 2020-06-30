import React from 'react'

function SvgClock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 20.048c4.438 0 8.049-3.611 8.049-8.049 0-4.437-3.611-8.048-8.049-8.048-4.438 0-8.049 3.611-8.049 8.048 0 4.438 3.611 8.049 8.049 8.049zM12 2c5.515 0 10 4.484 10 9.999 0 5.515-4.485 10-10 10s-10-4.485-10-10S6.485 2 12 2zm1 4h-2v6.539l4.618 2.364.912-1.78L13 11.316V6z"
      />
    </svg>
  )
}

export default SvgClock
