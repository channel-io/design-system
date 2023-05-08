import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgHear')
function SvgHear(props: SVGProps<SVGSVGElement>) {
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
        d="M16.782 8.463a7.29 7.29 0 0 0-3.757-5.407 7.382 7.382 0 0 0-7.87.525L3.408 4.86l1.183 1.614 1.744-1.28a5.376 5.376 0 0 1 5.731-.382 5.312 5.312 0 0 1 2.736 3.936 5.315 5.315 0 0 1-1.514 4.55 4.366 4.366 0 0 0-1.288 3.109V17c0 .94-.449 1.836-1.2 2.401a3.018 3.018 0 0 1-3.6 0A3.016 3.016 0 0 1 6.001 17v-1h-2v1a5.02 5.02 0 0 0 2 4 4.996 4.996 0 0 0 3 .993A5.003 5.003 0 0 0 12.002 21a5.027 5.027 0 0 0 2-4v-.593c0-.64.248-1.242.701-1.695a7.294 7.294 0 0 0 2.08-6.249Z"
      />
      <path
        fill="currentColor"
        d="M20.741 7.893a11.26 11.26 0 0 0-1.92-4.89L17.18 4.15a9.278 9.278 0 0 1 1.581 4.028 9.291 9.291 0 0 1-2.485 7.784l1.447 1.38a11.278 11.278 0 0 0 3.017-9.45ZM10.418 8.313a1.514 1.514 0 0 0-1.333-.26 1.478 1.478 0 0 0-1.03 1.03c-.125.485-.032.958.26 1.334.286.37.72.583 1.186.583v2c-1.09 0-2.1-.495-2.768-1.358a3.518 3.518 0 0 1-.614-3.058 3.484 3.484 0 0 1 2.466-2.466 3.506 3.506 0 0 1 3.058.614A3.479 3.479 0 0 1 13.001 9.5h-2c0-.467-.212-.9-.583-1.187Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgHear)
