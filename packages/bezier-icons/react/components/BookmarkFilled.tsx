import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgBookmarkFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M19.007 3.993a2 2 0 0 0-2-1.993H7a2 2 0 0 0-2 2v15.577a1 1 0 0 0 1.64.768l5.396-4.505 5.387 4.498a1 1 0 0 0 1.64-.77l-.056-15.575Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgBookmarkFilled)
