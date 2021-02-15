import React from 'react'

function SvgPersonBlocked(props: React.SVGProps<SVGSVGElement>) {
  return (
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
        d="M9.484 11a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM11 17c0-1.672.69-3.186 1.796-4.274A7.937 7.937 0 009.484 12a8 8 0 00-7.983 7.476.503.503 0 00.506.524h9.805A5.958 5.958 0 0111 17zm4.715 2.7c.391.186.823.3 1.285.3 1.654 0 3-1.346 3-3 0-.462-.114-.894-.3-1.285L15.714 19.7zm2.57-5.399a2.954 2.954 0 00-1.285-.3c-1.654 0-3 1.345-3 3 0 .461.113.893.301 1.284l3.984-3.984zM12 17.001a5 5 0 1110 0 5 5 0 01-10 0z"
      />
    </svg>
  )
}

export default SvgPersonBlocked
