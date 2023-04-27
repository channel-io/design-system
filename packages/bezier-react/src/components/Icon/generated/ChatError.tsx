import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgChatError')
function SvgChatError(props: SVGProps<SVGSVGElement>) {
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
        d="M19.061 15.747c-.343.644-.412 1.36-.193 2.017l.551 1.655-1.655-.552c-.658-.219-1.372-.15-2.016.193a7.973 7.973 0 0 1-4.926.855c-3.412-.493-6.174-3.202-6.715-6.588-.416-2.604.401-5.152 2.243-6.989A7.932 7.932 0 0 1 12 4c.443 0 .894.036 1.345.11a7.945 7.945 0 0 1 6.49 6.244c.377 1.875.11 3.74-.774 5.393Zm1.704 1.385c-.058-.177.013-.353.06-.443 1.105-2.067 1.44-4.394.97-6.729-.81-4.025-4.077-7.169-8.13-7.825-3.244-.524-6.427.49-8.729 2.787-2.3 2.296-3.323 5.475-2.804 8.721.678 4.241 4.134 7.635 8.404 8.251.49.071.98.106 1.464.106a9.914 9.914 0 0 0 4.691-1.176c.09-.047.266-.117.44-.059l2.605.868c.54.178 1.13.042 1.535-.363.404-.404.543-.992.362-1.535l-.868-2.603Zm-8.832-1.537a1.322 1.322 0 1 0 .001 2.645 1.322 1.322 0 0 0 0-2.645Zm1.214-9.615-.133 8.007h-2.162L10.72 5.98h2.427Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgChatError)
