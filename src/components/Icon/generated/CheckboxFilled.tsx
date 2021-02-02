import React from 'react'

function SvgCheckboxFilled(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4zm-.414 9.14L8 10.724l2.86 2.861L17 7.446l1.414 1.414-7.554 7.555-4.274-4.276z"
      />
    </svg>
  )
}

export default SvgCheckboxFilled
