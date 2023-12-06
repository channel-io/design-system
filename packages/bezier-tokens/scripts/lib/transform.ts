import type {
  Named,
  Transform,
} from 'style-dictionary'

import {
  extractNumber,
  toCSSDimension,
} from './utils'

type CustomTransform = Named<Transform<unknown>>

export const customFontRem: CustomTransform = {
  name: 'custom/font/rem',
  type: 'value',
  transitive: true,
  matcher: (token) =>
    token.attributes?.category === 'font' && token.type === 'dimension',
  transformer: ({ value }: { value: string }, options) => {
    const extractedNumber = extractNumber(value)
    const isNegative = value.trim().startsWith('-')
    const numberValue =
      parseFloat(extractedNumber ?? '') /
      ((options && options.basePxFontSize) || 16)
    return `${isNegative ? -numberValue : numberValue}rem`
  },
}

export const customFontFamily: CustomTransform = {
  name: 'custom/font/family',
  type: 'value',
  transitive: true,
  matcher: (token) => token.type === 'fontFamily',
  transformer: ({ value }: { value: string[] }) =>
    /**
     * @see {@link https://stackoverflow.com/questions/13751412/why-would-font-names-need-quotes}
     */
    value.map((fontFamily) => `'${fontFamily}'`).join(', '),
}

export const customCubicBezier: CustomTransform = {
  name: 'custom/cubicBezier',
  type: 'value',
  transitive: true,
  matcher: (token) => token.type === 'cubicBezier',
  transformer: ({
    value: [x1, y1, x2, y2],
  }: {
    value: [number, number, number, number]
  }) => `cubic-bezier(${x1}, ${y1}, ${x2}, ${y2})`,
}

export const customShadow: CustomTransform = {
  name: 'custom/css/shadow',
  type: 'value',
  transitive: true,
  matcher: (token) => token.type === 'shadow',
  transformer: ({ value }) => {
    function transform(shadow?: {
      offsetX?: string
      offsetY?: string
      blur?: string
      spread?: string
      color: string
      type: 'dropShadow' | 'innerShadow'
    }) {
      if (typeof shadow !== 'object') {
        return shadow
      }
      const { offsetX, offsetY, blur, spread, color, type } = shadow
      return `${type === 'innerShadow' ? 'inset ' : ''}${
        offsetX ? toCSSDimension(offsetX) : 0
      } ${offsetY ? toCSSDimension(offsetY) : 0} ${
        blur ? toCSSDimension(blur) : 0
      }${spread ? ` ${toCSSDimension(spread)} ` : ' '}${
        color || 'rgba(0, 0, 0, 1)'
      }`.trim()
    }

    return Array.isArray(value)
      ? value.map((v) => transform(v)).join(', ')
      : transform(value)
  },
}

export const customTransition: CustomTransform = {
  name: 'custom/css/transition',
  type: 'value',
  transitive: true,
  matcher: (token) => token.type === 'transition',
  transformer: ({
    value: { duration, timingFunction, delay },
  }: {
    value: {
      duration: string
      timingFunction?: string
      delay?: string
    }
  }) => `${`${duration} ` || ''}${timingFunction || ''}${delay || ''}`.trim(),
}
