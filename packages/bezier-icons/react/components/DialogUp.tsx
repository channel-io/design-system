import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgDialogUp(props: SVGProps<SVGSVGElement>) {
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
        d="M6 6a1 1 0 0 0-1 1v12a1 1 0 1 1-2 0V7a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a1 1 0 1 1-2 0V7a1 1 0 0 0-1-1H6Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6 8a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgDialogUp)
