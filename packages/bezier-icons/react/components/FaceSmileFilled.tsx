import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgFaceSmileFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M2 12C2 6.478 6.477 2 12 2c5.522 0 10 4.478 10 10s-4.478 10-10 10C6.477 22 2 17.522 2 12Zm9.99 5.708h.004c4.317 0 5.506-3.459 5.554-3.606a1 1 0 1 0-1.899-.625v.001c-.02.057-.791 2.23-3.655 2.23h-.003c-2.823-.002-3.608-2.14-3.643-2.239a.999.999 0 0 0-1.897.632c.048.147 1.232 3.603 5.54 3.607Zm-3.204-5.883c-.845 0-1.199-.61-1.199-2.105s.354-2.106 1.2-2.106c.844 0 1.197.611 1.197 2.106 0 1.495-.353 2.105-1.198 2.105Zm5.229-2.105c0 1.495.353 2.105 1.199 2.105.845 0 1.198-.61 1.198-2.105s-.353-2.106-1.198-2.106c-.846 0-1.199.611-1.199 2.106Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgFaceSmileFilled)
