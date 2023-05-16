import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgRecord(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill="currentColor" d="M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16 5H8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3ZM8 3a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5H8Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgRecord)
