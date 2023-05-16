import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgTriangleLeftCircle(props: SVGProps<SVGSVGElement>) {
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
        d="M4 12c0 4.411 3.59 8 8 8 4.411 0 8-3.589 8-8 0-4.41-3.589-8-8-8-4.41 0-8 3.59-8 8Zm8 10C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10ZM8.4 11.78l5.23-4.359a.3.3 0 0 1 .492.23v8.72a.3.3 0 0 1-.492.23l-5.23-4.36a.3.3 0 0 1 0-.461Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgTriangleLeftCircle)
