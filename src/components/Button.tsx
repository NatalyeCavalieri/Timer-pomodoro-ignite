import { ButtonContainer, ButtonVariant } from './Button.styles'

interface ButtonProps {
  variant?: ButtonVariant
}

export function Button({ variant = 'danger' }: ButtonProps) {
  return <ButtonContainer variant={variant}> test </ButtonContainer>
}
