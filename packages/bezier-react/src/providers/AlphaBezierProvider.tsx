import React, { useEffect } from 'react'

import {
  type ThemeName,
  TokenProvider,
} from '~/src/hooks/useToken'
import { document } from '~/src/utils/domUtils'

interface AlphaBezierProviderProps {
  children: React.ReactNode
  themeName?: ThemeName
}

function AlphaBezierProvider({
  children,
  themeName = 'light',
}: AlphaBezierProviderProps) {
  useEffect(function updateThemeDataAttribute() {
    const root = document.documentElement
    // TODO: Change data attribute constant to import from bezier-tokens
    root.setAttribute('data-bezier-theme', themeName)
    return function cleanup() {
      root.removeAttribute('data-bezier-theme')
    }
  }, [themeName])

  return (
    <TokenProvider themeName={themeName}>
      { children }
    </TokenProvider>
  )
}

export default AlphaBezierProvider
