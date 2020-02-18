import {withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
export const stories = storiesOf('API|Empty State', module);

stories.addDecorator(withKnobs);
stories.addParameters({
   notes: { markdown: require('./../../../docs/emptyState.md') },
});

stories.add('Documentation', () => <></>);
