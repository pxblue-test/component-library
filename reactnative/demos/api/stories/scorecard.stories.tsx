import {withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
export const stories = storiesOf('API|Scorecard', module);
const markdown = require('./../../../docs/scorecard.md');

stories.addDecorator(withKnobs);
stories.addParameters({
   notes: { markdown },
});

stories.add('Documentation', () => <></>);
