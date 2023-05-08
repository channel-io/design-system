import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgBear')
function SvgBear(props: SVGProps<SVGSVGElement>) {
  const Svg = (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        d="M11 12a1 1 0 1 0 0 2l-.007.117A1 1 0 0 1 10 15l-.117.007A1 1 0 0 0 10 17a2.99 2.99 0 0 0 2-.764c.53.475 1.232.764 2 .764a1 1 0 0 0 .117-1.993L14 15a1 1 0 0 1-.993-.883L13 14a1 1 0 1 0 0-2h-2ZM8.786 12.655c.845 0 1.198-.61 1.198-2.105 0-1.496-.353-2.106-1.198-2.106s-1.199.61-1.199 2.106c0 1.495.354 2.105 1.2 2.105ZM16.412 10.55c0 1.495-.353 2.105-1.198 2.105s-1.199-.61-1.199-2.105c0-1.496.354-2.106 1.199-2.106.845 0 1.198.61 1.198 2.106Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.755 3.007c-.65.04-1.27.235-1.814.563l-.04.025-.276-.105a7.77 7.77 0 0 0-5.261.005l-.265.1-.04-.025A4 4 0 0 0 3 7l.006.228c.047.83.35 1.611.852 2.248l.027.033-1.03 1.951a5.82 5.82 0 0 0-.675 2.72l.004.223a5.821 5.821 0 0 0 5.141 5.558l.244.023.31.309A5.829 5.829 0 0 0 12 22l.272-.006a5.83 5.83 0 0 0 3.85-1.701l.308-.31a5.838 5.838 0 0 0 2.29-.658l.205-.113a5.82 5.82 0 0 0 2.22-7.752L20.114 9.51l.028-.033A4 4 0 0 0 17 3l-.245.007ZM17 5a2 2 0 0 1 1.259 3.554l-.638.518 1.756 3.323a3.82 3.82 0 0 1-3.144 5.598l-.66.02-.866.866a3.829 3.829 0 0 1-5.414 0L8.414 18H8a3.82 3.82 0 0 1-3.377-5.605l1.756-3.323-.638-.518a2 2 0 1 1 2.577-3.058l.504.442.6-.298a5.776 5.776 0 0 1 5.154 0l.602.3.504-.444A1.986 1.986 0 0 1 17 5Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgBear)
