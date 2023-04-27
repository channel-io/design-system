import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgChatForward')
function SvgChatForward(props: SVGProps<SVGSVGElement>) {
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
        d="M13.664 2.135c.113.018.225.039.336.06v2.05A8.423 8.423 0 0 0 11.998 4 7.933 7.933 0 0 0 6.35 6.337c-1.84 1.837-2.659 4.385-2.243 6.99.542 3.385 3.303 6.094 6.716 6.587a7.98 7.98 0 0 0 4.926-.854c.642-.344 1.357-.413 2.015-.194l1.656.552-.552-1.655c-.218-.656-.15-1.372.193-2.016A7.904 7.904 0 0 0 20 12h2v-.193a9.876 9.876 0 0 1-1.175 4.882c-.048.09-.119.267-.06.443l.868 2.603c.18.543.042 1.131-.363 1.535a1.497 1.497 0 0 1-1.535.363l-2.605-.868c-.174-.059-.35.011-.44.06A9.91 9.91 0 0 1 12 22c-.486 0-.975-.035-1.464-.106-4.27-.616-7.726-4.01-8.404-8.25-.519-3.247.503-6.425 2.804-8.722 2.301-2.297 5.48-3.31 8.728-2.787ZM19 8.775V7h-1.1A2.9 2.9 0 0 0 15 9.9v.1a1 1 0 1 1-2 0v-.1A4.9 4.9 0 0 1 17.9 5H19V3.225c0-.645.752-.967 1.191-.512l2.553 2.648c.341.353.341.925 0 1.278l-2.553 2.648c-.44.455-1.191.133-1.191-.512Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgChatForward)
