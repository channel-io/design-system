export function isFunction(value: unknown): value is (...args: any[]) => any {
  return typeof value === 'function'
}

export function isNil(value: unknown): value is null | undefined {
  return value == null
}

export function isObject(value: unknown): value is object {
  const type = typeof value
  return value != null && (type === 'object' || type === 'function')
}
