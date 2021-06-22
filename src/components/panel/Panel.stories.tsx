import React from 'react';
import { Story, Meta } from '@storybook/react';
import Panel, { PanelProps } from './Panel';

export default {
    title: 'Panel',
    component: Panel
} as Meta;

const Template: Story<PanelProps> = (args) => <Panel {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    title: 'Basic',
    content: 'Basic Panel'
}