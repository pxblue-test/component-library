import {withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import {wrapMd} from "./wrapper";
export const stories = storiesOf('API|Empty State', module);

stories.addDecorator(withKnobs);
stories.addParameters({
   notes: { markdown: require('./../../../docs/emptyState.md') },
});
const input = require('./../../../docs/emptyState.md').default;

stories.add('Documentation', () => wrapMd(input));
