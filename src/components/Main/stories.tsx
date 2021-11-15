import type { Meta, Story } from '@storybook/react/types-6-0'
import { withKnobs, text } from '@storybook/addon-knobs'

import { Main } from '.'

const sbConfig = {
  title: 'Main',
  component: Main,
  decorators: [withKnobs]
} as Meta

export default sbConfig

export const Basic: Story = () => (
  <Main
    title={text('Title', 'React Avançado')}
    description={text(
      'Description',
      'Typescript, ReactJS, Next.js e Styled Components'
    )}
  />
)
