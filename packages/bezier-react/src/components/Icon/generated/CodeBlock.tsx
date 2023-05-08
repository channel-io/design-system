import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgCodeBlock')
function SvgCodeBlock(props: SVGProps<SVGSVGElement>) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.414 3.906a1 1 0 0 0-1.828-.812l-4 9a1 1 0 1 0 1.828.812l4-9Zm-5.707.801a1 1 0 0 0-1.414-1.414l-2 2a1 1 0 0 0 0 1.414l2 2a1 1 0 1 0 1.414-1.414L11.414 6l1.293-1.293Zm5.586 2.586a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414-1.414L19.586 10l-1.293-1.293a1 1 0 0 1 0-1.414ZM7.879 5.06 8 5.052V3.048c-.98.06-1.676.194-2.27.497A5 5 0 0 0 3.545 5.73C3 6.8 3 8.2 3 11v2c0 2.8 0 4.2.545 5.27a5 5 0 0 0 2.185 2.185C6.8 21 8.2 21 11 21h2c2.8 0 4.2 0 5.27-.545a5 5 0 0 0 2.185-2.185c.396-.778.505-1.73.534-3.27h-2c-.009.431-.024.798-.05 1.121-.058.71-.161 1.035-.266 1.241a3 3 0 0 1-1.311 1.311c-.206.105-.53.208-1.24.266-.734.06-1.689.061-3.122.061h-2c-1.433 0-2.388-.002-3.121-.061-.71-.058-1.035-.161-1.241-.266a3 3 0 0 1-1.311-1.311c-.105-.206-.208-.53-.266-1.24C5.001 15.387 5 14.432 5 13v-2c0-1.433.002-2.388.061-3.121.058-.71.161-1.035.266-1.241a3 3 0 0 1 1.311-1.311c.206-.105.53-.208 1.24-.266Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgCodeBlock)
