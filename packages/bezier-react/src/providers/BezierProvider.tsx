import React from 'react'

import {
  type Foundation,
  FoundationProvider,
  GlobalStyle,
  type GlobalStyleProp,
  ThemeVars,
  type ThemeVarsAdditionalType,
} from '~/src/foundation'

import EnableCSSHoudini from '~/src/worklets/EnableCSSHoudini'

import { TooltipProvider } from '~/src/components/Tooltip'

interface BezierProviderProps {
  foundation: Foundation & GlobalStyleProp
  children: React.ReactNode
  themeVarsScope?: ThemeVarsAdditionalType['scope']
}

function BezierProvider({
  foundation,
  children,
  themeVarsScope,
}: BezierProviderProps) {
  EnableCSSHoudini({ smoothCorners: true })

  return (
    <FoundationProvider foundation={foundation}>
      <TooltipProvider>
        <GlobalStyle foundation={foundation} />
        <ThemeVars
          foundation={foundation}
          scope={themeVarsScope}
        />
        { children }
      </TooltipProvider>
    </FoundationProvider>
  )
}

export default BezierProvider
