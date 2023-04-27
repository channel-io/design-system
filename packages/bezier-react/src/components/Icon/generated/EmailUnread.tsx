import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgEmailUnread')
function SvgEmailUnread(props: SVGProps<SVGSVGElement>) {
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
        d="M15.6 4c.817 0 1.485 0 2.045.021a4.508 4.508 0 0 0-1.39 1.98L15.6 6H8.4c-1.153 0-1.898.002-2.464.048-.544.044-.745.12-.844.17a2 2 0 0 0-.874.874c-.05.099-.126.3-.17.844-.022.268-.034.577-.04.95l7.545 3.772a1 1 0 0 0 .894 0l4.584-2.291a4.512 4.512 0 0 0 1.825 1.323l-5.514 2.757a3 3 0 0 1-2.684 0L4 11.118V13.6c0 1.153.002 1.898.048 2.464.044.544.12.745.17.844a2 2 0 0 0 .874.874c.099.05.3.126.844.17.566.046 1.31.048 2.464.048h7.2c1.153 0 1.898-.002 2.464-.048.544-.044.745-.12.844-.17a2 2 0 0 0 .874-.874c.05-.099.126-.3.17-.844.046-.566.048-1.31.048-2.464v-1.627a4.537 4.537 0 0 0 2-.23V13.6c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C18.96 20 17.84 20 15.6 20H8.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C2 16.96 2 15.84 2 13.6v-3.2a212.995 212.995 0 0 1 .002-.96c.008-1.62.065-2.532.434-3.256a4 4 0 0 1 1.748-1.748C5.04 4 6.16 4 8.4 4h7.2Zm4.9 6a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgEmailUnread)
