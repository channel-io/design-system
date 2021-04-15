/* External dependencies */
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { noop } from 'lodash-es'

/* Internal dependencies */
import { ToastControllerProps } from './Toast.types'
import { initPosition } from './utils'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class Timer {
  timerId!: number

  start: number

  remaining: number

  onDismiss: typeof noop

  constructor(onDismiss: typeof noop, autoDismissTimeout: number) {
    this.start = autoDismissTimeout
    this.remaining = autoDismissTimeout
    this.onDismiss = onDismiss
  }

  clear = () => {
    clearTimeout(this.timerId)
  }

  pause = () => {
    clearTimeout(this.timerId)
    this.remaining -= Date.now() - this.start
  }

  resume = () => {
    this.start = Date.now()
    clearTimeout(this.timerId)
    this.timerId = setTimeout(this.onDismiss, this.remaining)
  }
}

function ToastController({
  autoDismissTimeout,
  transitionDuration,
  autoDismiss,
  placement,
  component: ToastElement,
  id,
  onDismiss,
  ...props
}: ToastControllerProps) {
  const [positionX, setPositionX] = useState(initPosition(placement, true))
  const [positionY, setPositionY] = useState(initPosition(placement, false))

  const handleDismiss = useCallback(() => {
    setPositionX(initPosition(placement, true))
    setPositionY(initPosition(placement, false))
    setTimeout(onDismiss, transitionDuration)
  }, [
    onDismiss,
    placement,
    transitionDuration,
  ])

  const timer = useMemo(() => new Timer(handleDismiss, autoDismissTimeout), [
    autoDismissTimeout,
    handleDismiss,
  ])

  const handleMouseEnter = useCallback(() => {
    timer.pause()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleMouseLeave = useCallback(() => {
    if (autoDismiss) {
      timer.resume()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const startTimer = useCallback(() => {
    timer.resume()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const clearTimer = useCallback(() => {
    if (autoDismiss) {
      timer.clear()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setPositionX('0')
    setPositionY('0')
    if (autoDismiss) {
      startTimer()
    }
    return clearTimer
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ToastElement
      key={id}
      transitionDuration={transitionDuration}
      onDismiss={handleDismiss}
      {...props}
      positionX={positionX}
      positionY={positionY}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  )
}

export default React.memo(ToastController)
