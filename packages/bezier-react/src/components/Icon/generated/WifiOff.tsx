import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgWifiOff')
function SvgWifiOff(props: SVGProps<SVGSVGElement>) {
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
        d="M3.814 1.807a1 1 0 0 0 0 1.414l15.97 15.971a1 1 0 0 0 1.415-1.414l-3.643-3.643.943-.995c.21-.22.2-.57-.03-.767a9.96 9.96 0 0 0-4.93-2.255l-2.105-2.105a11.953 11.953 0 0 1 8.448 2.94.517.517 0 0 0 .715-.027l1.341-1.416c.209-.22.2-.57-.028-.77A14.943 14.943 0 0 0 12 5c-1.109 0-2.19.12-3.23.349L5.228 1.807a1 1 0 0 0-1.414 0ZM2.09 8.74a15.02 15.02 0 0 1 3.516-2.313L7.898 8.72c-1.4.51-2.68 1.272-3.781 2.233a.517.517 0 0 1-.714-.027L2.062 9.51a.535.535 0 0 1 .028-.77ZM5.532 12.373a9.972 9.972 0 0 1 3.963-2.057l2.686 2.686a6.971 6.971 0 0 0-4.62 1.585.529.529 0 0 1-.72-.032l-1.34-1.415a.527.527 0 0 1 .03-.767ZM8.94 16.77c-.21-.221-.202-.572.04-.755A4.978 4.978 0 0 1 12 15c1.134 0 2.18.378 3.02 1.015.242.183.25.534.04.754l-2.697 2.848a.5.5 0 0 1-.726 0l-2.698-2.848Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgWifiOff)
