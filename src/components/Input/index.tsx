import React, {
  InputHTMLAttributes,
  useRef,
  useState,
  useCallback
} from 'react'

import { Container } from './styles'
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const Input: React.FC<InputProps> = ({ label, ...props }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)
    setIsFilled(!!inputRef.current?.value)
  }, [])

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  return (
    <Container isFilled={isFilled} isFocus={isFocused}>
      <label>{label}</label>
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        ref={inputRef}
        {...props}
      />
      <span />
    </Container>
  )
}

export default Input
