import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgChatCancel')
function SvgChatCancel(props: SVGProps<SVGSVGElement>) {
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
        d="M20.825 16.69c-.047.09-.118.265-.06.442l.868 2.603a1.492 1.492 0 0 1-.362 1.535 1.498 1.498 0 0 1-1.535.363l-2.605-.868c-.174-.058-.35.012-.44.06A9.914 9.914 0 0 1 12.001 22c-.486 0-.975-.035-1.465-.106-4.27-.616-7.726-4.01-8.404-8.25-.519-3.247.504-6.426 2.804-8.722 2.302-2.297 5.485-3.31 8.728-2.787 4.054.656 7.321 3.8 8.131 7.825.47 2.335.135 4.662-.97 6.73Zm-1.957 1.074c-.219-.657-.15-1.373.193-2.017.883-1.653 1.151-3.518.773-5.393a7.945 7.945 0 0 0-6.489-6.245A8.433 8.433 0 0 0 12 4 7.932 7.932 0 0 0 6.35 6.338c-1.842 1.837-2.659 4.385-2.243 6.99.541 3.385 3.303 6.094 6.715 6.587a7.973 7.973 0 0 0 4.926-.855c.644-.343 1.358-.412 2.016-.193l1.655.552-.55-1.655Zm-4.04-10.007 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586l2.828-2.829Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgChatCancel)
