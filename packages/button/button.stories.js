import React from 'react';
import { action } from '@storybook/addon-actions';
import ButtonComponent from './Button.component'
import {text, withKnobs} from '@storybook/addon-knobs';

export default { title: 'Button', decorators: [withKnobs] };
export const withText = () => <ButtonComponent actionClick={action('clicked')} label={text('label', 'Button sample')} click={action('clicked')}/>;