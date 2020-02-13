import {withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';

export const stories = storiesOf('Channel Value', module);
import {wrap} from "../wrapper";
const withIcon = require('./with-icon.png');
const withUnits = require('./with-units.png');
const withValue = require('./with-value.png');
const withExtraLargeFont = require('./with-extra-large-font.png');
const withAllProps = require('./with-all-props.png');
const withOverridenTheme = require('./with-overriden-theme.png');

stories.addDecorator(withKnobs);
stories.addParameters({
    notes: { markdown: require('./../../../../docs/channelValue.md') },
});

stories.add('with value', () => wrap(withValue));
stories.add('with units', () => wrap(withUnits));
stories.add('with icon', () => wrap(withIcon));
stories.add('with extraLarge font size', () => wrap(withExtraLargeFont));
stories.add('with all props', () => wrap(withAllProps));
stories.add('with overridden theme', () => wrap(withOverridenTheme));
