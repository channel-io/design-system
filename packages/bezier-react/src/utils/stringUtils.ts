/* Internal dependencies */
import {
  isNumber,
  isString,
  isEmpty,
} from 'Utils/typeUtils'

export function mergeClassNames(className?: string, ...otherClassNames: Array<string | undefined>): string | undefined {
  if (!isEmpty(className) || !isEmpty(otherClassNames)) {
    const result: string[] = []
    const classNames = [className, ...otherClassNames]
    classNames.map((cn) => cn?.trim() ?? '').forEach((cn) => result.push(cn))
    
    const joinedResult = result.filter((cn) => !isEmpty(cn)).join(' ')
    if (!isEmpty(joinedResult)) { return joinedResult }
  }
  return undefined
}

const reUnescapedHtml = /[&<>"]/g
const reHasUnescapedHtml = RegExp(reUnescapedHtml.source)
const htmlEscapes = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
}

export function hasEscapeTags(str: string): boolean {
  return reHasUnescapedHtml.test(str)
}

export function escapeTags(str: string): string {
  if (!isString(str)) { return str }

  if (hasEscapeTags(str)) {
    return str.replace(reUnescapedHtml, (chr) => htmlEscapes[chr])
  }

  return str
}

const htmlUnescapes = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
}

const reEscapedHtml = /&(?:amp|lt|gt|quot);/g
const reHasEscapedHtml = RegExp(reEscapedHtml.source)

export function unescapeTags(str: string): string {
  if (!isString(str)) { return str }

  return (
    reHasEscapedHtml.test(str) ?
      str.replace(reEscapedHtml, (entity) => htmlUnescapes[entity]) : str
  )
}

export function isNumberString(value?: any) {
  if (isNumber(value)) { return true }
  if (isString(value)) { return /^(?:-|\+|)?\d+(?:,\d{3})*(?:\.\d+)?$/.test(value) }
  return false
}
