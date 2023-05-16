import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgTriangleUpCircleFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M11.952 8.168c.085 0 .17.036.23.108l4.36 5.232a.3.3 0 0 1-.231.493H7.59a.3.3 0 0 1-.23-.493l4.36-5.232a.297.297 0 0 1 .23-.108ZM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgTriangleUpCircleFilled)
