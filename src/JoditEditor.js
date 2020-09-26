import React, { useEffect, useRef, forwardRef, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import {Jodit} from 'jodit'
import 'jodit/build/jodit.min.css'

const JoditEditor = forwardRef(({ value, config, onChange, onBlur, tabIndex }, ref) => {
  const textArea = useRef(null)

  useLayoutEffect(() => {
    if (ref) {
      if (typeof ref === 'function') {
        ref(textArea.current)
      } else {
        ref.current = textArea.current
      }
    }
  }, [textArea])

  useEffect(() => {
    const blurHandler = value => {
      onBlur && onBlur(value)
    }

    const changeHandler = value => {
      onChange && onChange(value)
    }

    textArea.current = new Jodit(textArea.current, config)
    textArea.current.value = value
    textArea.current.events.on('blur', (e) => blurHandler(textArea.current.value, e))
    textArea.current.events.on('change', (e) => changeHandler(textArea.current.value, e))
    textArea.current.workplace.tabIndex = tabIndex || -1

    return () => {
      textArea.current.destruct()
    }
  }, [])
  
  useEffect(() => {
    if (textArea && textArea.current) {
      textArea.current.value = value
    }
  }, [textArea, value])

  return <textarea ref={textArea}></textarea>
})

JoditEditor.propTypes = {
  value: PropTypes.string,
  config: PropTypes.object,
  onChange: PropTypes.func,
  onBlur: PropTypes.func
}

export default JoditEditor
