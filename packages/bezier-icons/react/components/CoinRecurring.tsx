import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgCoinRecurring(props: SVGProps<SVGSVGElement>) {
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
        d="M21.5 9.25h-5.627a.5.5 0 0 1-.353-.854l2.093-2.093A7.948 7.948 0 0 0 12 4c-4.073 0-7.445 3.06-7.938 7.002C3.993 11.55 3.552 12 3 12s-1.005-.449-.95-.999C2.551 5.954 6.822 2 12 2a9.933 9.933 0 0 1 7.027 2.889l2.119-2.119a.5.5 0 0 1 .854.353V8.75a.5.5 0 0 1-.5.5Zm-19 5.5h5.627a.5.5 0 0 1 .353.854l-2.093 2.093A7.946 7.946 0 0 0 12 20c4.073 0 7.445-3.06 7.938-7.002.069-.548.51-.998 1.062-.998s1.005.449.95.999C21.449 18.045 17.178 22 12 22a9.93 9.93 0 0 1-7.027-2.889L2.854 21.23A.5.5 0 0 1 2 20.877V15.25a.5.5 0 0 1 .5-.5Zm9.992-3.806 1.115.444c1.104.444 1.763 1.187 1.763 2.447 0 1.227-.86 2.32-2.37 2.668V17a1 1 0 1 1-2 0v-.474c-.856-.17-1.7-.56-2.37-1.18l1.21-1.476c.637.54 1.464.912 2.172.912.792 0 1.163-.3 1.163-.779 0-.48-.427-.66-1.107-.944l-.152-.064-1.14-.48c-.935-.37-1.81-1.15-1.81-2.446 0-1.155.802-2.126 2.034-2.514V7a1 1 0 1 1 2 0v.45c.773.15 1.526.515 2.107 1.096L14.039 9.89c-.588-.444-1.14-.684-1.835-.684-.66 0-1.068.264-1.068.744 0 .466.504.662 1.229.946l.127.05Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgCoinRecurring)
