import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgArrowLeftCircleFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M2 12C2 6.478 6.477 2 12 2s10 4.478 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12Zm4.293-.707 5-5 1.414 1.414L9.414 11H18v2H9.414l3.293 3.293-1.414 1.414-5-5a1 1 0 0 1 0-1.414Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgArrowLeftCircleFilled)
