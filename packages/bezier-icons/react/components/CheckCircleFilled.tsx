import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgCheckCircleFilled(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m10.81 16.404-4.155-3.988 1.385-1.443 2.784 2.673 5.651-5.309 1.37 1.457-7.036 6.61ZM12 2C6.486 2 2 6.486 2 12c0 5.513 4.486 10 10 10s10-4.487 10-10c0-5.514-4.486-10-10-10Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgCheckCircleFilled)
