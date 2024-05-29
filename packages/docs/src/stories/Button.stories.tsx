import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@gabrielcaputo-ui/react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Enviar',
    size: 'small',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
  },
}
