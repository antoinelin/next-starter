import { ComponentMeta, ComponentStory } from '@storybook/react'
import Card from './Card.component'

export default {
  title: 'UI/Card',
  component: Card,
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = args => (
  <div className="flex">
    <Card {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  title: 'Documentation',
  description: 'Find in-depth information about Next.js features and API.',
  link: 'https://nextjs.org/docs',
}
