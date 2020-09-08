import React from 'react'

function SvgColumn(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M6.718 5c.446 0 .608.046.77.134a.909.909 0 01.379.378c.087.163.133.324.133.77v11.436c0 .446-.046.607-.133.77a.912.912 0 01-.378.378c-.163.088-.325.134-.77.134H3.281c-.446 0-.607-.046-.77-.134a.906.906 0 01-.378-.378c-.087-.163-.134-.324-.134-.77V6.282c0-.446.047-.607.134-.77a.906.906 0 01.378-.378c.163-.088.324-.134.77-.134h3.436zm7 0c.446 0 .607.046.77.134a.906.906 0 01.378.378c.088.163.134.324.134.77v11.436c0 .446-.046.607-.134.77a.906.906 0 01-.378.378c-.163.088-.324.134-.77.134h-3.436c-.446 0-.607-.046-.77-.134a.906.906 0 01-.378-.378c-.088-.163-.134-.324-.134-.77V6.282c0-.446.046-.607.134-.77a.906.906 0 01.378-.378c.163-.088.324-.134.77-.134h3.436zm7 0c.446 0 .607.046.77.134a.906.906 0 01.378.378c.088.163.134.324.134.77v11.436c0 .446-.046.607-.134.77a.906.906 0 01-.378.378c-.163.088-.324.134-.77.134h-3.436c-.446 0-.607-.046-.77-.134a.906.906 0 01-.378-.378c-.088-.163-.134-.324-.134-.77V6.282c0-.446.046-.607.134-.77a.906.906 0 01.378-.378c.163-.088.324-.134.77-.134h3.436zM6 7H4v10h2V7zm7 0h-2v10h2V7zm7 0h-2v10h2V7z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default SvgColumn
