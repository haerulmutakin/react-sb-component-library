import React from 'react';
import { Story, Meta } from '@storybook/react';
import { FancyButton, FancyButtonProps } from './FancyButton';

export default {
    title: 'Button',
    component: FancyButton
} as Meta;

const Template: Story<FancyButtonProps> = (args) => <FancyButton {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    title: 'Basic',
    variant: 'primary',
    size: 'medium',
    rounded: false
}

export const Small = Template.bind({});
Small.args = {
    title: 'Small',
    variant: 'primary',
    size: 'small',
    rounded: false
}

export const Large = Template.bind({});
Large.args = {
    title: 'Large',
    variant: 'primary',
    size: 'large',
    rounded: false
}

const buttonClicked = () => {
    console.log('hi there');
}

export const Rounded = Template.bind({});
Rounded.args = {
    title: 'Medium',
    variant: 'primary',
    size: 'medium',
    rounded: true,
    onClick: buttonClicked
}