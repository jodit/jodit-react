import React, { useEffect, useRef, forwardRef, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import Jodit from 'jodit'
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

    const editor = new Jodit(textArea.current, config)
    editor.value = value
    editor.events.on('blur', () => blurHandler(editor.value))
    editor.events.on('change', () => changeHandler(editor.value))
    editor.workplace.tabIndex = tabIndex || -1
    editor.workplace.onfocus = () => {
      editor.selection.focus()
    }

    return () => {
      editor.destruct()
    }
  }, [])

  return <textarea ref={textArea} tabIndex={tabIndex}></textarea>
})

JoditEditor.propTypes = {
  value: PropTypes.string,
  config: PropTypes.object,
  onChange: PropTypes.func,
  onBlur: PropTypes.func
}

export default JoditEditor
