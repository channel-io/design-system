import React from 'react'

function SvgPinOff(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.196 7.973l2.077 2.077 1.776-.88 7.513 7.513-.879 1.776 1.977 1.977-1.414 1.414-5.475-5.475-5.92 5.92-1.414-1.414 5.92-5.92-5.575-5.574 1.414-1.414zm.672-6.226l6.018 6.018 2.859-1.416 3.174-3.174 4.637 4.64-3.172 3.173-1.417 2.858 6.286 6.286-1.413 1.414h-.002L2.454 3.161l1.414-1.414z"
      />
    </svg>
  )
}

export default SvgPinOff
