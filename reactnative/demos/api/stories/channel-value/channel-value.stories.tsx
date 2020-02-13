import {withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';

export const stories = storiesOf('API|Channel Value', module);
import {wrapImg} from "../wrapper";
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

stories.add('with value', () => wrapImg(withValue));
stories.add('with units', () => wrapImg(withUnits));
stories.add('with icon', () => wrapImg(withIcon));
stories.add('with extraLarge font size', () => wrapImg(withExtraLargeFont));
stories.add('with all props', () => wrapImg(withAllProps));
stories.add('with overridden theme', () => wrapImg(withOverridenTheme));
