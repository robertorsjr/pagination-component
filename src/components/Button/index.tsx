import {
  Button as ButtonChakra,
  ButtonProps as ButtonPropsChakra
} from '@chakra-ui/react'
import { ReactNode } from 'react'

interface ButtonProps extends ButtonPropsChakra {
  color?: string
  children: ReactNode
}

const Button = ({ color = 'primary', children, ...rest }: ButtonProps) => (
  <ButtonChakra colorScheme={color} _hover={{ opacity: '70%' }} {...rest}>
    {children}
  </ButtonChakra>
)

export default Button
