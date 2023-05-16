import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgAtom(props: SVGProps<SVGSVGElement>) {
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
        d="M10.018 18.19a9.908 9.908 0 0 1-1.082.391c-1.88.553-2.889.194-3.3-.217-.411-.412-.77-1.42-.217-3.3.102-.349.233-.711.391-1.082a19.727 19.727 0 0 0 1.947 2.26c.73.73 1.49 1.38 2.261 1.948ZM12 17.128a17.237 17.237 0 0 1-2.828-2.3A17.24 17.24 0 0 1 6.872 12a17.24 17.24 0 0 1 2.3-2.828A17.24 17.24 0 0 1 12 6.872a17.24 17.24 0 0 1 2.828 2.3 17.242 17.242 0 0 1 2.3 2.828 17.241 17.241 0 0 1-2.3 2.828 17.236 17.236 0 0 1-2.828 2.3Zm0 2.323c-3.135 1.694-6.171 1.934-7.778.327-1.607-1.607-1.368-4.643.327-7.778-1.695-3.135-1.934-6.171-.327-7.778C5.829 2.615 8.865 2.854 12 4.549c3.135-1.695 6.171-1.934 7.778-.327 1.607 1.607 1.367 4.643-.327 7.778 1.694 3.135 1.934 6.171.327 7.778-1.607 1.607-4.643 1.367-7.778-.327Zm6.19-5.47c.158.372.288.734.391 1.083.553 1.88.194 2.889-.217 3.3-.412.411-1.42.77-3.3.217a9.907 9.907 0 0 1-1.082-.391 19.722 19.722 0 0 0 2.26-1.947c.73-.73 1.38-1.49 1.948-2.261Zm0-3.963c.158-.37.288-.733.391-1.082.553-1.88.194-2.889-.217-3.3-.412-.411-1.42-.77-3.3-.217a9.89 9.89 0 0 0-1.082.391 19.726 19.726 0 0 1 2.26 1.947c.73.73 1.38 1.49 1.948 2.261ZM10.018 5.81a9.893 9.893 0 0 0-1.082-.391c-1.88-.553-2.889-.194-3.3.217-.411.412-.77 1.42-.217 3.3.102.349.233.711.391 1.082a19.727 19.727 0 0 1 1.947-2.26c.73-.73 1.49-1.38 2.261-1.948ZM14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgAtom)
