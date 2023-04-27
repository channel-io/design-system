import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgEmail')
function SvgEmail(props: SVGProps<SVGSVGElement>) {
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
        d="M2.002 9.44a.994.994 0 0 0 0 .11C2 9.814 2 10.097 2 10.4v3.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C5.04 20 6.16 20 8.4 20h7.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C22 16.96 22 15.84 22 13.6v-3.2l-.001-.85a1.009 1.009 0 0 0 0-.111c-.01-1.619-.066-2.531-.435-3.255a4 4 0 0 0-1.748-1.748C18.96 4 17.84 4 15.6 4H8.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748c-.369.724-.426 1.636-.434 3.255ZM8.4 6h7.2c1.153 0 1.898.002 2.464.048.544.044.745.12.844.17a2 2 0 0 1 .874.874c.05.099.126.3.17.844.022.268.034.577.04.95l-7.545 3.772a1 1 0 0 1-.894 0L4.008 8.886c.006-.373.018-.682.04-.95.044-.544.12-.745.17-.844a2 2 0 0 1 .874-.874c.099-.05.3-.126.844-.17C6.502 6.002 7.246 6 8.4 6ZM20 11.118V13.6c0 1.153-.002 1.898-.048 2.464-.044.544-.12.745-.17.844a2 2 0 0 1-.874.874c-.099.05-.3.126-.844.17-.566.046-1.31.048-2.464.048H8.4c-1.153 0-1.898-.002-2.464-.048-.544-.044-.745-.12-.844-.17a2 2 0 0 1-.874-.874c-.05-.099-.126-.3-.17-.844C4.002 15.498 4 14.754 4 13.6v-2.482l6.658 3.33a3 3 0 0 0 2.684 0L20 11.117Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgEmail)
