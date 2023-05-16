import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgChannelsList(props: SVGProps<SVGSVGElement>) {
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
        d="M7 7.5H3.5A.5.5 0 0 1 3 7V3.5a.5.5 0 0 1 .5-.5H7a.5.5 0 0 1 .5.5V7a.5.5 0 0 1-.5.5Zm6.75 0h-3.5a.5.5 0 0 1-.5-.5V3.5a.5.5 0 0 1 .5-.5h3.5a.5.5 0 0 1 .5.5V7a.5.5 0 0 1-.5.5Zm3.25 0h3.5A.5.5 0 0 0 21 7V3.5a.5.5 0 0 0-.5-.5H17a.5.5 0 0 0-.5.5V7a.5.5 0 0 0 .5.5ZM7 14.25H3.5a.5.5 0 0 1-.5-.5v-3.5a.5.5 0 0 1 .5-.5H7a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-.5.5Zm3.25 0h3.5a.5.5 0 0 0 .5-.5v-3.5a.5.5 0 0 0-.5-.5h-3.5a.5.5 0 0 0-.5.5v3.5a.5.5 0 0 0 .5.5Zm10.25 0H17a.5.5 0 0 1-.5-.5v-3.5a.5.5 0 0 1 .5-.5h3.5a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-.5.5ZM3.5 21H7a.5.5 0 0 0 .5-.5V17a.5.5 0 0 0-.5-.5H3.5a.5.5 0 0 0-.5.5v3.5a.5.5 0 0 0 .5.5Zm10.25 0h-3.5a.5.5 0 0 1-.5-.5V17a.5.5 0 0 1 .5-.5h3.5a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-.5.5ZM17 21h3.5a.5.5 0 0 0 .5-.5V17a.5.5 0 0 0-.5-.5H17a.5.5 0 0 0-.5.5v3.5a.5.5 0 0 0 .5.5Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgChannelsList)
